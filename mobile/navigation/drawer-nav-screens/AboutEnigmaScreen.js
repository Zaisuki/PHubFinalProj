import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const AboutEnigmaScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Course Screen</Text>
            <Button
            title='Click Here'
            onPress={() => ('Button Clicked!')}
            />
        </View>
    )
};

export default AboutEnigmaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});