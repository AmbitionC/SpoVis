# Author: Hao Chen
# Date: May.12
# Description: Draw the Topological Diagram of Each Facility

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 导入数据
def import_data(dataPath):
    data = pd.read_csv(dataPath)
    return data

def draw_scatter(scatterData, marker, size, scatterLabel):
    plt.plot(scatterData['lng'], scatterData['lat'], marker, markersize=size, label=scatterLabel)

def draw_line(recommend, scatterb, threshold, color_style):
    for i in range(recommend.shape[0]):
        for j in range(scatterb.shape[0]):
            distance = np.sqrt(np.square(recommend.iloc[i, 0] - scatterb.iloc[j, 0]) + np.square(
                recommend.iloc[i, 1] - scatterb.iloc[j, 1]))
            if distance < threshold:
                line_start = [recommend.iloc[i, 1], scatterb.iloc[j, 1]]
                line_end = [recommend.iloc[i, 0], scatterb.iloc[j, 0]]
                plt.plot(line_start, line_end, color=color_style)


# 做出拓扑图
# graphIndex=[0, 1, 2, 3]用于映射到聚类中心数量k=[200, 100, 40, 30]
def draw_topology(graphIndex, type):
    centroidsPath = ['../DataSet/Centroids/Centroids_200.csv',
                     '../DataSet/Centroids/Centroids_100.csv',
                     '../DataSet/Centroids/Centroids_40.csv',
                     '../DataSet/Centroids/Centroids_30.csv']

    existsPath = ['../DataSet/Exists/Exists_200.csv',
                  '../DataSet/Exists/Exists_100.csv',
                  '../DataSet/Exists/Exists_40.csv',
                  '../DataSet/Exists/Exists_30.csv']

    recommendsPath = ['../DataSet/Recommends/Recommends_200.csv',
                      '../DataSet/Recommends/Recommends_100.csv',
                      '../DataSet/Recommends/Recommends_40.csv',
                      '../DataSet/Recommends/Recommends_30.csv']

    recommend_centroids = ['Recommend Results and Centroids(k=200)',
                           'Recommend Results and Centroids(k=100)',
                           'Recommend Results and Centroids(k=40)',
                           'Recommend Results and Centroids(k=30)']

    recommend_exists = ['Recommend Results and Neighboring Facilities(k=200)',
                        'Recommend Results and Neighboring Facilities(k=100)',
                        'Recommend Results and Neighboring Facilities(k=40)',
                        'Recommend Results and Neighboring Facilities(k=30)'
                        ]

    distance_threshold = [0.004, 0.004, 0.004, 0.004]

    centroidsData = import_data(centroidsPath[graphIndex])
    existsData = import_data(existsPath[graphIndex])
    recommendsData = import_data(recommendsPath[graphIndex])

    # 筛选数据集，以获得放大效果
    centroidsData = centroidsData.drop(centroidsData[(centroidsData['lng'] > 120.425) | (centroidsData['lat'] < 31.5)].index)
    existsData = existsData.drop(existsData[(existsData['lng'] > 120.425) | (existsData['lat'] < 31.5)].index)
    recommendsData = recommendsData.drop(recommendsData[(recommendsData['lng'] > 120.425) | (recommendsData['lat'] < 31.5)].index)

    print(existsData)

    labels = ["Centroids Distribution", "Exist Facilities", "Recommend Results"]

    # 聚类中心散点图
    draw_scatter(centroidsData, 'or', 5, labels[0])
    draw_scatter(existsData, 'sk', 5, labels[1])
    draw_scatter(recommendsData, '^b', 5, labels[2])


    if type == 'recommend_centroids':
        # 聚类中心和推荐设施连线
        draw_line(recommendsData, centroidsData, distance_threshold[graphIndex], 'g')
        plt.title(recommend_centroids[graphIndex])

    else:
        # 已有设施和推荐点连线
        draw_line(recommendsData, existsData, distance_threshold[graphIndex], 'g')
        plt.title(recommend_exists[graphIndex])

    plt.xlabel('Longitude')
    plt.ylabel('Latitude')
    plt.legend()
    plt.show()

draw_topology(3, 'recommend_exists')