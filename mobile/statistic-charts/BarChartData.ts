import { ChartData } from "react-native-chart-kit/dist/HelperTypes"

export const barChartData : ChartData = {
    labels: ['Coach', 'Connect', 'Check', 'Missing'],
    datasets: [
        {
        data: [30 , 30 , 60, 60,],
        colors:[
        (opacity = 1) => 'green', 
        (opacity = 1) => 'green', 
        (opacity = 1) => 'green', 
        (opacity = 1) => 'red' 
    ]
    },
    {
        data: [100],
        withDots: false
    }, 
],

}