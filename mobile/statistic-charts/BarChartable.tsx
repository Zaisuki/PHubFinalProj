import {View, Text, useWindowDimensions} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { barChartData } from './BarChartData';

const BarChartable = () => {
    const {width} = useWindowDimensions();
    return (
        <View>
            <Text style = {{
                textAlign: 'center',
                fontSize: 20
            }}>YOUR OVERALL PROGRESS</Text>
            <BarChart
            data = {barChartData}
            yAxisLabel=''
            yAxisSuffix=''
            width={width}
            height={250}
            chartConfig={{
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                color: () => 'black',
                barPercentage: 1
            }}
            style={{
                borderColor:'black', 
                borderWidth: 1,
            }}
            withInnerLines = {false}
            withCustomBarColorFromData
            flatColor
            fromZero
            showBarTops = {false}
            />
        </View>
    )
}

export default BarChartable;