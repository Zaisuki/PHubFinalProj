import { ImageBackground, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { hays, ogrenek, upang, whatever } from '../../mgadimahanapnaimage';

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
        <ImageBackground source={upang} style={{
            height: 150
        }}>
        <Image source = {hays} style={styles.userImg}/>
        </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props}/>
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    userImg: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        position: 'absolute',
        left: width / 2 - 110,
        bottom: -110 / 2,
        borderWidth: 4,
        borderColor: 'white'
    },
    drawerListWrapper: {
        marginTop: 110 / 2 + 10
    },
    drawerBackground: {
        backgroundColor: 'rgba(0,0,0, 0.8)'
    }

})