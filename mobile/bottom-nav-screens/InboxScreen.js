import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const InboxScreen = ({navigation}) => {
    const [teacher, setTeacher] = React.useState("");
    const teachers = [
        {key:'Jan', value: 'Sir Jan Sebastian'},
        {key:'Francis', value: 'Sir Francis'}
    ]
    return (
        <View style = {{
            padding: 20
        }}>
            <SelectList 
            setSelected = {setTeacher}
            data = {teachers}
            placeholder = 'Select Instructor'
            dropdownStyles={{
                position: 'absolute',
                top: 40,
                width: '100%',
                zIndex: 999
            }}
            />
        </View>
    )
};

export default InboxScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});