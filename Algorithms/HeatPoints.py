# Author: Hao Chen
# Date: May.15
# Description: Exchange Data from csv to Json

import pandas as pd

# 导入数据
def import_data(dataPath):
    data = pd.read_csv(dataPath)
    return data

dataPath = ['../DataSet/HeatPoints/HeatMap_High.csv',
            '../DataSet/HeatPoints/HeatMap_Middle.csv',
            '../DataSet/HeatPoints/HeatMap_Low.csv']

data_all = []

def transfer_data(data):
    data_total = []
    for i in range(data.shape[0]):
        data_piece = {"lng": data['lng'].iloc[i], "lat": data['lat'].iloc[i], "count": data['value'].iloc[i]}
        data_all.append(data_piece)
    return data_total

def transfer_heatMap():
    for i in range(3):
        data = import_data(dataPath[i])
        transfer_data(data)

    print(len(data_all))
    print(data_all)

def transfer_distribution():
    data_path = '../DataSet/FacilityLocation/Gym.csv'
    data = import_data(data_path)
    data_total = []
    for i in range(data.shape[0]):
        data_piece = [float(data['lng'].iloc[i]), float(data['lat'].iloc[i])]
        data_total.append(data_piece)
    print(data_total)

transfer_distribution()