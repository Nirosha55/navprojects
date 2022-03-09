import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const DashBoardPage = ({navigation}) => {
  const signoutButtonClicked = () => {
    AsyncStorage.setItem('USER_LOGGEDIN', 'false');
    navigation.navigate('Welcome');
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={signoutButtonClicked}>
        <View style={styles.loginview}>
          <Text style={styles.logintext}>SIGNOUT</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default DashBoardPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginview: {
    height: 50,
    width: 350,
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 20,
  },
  logintext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
