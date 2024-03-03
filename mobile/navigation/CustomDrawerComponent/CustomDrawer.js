import { ImageBackground, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import{ React,  useEffect, useState  } from 'react';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { hays, ogrenek, upang, whatever } from '../../mgadimahanapnaimage';
import { profile } from '../../services/user';


const {width} = Dimensions.get('screen');

const CustomDrawer = props => {

  const [data, setData] = useState({});
  const [userInformation, setUserInformation] = useState({});
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await profile();
            setData(response);
            setUserInformation(() => (response.userType === 'student' ? response.studentInformation : response.userType === 'professor' ? response.professorInformation : response.adminInformation));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  
    fetchData();
  }, []);


  return (
    <DrawerContentScrollView {...props}>
        <ImageBackground source={upang} style={{
            height: 150
        }}>
        <Image source = {hays} style={styles.userImg}/>
        </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <Text style = {{
          textAlign: 'center',
          margin: 5
        }}>{userInformation.lastName}, {userInformation.firstName}, {userInformation.middleName}</Text>
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
        marginTop: 110 / 2 + 10,
    },
    drawerBackground: {
        backgroundColor: 'rgba(0,0,0, 0.8)'
    }

})