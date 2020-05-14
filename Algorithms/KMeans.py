# Author: Hao Chen
# Date: May.8
# Description: Population distribution using K-Means

from numpy import *
import numpy as np
import time
import matplotlib.pyplot as plt
import pandas as pd

# calculate Euclidean distance
def euclDistance(vector1, vector2):
    return sqrt(sum(power(vector2 - vector1, 2)))


# init centroids with random samples
def initCentroids(dataSet, k):
    numSamples, dim = dataSet.shape
    centroids = zeros((k, dim))
    for i in range(k):
        index = int(random.uniform(0, numSamples))
        centroids[i, :] = dataSet[index, :]
    return centroids


# k-means cluster
def kmeans(dataSet, k):
    numSamples = dataSet.shape[0]
    # first column stores which cluster this sample belongs to,
    # second column stores the error between this sample and its centroid
    clusterAssment = mat(zeros((numSamples, 2)))
    clusterChanged = True

    ## step 1: init centroids
    centroids = initCentroids(dataSet, k)

    while clusterChanged:
        clusterChanged = False
        ## for each sample
        for i in range(numSamples):
            minDist = 100000.0
            minIndex = 0
            ## for each centroid
            ## step 2: find the centroid who is closest
            for j in range(k):
                distance = euclDistance(centroids[j, :], dataSet[i, :])
                if distance < minDist:
                    minDist = distance
                    minIndex = j

            ## step 3: update its cluster
            if clusterAssment[i, 0] != minIndex:
                clusterChanged = True
                clusterAssment[i, :] = minIndex, minDist ** 2

        ## step 4: update centroids
        for j in range(k):
            pointsInCluster = dataSet[nonzero(clusterAssment[:, 0].A == j)[0]]
            centroids[j, :] = mean(pointsInCluster, axis=0)

    print('Cluster complete!')
    return centroids, clusterAssment


# show your cluster only available with 2-D data
def showCluster(dataSet, k, centroids, clusterAssment):
    numSamples, dim = dataSet.shape
    if dim != 2:
        print("Sorry! I can not draw because the dimension of your data is not 2!")
        return 1

    mark = ['Dr', 'Db', '+g', '^k', 'sr', '+b', 'sb', 'db', '<b', 'pb']

    titleMap = ['Population Distribution',
                'Equipments Centroids(K=200)',
                'Fitness Centers Centroids(K=100)',
                'Outdoor Courts Centroids(K=40)',
                'Stadiums Centroids(K=30)'
                ]

    # draw all samples
    # for i in range(numSamples):
    #     plt.plot(dataSet[i, 1], dataSet[i, 0], mark[0], markersize=2)
    #     plt.title(titleMap[0])
    #     plt.xlabel('Latitude')
    #     plt.ylabel('Longitude')

    # # draw the centroids
    for i in range(k):
        plt.plot(centroids[i, 1], centroids[i, 0], mark[4], markersize=4)
        plt.title(titleMap[4])
        plt.xlabel('Latitude')
        plt.ylabel('Longitude')

    plt.show()
    return centroids

## step 1: load data
print("step 1: load data...")
dataSet = []
fileIn = open('../DataSet/Population.txt')
for line in fileIn.readlines():
    lineArr = line.strip().split('\t')
    dataSet.append([float(lineArr[0]), float(lineArr[1])])

## step 2: clustering...
print("step 2: clustering...")
dataSet = mat(dataSet)
# 备注：当k = 200时，表示设施数量
# 当k = 100时，表示健身房数量
# 当k = 40时，表示室外球场数量
# 当k = 30时，表示室内场馆数量
k = 30
centroids, clusterAssment = kmeans(dataSet, k)
print(centroids)

## step 3: show the result
print("step 3: show the result...")
showCluster(dataSet, k, centroids, clusterAssment)

print("step 4: save the result...")
print("show the centroid:")
print(centroids)

name = ['lat', 'lng']
data_sub = pd.DataFrame(columns=name, data=centroids)
print(data_sub)
# data_sub.to_csv(r'Data/3.Centroid/Centroid_300.csv', index=False)
#np.savetxt('centroids.txt', centroids)