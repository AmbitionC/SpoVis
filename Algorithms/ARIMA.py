# Author: Hao Chen
# Date: Mar.8
# Description: predict the future data using ARIMA


import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.graphics.tsaplots import plot_acf
from statsmodels.tsa.stattools import adfuller as ADF
from statsmodels.graphics.tsaplots import plot_pacf
from statsmodels.stats.diagnostic import acorr_ljungbox
from statsmodels.tsa.arima_model import ARIMA
import statsmodels.api as sm
import math
from pylab import mpl
import seaborn as sns
from scipy.stats import norm, skew
from scipy import stats

# 计算平均数
def mean(x):
    return sum(x) / len(x)

# 计算每一项数据与均值的差
def de_mean(x):
    x_bar = mean(x)
    return [x_i - x_bar for x_i in x]

# 辅助计算函数dot product, sum_of_squares
def dot(v, w):
    return sum(v_i * w_i for v_i, w_i in zip(v, w))

def sum_of_squares(v):
    return dot(v, v)

# 计算方差
def variance(x):
    n = len(x)
    deviations = de_mean(x)
    return sum_of_squares(deviations) / (n - 1)

# 标准差
def standard_deviation(x):
    return math.sqrt(variance(x))

# 计算协方差
def covariance(x, y):
    n = len(x)
    return dot(de_mean(x), de_mean(y)) / (n - 1)

# 计算相关系数
def correlation(x, y):
    stdev_x = standard_deviation(x)
    stdev_y = standard_deviation(y)
    if stdev_x > 0 and stdev_y > 0:
      return covariance(x, y) / stdev_x / stdev_y
    else:
      return 0

history_data_path = '../DataSet/History.csv'

# 导入数据
def import_data(dataPath):
    data_origin = pd.read_csv(dataPath, encoding='gb2312')
    return data_origin

# 绘制图像
def plot_figure(title, xlabel, ylabel, x_data, y_data):
    # 用来正常显示中文标签
    plt.rcParams['font.sans-serif'] = ['FangSong']
    # 用来正常显示负号
    plt.rcParams['axes.unicode_minus'] = False
    # 画出设备数量和运动路径的长度
    plt.title(title)
    plt.ylabel(ylabel)
    plt.xlabel(xlabel)
    x = range(len(x_data))
    y = y_data
    plt.plot(x, y, label='Instrument')
    plt.show()

# 自相关图
def plot_acf_figure(data, title):
    plot_acf(data)
    plt.title(title)
    plt.show()

# 偏自相关图
def plot_pacf_figure(data, title):
    plot_pacf(data)
    plt.title(title)
    plt.show()

# 平稳性检测
def caculate_ADF(data):
    # 返回值依次为adf、pvalue、nobs、critical values、icbest、regresult、resstore
    # adf:-0.0
    # pvalue: 0.95853208606005602
    # nobs: 8
    # critical values: 10
    # icbest: {'1%': -4.3315729999999997, '5%': -3.2329500000000002, '10%': -2.7486999999999999}
    # resstore: -414.96637673426136
    print(u'原始序列的ADF检验结果为：', ADF(data))

# 对数据进行差分
def caculate_diff(data, title):
    diff_data = data.diff(1).dropna()
    diff_data.columns = [u'数目差分']
    diff_data.plot()
    plt.title(title)
    plt.show()
    return diff_data

# 白噪声检验，返回统计量和p值
def caculate_acorr_ljungbox(data):
    print(u'差分序列的白噪声检验结果为：', acorr_ljungbox(data, lags=1))
    return acorr_ljungbox(data, lags=1)

def ARIMA_prediction(data, diff_data):
    # 定阶
    # 一般阶数不超过length/10
    diff_data.columns = [u'数目差分']
    pmax = int(len(diff_data) / 10)
    qmax = int(len(diff_data) / 10)

    data_sub = pd.Series(data.astype(float))
    data_sub.index = pd.Index(sm.tsa.datetools.dates_from_range('1995', '2013'))
    print('data_sub: ', data_sub)

    # 定义bic矩阵
    bic_matrix = []
    for p in range(pmax + 1):
      tmp = []
      for q in range(qmax + 1):
        try:  # 存在部分报错，所以用try来跳过报错
          tmp.append(ARIMA(data_sub, (p, 1, q)).fit().bic)
        except:
          tmp.append(None)
      bic_matrix.append(tmp)

    # 从中可以找出最小值
    bic_matrix = pd.DataFrame(bic_matrix)
    # print(bic_matrix)
    # print(bic_matrix.stack())

    # 先用stack展平，然后用idxmin找出最小值位置
    p, q = bic_matrix.stack().idxmin()
    print(u'BIC最小的p值和q值为：%s、%s' % (p, q))

    model = ARIMA(data_sub, (1, 1, 0)).fit(disp=0)
    output = model.forecast(7)
    print(output)
    return output

# 计算相关系数
def caculate_covariance():
  health = [95.2, 92.3, 92.4, 86.4, 93, 84, 97.4, 94.3]
  # Ins表示各个区的健身设施的数目
  Ins = [14192, 4658, 1791, 1080, 1211, 1326, 1230, 2896]
  # Ins_avg表示人均健身设施数目
  Ins_avg = [21.89, 28.53, 25.49, 15.44, 12.73, 23.84, 17.70, 23.17]
  # Area_avg表示人均健身设施面积
  Area_avg = [2966.56, 3343.83, 2767.21, 1346.43, 2137.54, 3665.39, 5363.77, 2473.56]

  # 输出相关系数结果
  print('国民体检合格率和各区健身数目相关系数：', abs(correlation(health, Ins)))
  print('国民体检合格率和各区人均健身数目相关系数：', abs(correlation(health, Ins_avg)))
  print('国民体检合格率和各区人均健身面积相关系数：', abs(correlation(health, Area_avg)))
  print(covariance(health, Ins), covariance(health, Ins))

  ###########################################################################################
  # Part5: 画出国民体检合格率和各区健身设施数目、人均健身设施数目、人均健身设施面积的先验高斯分布图像
  ###########################################################################################
  # 图像基本设置
  color = sns.color_palette()
  sns.set_style('darkgrid')

  mpl.rcParams['axes.unicode_minus'] = False

  sns.distplot(Area_avg, fit=norm)
  (mu, sigma) = norm.fit(Area_avg)
  print('\n mu = {:.2f} and sigma = {:.2f}\n'.format(mu, sigma))
  plt.legend(['Normal dist. ($\mu=$ {:.2f} and $\sigma=$ {:.2f} )'.format(mu, sigma)], loc='best')
  plt.ylabel('Frequency')
  plt.title('Facilities')
  fig1 = plt.figure()
  res1 = stats.probplot(Area_avg, plot=plt)
  plt.show()

def main():
  dataSet = import_data(history_data_path)
  instrument_set = dataSet['Instrument']
  # 原始曲线
  plot_figure('Growth Curve', 'Year', 'Number', dataSet['Year'], dataSet['Instrument'])

  # 自相关曲线
  plot_acf_figure(instrument_set, 'ACF Figure')

  # 平稳性检测
  # caculate_ADF(instrument_set)

  # 差分数据
  diff_data = caculate_diff(instrument_set, 'Diff Figure')

  # 差分数据的自相关曲线
  plot_acf_figure(diff_data, 'Diff ACF Figure')

  # 差分数据的偏自相关图
  plot_pacf_figure(diff_data, 'Diff PACF Figure')

  # 差分序列的平稳性检测
  # caculate_ADF(diff_data)

  # 白噪声检验
  # caculate_acorr_ljungbox(diff_data)

  # 使用ARIMA预测
  # ARIMA_prediction(instrument_set, diff_data)

  caculate_covariance()

main()

