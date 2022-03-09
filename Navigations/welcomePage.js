import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  Pressable,
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').width;

const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    gotoScreenBasedOnLogin();
  });

  const gotoScreenBasedOnLogin = async () => {
    const isuserloggedin = await AsyncStorage.getItem('USER_LOGGEDIN');
    if (isuserloggedin == 'true') {
      navigation.navigate('DashBoard');
    } else {
      navigation.navigate('Login');
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textOneStyle}>{'AUTOMATE'}</Text>
      <Text style={styles.textTwoStyle}>
        {'Welcome To Automate Technologies.'}
      </Text>
      <Image
        source={require('../assets/automatelogo.png')}
        style={{width: ScreenWidth - 100, height: ScreenHeight * 0.2}}
      />
      <Text style={styles.textThreeStyle}>
        {'Automate is Product Based PrivateLimited Company For Automobiles.'}
      </Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  textOneStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  textTwoStyle: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#404040',
  },
  textThreeStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#404040',
    marginTop:230
  },
});
