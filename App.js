import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoardPage from './Navigations/dashBoardPage';
import WelcomePage from './Navigations/welcomePage';
import LoginPage from './Navigations/loginPage';
// import LoginFormComponent from './loginFormComp';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="DashBoard" component={DashBoardPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        {/* <Stack.Screen name="LoginForm" component={LoginFormComponent} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React, { useState }from 'react';
// import {StyleSheet, Text, View,SafeAreaView ,TextInput,TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const App = () => {
//   const [textInputValue, settextInputValue] = useState('');
//   const [value, setvalue] = useState('');

//   const saveValue = () => {
//     if (textInputValue) {
//       AsyncStorage.setItem('ENTER_KEY', textInputValue);
//       settextInputValue('');
//       alert('Saved our Data');
//     } else {
//       alert('pls enter something here');
//     }
//   }
//   const getValue = () => {
//     AsyncStorage.getItem('ENTER_KEY')
//       .then((value) => {
//         setvalue(value);
//       })
//   }
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <Text style={styles.textStyle}>AsyncStorage</Text>
//         <TextInput
//           style={styles.inputTextStyle}
//           placeholder="Enter Something Here"
//           editable={true}
//           onChangeText={text => settextInputValue(text)}
//           value={settextInputValue}
//           underlineColorAndroid="transparent"
//         />
// <View style={{padding:100}}></View>
//         <TouchableOpacity onPress={saveValue} style={styles.buttonStyle}>
//           <Text style={styles.buttonText}>Save Value</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={getValue} style={styles.buttonStyle}>
//           <Text style={styles.buttonText}>Get Value</Text>
//         </TouchableOpacity>
//         <Text style={styles.textFinal}>{value}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding:15
//   },
//   inputTextStyle: {
//     borderWidth: 1,
//     margin: 5,
//     borderRadius: 2,
//     borderColor: 'black',
//     padding: 10,
//     height: 50,
//     textAlign: 'center',
//   },
//   textStyle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   buttonStyle: {
//     fontSize: 18,
//     color: 'white',
//     backgroundColor: 'blue',
//     padding: 5,
//     marginTop: 15,
//     minWidth: 220,
//     height: 60,

//   },
//   buttonText: {
//     padding: 5,
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 22,
//     justifyContent: 'center',
//     marginTop: 5,

//   },
//   textFinal: {
//     padding: 10,
//     textAlign: 'center',
//   }
// });
