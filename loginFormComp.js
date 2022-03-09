import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScreenWidth = Dimensions.get('window').width;

const LoginFormComponent = ({navigation}) => {
  const [empname, setEmpname] = useState('');
  const [password, setPassword] = useState('');

  const loginClicked = () => {
    if (empname.length == 0 || password.length == 0) {
      alert('enter empname & password');
      return;
    }
    loginServerCall();
  };

  const loginServerCall = async () => {
    const bodyObj = {
      empname: empname,
      password: password,
    };

    await fetch(
      'http://ec2-3-109-35-105.ap-south-1.compute.amazonaws.com:8083/hrms/emplogin',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObj),
      },
    )
      .then(response => response.json())
      .then(json => {
        //console.log('json', bodyObj);
        console.log('json', json);
        console.log(json.status);
        if (json.status == '200') {
          AsyncStorage.setItem('USER_LOGGEDIN', 'true');
          navigation.navigate('DASHBOARD');
        } else {
          alert(json.errorMessage);
        }
      })
      .catch(error => {
        console.error('error:', error);
      });
  };

  return (
    <SafeAreaView>
      <Text
        style={{
          color: 'red',
          fontWeight: 'bold',
          fontSize: 20,
          justifyContent: 'center',
          marginTop: 100,
          textAlign: 'center',
        }}>
        Welcome to Automate.
      </Text>
      <View style={{padding: 30}}></View>
      <View style={{padding: 15}}>
        <TextInput
          style={styles.inputTextStyle}
          placeholder="Employee ID"
          editable={true}
          onChangeText={text => setEmpname(text)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          value={empname}
        />

        <TextInput
          style={styles.inputTextStyle}
          placeholder="Password"
          editable={true}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          onEndEditing={e => handleValidPassword(e.nativeEvent.text)}
          value={password}
        />
      </View>

      <Pressable onPress={loginClicked}>
        <View style={styles.loginview}>
          <Text style={styles.logintext}>LOG IN</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
export default LoginFormComponent;

const styles = StyleSheet.create({
  inputTextStyle: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 6,
    padding: 10,
    height: 50,
  },
  text1Style: {
    color: 'grey',
    marginLeft: 250,
  },
  signupButtonStyle: {
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    margin: 10,
    height: 50,
  },
  loginview: {
    height: 50,
    width: 350,
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: 'black',
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
  errorMsg: {
    color: 'red',
    paddingLeft: 12,
  },
});
