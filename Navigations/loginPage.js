import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Button,
  Alert,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScreenWidth = Dimensions.get('window').width;

const userinfo = {empname: 'Niru', password: 'Niru@123'};

const LoginPage = ({navigation}) => {
  const [empname, setEmpname] = useState('');
  const [password, setPassword] = useState('');

  const loginBtnClicked = () => {
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
          navigation.navigate('DashBoard');
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
          color: 'blue',
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
        <Text style={{paddingLeft: 10}}>{'USERNAME:'}</Text>
        <TextInput
          style={styles.inputTextStyle}
          placeholder="Employee ID"
          editable={true}
          onChangeText={text => setEmpname(text)}
          value={empname}
        />
        <Text style={{paddingLeft: 10}}>{'PASSWORD:'}</Text>
        <TextInput
          style={styles.inputTextStyle}
          placeholder="Password"
          editable={true}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <View style={styles.forgotView}>
          <Pressable>
            <Text style={styles.forgotText}>{'Forgot Password?'}</Text>
          </Pressable>
        </View>
      </View>
      <Pressable onPress={loginBtnClicked}>
        <View style={styles.loginview}>
          <Text style={styles.logintext}>LOG IN</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
export default LoginPage;

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
    width: 360,
    marginTop: 120,
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 6,
    margin: 15,
  },
  logintext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }, forgotText: {
    paddingTop: 5,
    marginRight:12,
    fontSize: 14,
    fontWeight: "400",
    color: 'darkgray',
    textAlign: "right",
  },
});
