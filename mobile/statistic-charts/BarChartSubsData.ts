import { ChartData } from "react-native-chart-kit/dist/HelperTypes"

export const barChartData : ChartData = {
    labels : ['HIS 069', 'ITE 300', 'GEN 201', 'GEN 143', 'ITE 069', 'ITE 200', 'ENG 143', 'SSP 999'],
    datasets: [
        {
        data: [20 , 40 , 60, 80, 100, 50, 75, 100],
        colors:[
        (opacity = 1) => 'black', 
        (opacity = 1) => 'black',
        (opacity = 1) => 'black',
        (opacity = 1) => 'black',
        (opacity = 1) => 'black',
        (opacity = 1) => 'black',
        (opacity = 1) => 'black',
        (opacity = 1) => 'black'
    ]
    },
    {
        data: [100],
        withDots: false
    }, 
],

}