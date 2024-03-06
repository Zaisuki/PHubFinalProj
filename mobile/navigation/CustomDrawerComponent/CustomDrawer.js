import { ImageBackground, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import{ React,  useEffect, useState  } from 'react';
import { logout } from '../../services/entry';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { hays, logoutIcon, ogrenek, phublogowithoutbg, upang, whatever } from '../../mgadimahanapnaimage';
import { profile } from '../../services/user';
import { Card } from 'react-native-paper';
import { loadAsync } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const {width} = Dimensions.get('screen');
const loadFontsAsync = async () => {
  await loadAsync({
    'Raleway-Regular': require('../../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('../../assets/fonts/Raleway-Bold.ttf'),
  });
};

loadFontsAsync();

const CustomDrawer = props => {

  const navigation = useNavigation();

  const handleLogout = () => {
    logout();
    navigation.replace('Login');
};

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
    <DrawerContentScrollView style = {{
      backgroundColor: '#3a4f24',
    }} {...props}>
        <ImageBackground style={{
            height: 100
        }}>
        <Image source = {phublogowithoutbg} style={styles.userImg}/>
        </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <Text style = {{
          textAlign: 'center',
          margin: 5,
          fontFamily: 'Raleway-Bold',
          fontSize: 21,
          color: 'white',
          marginBottom: 22,
          marginTop: -7
        }}>PHINMA <Text style = {{color: '#dbbc2c'}}>HUB</Text></Text>
        
        <DrawerItemList {...props}/>
        <Card onPress = {handleLogout} style = {{backgroundColor: 'white', marginTop: 23}}>
          <View style ={{ flexDirection: 'row',
        alignItems: 'center', padding: 10, marginStart: 0, backgroundColor:'#3a4f24'}}>
          <Image source={logoutIcon} style = {{height: 60, width: 60}}/>
          <Text style = {{fontSize: 13, marginStart: 32, fontFamily: 'Raleway-Bold', color: 'white'}}>Log <Text style = {{color: '#dbbc2c'}}>out</Text></Text>
          </View>
        </Card>
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
        left: width / 2 - 130,
        bottom: -125 / 2,
    },
    drawerListWrapper: {
        marginTop: 120 / 2 + 10,
    },
    drawerBackground: {
        backgroundColor: 'rgba(0,0,0, 0.8)'
    }

})