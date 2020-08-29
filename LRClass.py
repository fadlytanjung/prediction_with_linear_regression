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
    
    def read_data_excel(self, dataPath): # read excel
        data = pd.read_excel(dataPath)
        data = read_data_excel('data/datafix.xlsx')
        data = data.iloc[1:-7] # get row 1-36 (avoid useless data)
        data['date'] = data.apply(lambda row: 
                                str(row['TAHUN'])+'-'+
                                str('0'+str(bulan.index(row['BULAN'])+1) if bulan.index(row['BULAN'])+1 <=9 else bulan.index(row['BULAN'])+1)
                                +'-01',axis=1)
        data = data.set_index('date') # set index
        data = data.reset_index() # reset index
        data = data.drop(columns=['TAHUN','BULAN']) # delete columns TAHUN BULAN
        data.to_csv('data/datafix.csv',index=False,header=True) #save data to CSV format
        return data

    def train_test_plit_data(self, data, label, columns):
        X = data.iloc[:,[i for i in range(len(columns)) if columns[i] != label]].values # get column SD,DD,external
        y = data.iloc[:,np.where(columns == label)[0][0] if len(np.where(columns == label)) > 0 else 0].values # get column KD
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state=42) # random split
        return X_train, X_test, y_train, y_test

    def scaler_data(self, X,y):
        X = self.scaller.transform(X) # scaler value X
        y = self.scaller.transform(y) # scaler value Y
        return X,y

    def inverse_scaler(self, data):
        return self.scaller.inverse_transform(data) # reverse scaler

    def get_data_forecast(self, data,label,columns,N):
        X = data.iloc[-N:,[i for i in range(len(columns)) if columns[i] != label]] # get column data KD last N (N is Month predict)
        return X.values

    def plot_data(self, data,label,forecast,n):
    
        old_data = data[label][-n*2:] # get last N*2 data (N is Month predict)
        new_data = [np.nan for _ in range(len(old_data))] # initial old data to new array

        list_date = list(old_data.index) # get list of index (datetime)
        last_date = list(old_data.index)[-1] # get last datetime
        
        last_year = last_date.split('-')[0] # get last year
        last_month = last_date.split('-')[1] # get last month
        
        label_data = [old_data[i] for i in range(len(old_data))] # push actual data KD
        for i in range(n):
            new_data.append(forecast[i]) # push new data forecast
            label_data.append(np.nan) # push NAN data actual
            
            new_year = int(last_year) # initial newyear
            new_month = int(last_month)+i+1 # initial new month

            if new_month > 12: # if month > 12 new year +1 and month re-start from 1
                new_year += 1
                last_month= int(last_month)-12
                last_year= int(last_year)+1
                new_month -= 12
            list_date.append(str(new_year)+'-'+str('0'+str(new_month) if new_month < 10 else new_month)+'-01') # push data new date
        new_df = {'date':list_date,label:label_data,'forecast':new_data} # convert to format dataFrame
        
        new_df = pd.DataFrame(data=new_df) # create new dataFrame
        
        # initial plot
        plt.figure(figsize=(25, 8)) # initital size fig
        plt.plot(new_df['date'], new_df[label], 'b-', label = label) # initial label
        plt.plot(new_df['date'], new_df['forecast'], 'r-', label = 'Forecast') # initial forecast
        plt.xlabel('Date');
        plt.ylabel('Angaran (Milyar) IDR)');
        plt.title('Label of Prediction '+label)
        plt.savefig('static/hasilplot/{}-{}.png'.format(label,n))
        # plt.show(); # show plot
        
        return new_df

    def model(self,X_train,y_train):
        model = LinearRegression() # initial LinearRegression model
        return model.fit(X_train,y_train) # fit model
        

if __name__ == '__main__':
    model = lRClass(a)