import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import BarChartable from '../../statistic-charts/BarChartable';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarChartSubs from '../../statistic-charts/BarChartSubs';
import * as Progress from 'react-native-progress';

const StatisticScreen = ({navigation}) => {
    return (
        <SafeAreaView edges={['top', 'left', 'right', 'bottom']}>
            <Text style = {{
                fontSize: 20,
                paddingLeft: 70
                
            }}>YOUR OVERALL PROGRESS</Text>

            <View style = {{
                padding: 10,
                marginLeft: 25
            }}>
            <Text>COACH</Text>
            <Progress.Bar 
            progress={0.3} 
            width={230}
            height={25}
            borderColor='black'
            color='#32CD32'
            unfilledColor='white'
            borderWidth={3}
            style = {{
                borderRadius: 20,
                marginStart: -5
            }} />
            </View>
            <View style = {{
                padding: 10,
                marginLeft: 25

            }}>

            <Text>CONNECT</Text>
            <Progress.Bar 
            progress={0.3} 
            width={230}
            height={25}
            borderColor='black'
            color='#32CD32'
            unfilledColor='white'
            borderWidth={3}
            style = {{
                borderRadius: 20,
                marginStart: -5
            }} />
            </View>
            <View style = {{
                padding: 10,
                marginLeft: 25
            }}>
            <Text>CHECK</Text>
            <Progress.Bar 
            progress={0.5} 
            width={230}
            height={25}
            color='#32CD32'
            borderColor='black'
            unfilledColor='white'
            borderWidth={3}
            style = {{
                borderRadius: 20,
                marginStart: -5
            }} />
            </View>
            <View style = {{
                padding: 10,
                marginLeft: 25
            }}>

            <Text>MISSING</Text>
            <Progress.Bar 
            progress={0.5} 
            width={230}
            height={25}
            color='red'
            borderColor='black'
            unfilledColor='white'
            borderWidth={3}
            style = {{
                borderRadius: 20,
                marginStart: -5
            }} />
            </View>
           <BarChartSubs />
        </SafeAreaView>
    )
};

export default StatisticScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});