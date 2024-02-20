import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import testID from '../../testID';
import { Calendar } from 'react-native-calendars';
import Day from 'react-native-calendars/src/calendar/day';
import { Grid } from 'stream-chat-expo';

const {width} = Dimensions.get('screen');
const renderItem = (item) => {
  return (
    <TouchableOpacity  onPress={() => Alert.alert(renderItem)} 
    style={{marginRight: 10, marginTop: 17}}>
      <Card>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>{item.name}</Text>
            <Avatar.Text label="J" />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
const getMonthData = () => {
  //let loadingData = true
  let dataToReturn = {
      "2024-02-20":[
      {name:"Astig Day",day: '2024-02-20', height: 100},
      {name:"Whats up second Stuff", day: '2024-02-20', height: 100},
      {name:"President's Day",day: '2024-02-22', height: 100},
      {name:"Birthday ng ibang tao", day: '2024-02-22', height: 100},
    ],

      "2024-03-22":[
      {name:"President's Day", day: '2024-03-22', height: 100},
      ],

      "2024-03-03":[
      {name:"Birthday parin ng ibang tao", day: '2024-03-03', height: 100},
      ],
      "2024-03=06": [
      {name:"Birthday ni Ley", day: '2024-03-06', height: 100},
      ],
      "2024-03=09": [
        {name:"Birthday ng aking Mother", day: '2024-03-09', height: 100},
        ],
      "2024-03=10": [
      {name:"Number ng birthday ni Glai", day: '2024-03-10', height: 100},
      ],
      "2024-03=14": [
      {name:"Valentines Day the 2nd", day: '2024-03-14', height: 100},
      ],
      "2024-03=16": [
      {name:"Sweet 16", day: '2024-03-16', height: 100},
      ],
      "2024-03=17": [
      {name:"Magandang Number", day: '2024-03-17', height: 100},

    ]
  };
return dataToReturn;
};

const renderEmptyDate = () => {
  return (
    <View style={styles.emptyDate}>
      <Text style= {{
        fontSize: 30,
        textAlign: 'center',
      }}>NO EVENTS TO SEE HERE!</Text>
    </View>
  );
};

const CalendarScreen = props =>  {
  const monthData = getMonthData();

  // reservationsKeyExtractor = (item, index) => {
  //   return `${item?.reservation?.day}${index}`;
  // };
    return (
      <Agenda
        items={monthData}
        renderItem={renderItem}
        showClosingKnob={true}
        initialNumToRender={4}
        renderEmptyData={renderEmptyDate}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={this.renderDay}
        // hideExtraDays={false}
        // showOnlySelectedDayItems
        // reservationsKeyExtractor={this.reservationsKeyExtractor}
      />
    );
  }
  

  export default CalendarScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    textAlignVertical: 'center', // <-- the magic
    marginTop: 200,
    width: 200,
    height: 300,
    left: width /2 - 95,

  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: 'green'
  },

  dayItem: {
    marginLeft: 34
  }
});