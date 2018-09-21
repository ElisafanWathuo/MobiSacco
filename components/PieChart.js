import React from 'react';
import {View, Text} from 'react-native';
import PureChart from 'react-native-pure-chart';

export default class PieChart extends React.Component {
    // onPieData = (rawData) => {
    //     data = []
    //     rawData.map(
    //         accountData => {
    //             data = [...]
    //         }
    //     )
    // }
    render () {
        let sampleData = [
            {
              value: 50,
              label: 'Marketing',
              color: 'red',
            }, {
              value: 40,
              label: 'Sales',
              color: 'blue'
            }, {
              value: 25,
              label: 'Support',
              color: 'green'
            }
        
          ]
          return (
              <View>
                <PureChart data={sampleData} type='pie' />
              </View>
          );
    }
}