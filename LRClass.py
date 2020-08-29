from sklearn.preprocessing import LabelEncoder
from matplotlib import pyplot as plt
from sklearn.impute import SimpleImputer

# %matplotlib inline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import preprocessing
from sklearn.linear_model import LinearRegression

import pandas as pd
import numpy as np
import collections
import sklearn

Imputer = SimpleImputer

class LRClass:
    def __init__(self,datatestPath):
        self.datatest = self.read_data_excel(datatestPath) if datatestPath.split('.')[len(datatestPath.split('.'))-1] == 'xlsx' else self.read_data_csv(datatestPath)

        self.encoder = LabelEncoder() # initial labelEncoder
        self.scaller = StandardScaler() # scale data number to float

    def read_data_csv(self,datatestPath): # read csv
        data = pd.read_csv(datatestPath,delimiter=",",encoding="latin-1")
        
        return data
    
    def read_data_excel(self,dataPath): # read excel
        data = pd.read_excel(dataPath)
        bulan = ['Januari','Februari','Maret','April',
                'Mei','Juni','Juli','Agustus',
                'September','Oktober','November','Desember'
                ]
        data['HARI'] = '01'
        data['date'] = data.apply(lambda row : str(row['TAHUN'])+'-'+str(bulan.index(row['BULAN'])+1 if bulan.index(row['BULAN'])+1 > 9 else '0'+str(bulan.index(row['BULAN'])+1))+'-'+str(row['HARI']),axis=1).astype(str)
        data['date'] = pd.to_datetime(data['date'])
        data = pd.concat([data['date'],data['KD'],data['SW'],data['DD']],axis=1)
        data.to_csv('data/data.csv',index=False,header=True)
        return data

    def fillEmptyData(self,data): # fill empty data cell with NAN value
        values = data[:]
        imp = Imputer(missing_values=np.NAN, strategy='mean', fill_value=None, verbose=0, copy=True)
        fill_column = imp.fit_transform(values)
        data[:] = fill_column
        return data
    
    def labelEncoder(self): # encode data string to Number encode
        encode = self.datatest.apply(lambda col: self.encoder.fit_transform(col.astype(str)), axis=0, result_type='expand')
        return encode

        

if __name__ == '__main__':
    model = lRClass(a)