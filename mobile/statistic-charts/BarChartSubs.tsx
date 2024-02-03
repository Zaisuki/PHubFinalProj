import {View, Text, useWindowDimensions} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { barChartData } from './BarChartSubsData';

const BarChartSubs = () => {
    const {width} = useWindowDimensions();
    return (
        <View>
            <Text style = {{
                textAlign: 'center',
                fontSize: 20,
                paddingTop: 10
            }}>QUIZZES</Text>
            <BarChart
            data = {barChartData}
            yAxisLabel=''
            yAxisSuffix=''
            xAxisLabel=''
            width={400}
            height={250}
            chartConfig={{
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                color: () => 'black',
                barPercentage: .5,
                propsForLabels: {
                    fontSize: 10
                }
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

export default BarChartSubs;