# Author: Hao Chen
# Date: May.15
# Description: Prepare the Topology DataSet for ECharts

import pandas as pd
import numpy as np

# 导入数据
def import_data(dataPath):
    data = pd.read_csv(dataPath)
    return data

def transfer_nodes(graphIndex):
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

    centroids_data = import_data(centroidsPath[graphIndex])
    exists_data = import_data(existsPath[graphIndex])
    recommends_data = import_data(recommendsPath[graphIndex])

    # 筛选数据集，以获得放大效果
    centroids_data = centroids_data.drop(centroids_data[(centroids_data['lng'] > 120.425) | (centroids_data['lat'] < 31.5)].index)
    exists_data = exists_data.drop(exists_data[(exists_data['lng'] > 120.425) | (exists_data['lat'] < 31.5)].index)
    recommends_data = recommends_data.drop(recommends_data[(recommends_data['lng'] > 120.425) | (recommends_data['lat'] < 31.5)].index)

    # 删除NaN的行
    centroids_data = centroids_data.dropna(axis=0, how='any')
    exists_data = exists_data.dropna(axis=0, how='any')
    recommends_data = recommends_data.dropna(axis=0, how='any')

    nodes = []

    for i in range(centroids_data.shape[0]):
        data_piece = {
            "name": "centroid-" + str(i + 1),
            "x": centroids_data['lng'].iloc[i],
            "y": -centroids_data['lat'].iloc[i],
            "symbol": 'circle',
            "itemStyle": {"color": 'red'},
        }
        nodes.append(data_piece)

    for i in range(exists_data.shape[0]):
        data_piece = {
            "name": "exist-" + str(i + 1),
            "x": exists_data['lng'].iloc[i],
            "y": -exists_data['lat'].iloc[i],
            "symbol": 'rect',
            "itemStyle": {"color": 'black'},
        }
        nodes.append(data_piece)

    for i in range(recommends_data.shape[0]):
        data_piece = {
            "name": "recommend-" + str(i + 1),
            "x": recommends_data['lng'].iloc[i],
            "y": -recommends_data['lat'].iloc[i],
            "symbol": 'triangle',
            "itemStyle": {"color": 'blue'},
        }
        nodes.append(data_piece)

    print(nodes)

def transfer_links(graphIndex):
    # 读取数据&基本处理
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

    centroids_data = import_data(centroidsPath[graphIndex])
    exists_data = import_data(existsPath[graphIndex])
    recommends_data = import_data(recommendsPath[graphIndex])

    # 筛选数据集，以获得放大效果
    centroids_data = centroids_data.drop(
        centroids_data[(centroids_data['lng'] > 120.425) | (centroids_data['lat'] < 31.5)].index)
    exists_data = exists_data.drop(exists_data[(exists_data['lng'] > 120.425) | (exists_data['lat'] < 31.5)].index)
    recommends_data = recommends_data.drop(
        recommends_data[(recommends_data['lng'] > 120.425) | (recommends_data['lat'] < 31.5)].index)

    # 删除NaN的行
    centroids_data = centroids_data.dropna(axis=0, how='any')
    exists_data = exists_data.dropna(axis=0, how='any')
    recommends_data = recommends_data.dropna(axis=0, how='any')

    links = []
    for i in range(recommends_data.shape[0]):
        for j in range(centroids_data.shape[0]):
            distance = np.sqrt(np.square(recommends_data.iloc[i, 0] - centroids_data.iloc[j, 0]) + np.square(recommends_data.iloc[i, 1] - centroids_data.iloc[j, 1]))
            if distance < 0.004:
                data_piece = {
                    "source": "recommend-" + str(i + 1),
                    "target": "centroid-" + str(j + 1),
                }
                links.append(data_piece)
    print(links)


transfer_nodes(1)
transfer_links(1)