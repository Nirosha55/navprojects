// import * as React from 'react';
// import {View, Text, StyleSheet,TextInput} from 'react-native';

// const SignInPage = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={{paddingLeft: 10}}>{'FIRSTNAME:'}</Text>
//       <TextInput
//         style={styles.inputTextStyle}
//         placeholder="Enter your Fname"
//         editable={true}
//       />
//       <Text style={{paddingLeft: 10}}>{'LASTNAME:'}</Text>
//       <TextInput
//         style={styles.inputTextStyle}
//         placeholder="Enter your Lname"
//         editable={true}
//       />
//       <Text style={{paddingLeft: 10}}>{'MOBILE NUMBER:'}</Text>
//       <TextInput
//         style={styles.inputTextStyle}
//         placeholder="Enter your Mobile nymber"
//         editable={true}
//       />
//       <Text style={{paddingLeft: 10}}>{'ALTERNATE NUMBER:'}</Text>
//       <TextInput
//         style={styles.inputTextStyle}
//         placeholder="Enter your Alternate number"
//         editable={true}
//       />
//       <Text style={{paddingLeft: 10}}>{'EMAIL ID:'}</Text>
//       <TextInput
//         style={styles.inputTextStyle}
//         placeholder="Enter your EmailID"
//         editable={true}
//       />
//       <Text style={{paddingLeft: 10}}>{'PASSWORD:'}</Text>
//       <TextInput
//         style={styles.inputTextStyle}
//         placeholder="Password"
//         editable={true}
//         secureTextEntry={true}
//       />
//       <Text style={styles.text1Style}>Forgot Password?</Text>
//       <View style={{padding: 20}}></View>
//     </View>
//   );
// };

// export default SignInPage;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: 'yellow',
//   },
//   inputTextStyle: {
//     borderWidth: 1,
//     margin: 10,
//     borderRadius: 6,
//     padding: 10,
//     height: 60,
//   },
//   text1Style: {
//     color: 'black',
//     marginLeft: 240,
//   },
// });
import React from "react";
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestCameraPermission} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;