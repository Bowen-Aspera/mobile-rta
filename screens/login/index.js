import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Alert } from "react-native";
import axios from "../../plugins/axios";
import InputField from "../../components/InputField";
import AsyncStorage from "@react-native-async-storage/async-storage"; // npm install @react-native-async-storage/async-storage // dili mag run saimuhang end

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleRegistration = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    axios
      .post("accounts/token/login/", data)
      .then(async (response) => {
        await AsyncStorage.setItem('token', response.data.auth_token);
        console.log(response);
        Alert.alert("Login successful!");
        navigation.navigate('Profile'); // navigate to profile on success
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          Alert.alert("Login failed.");
        } else {
          console.log(error);
          Alert.alert("An error occurred.");
        }
      });
  };

  return (
    <View style={styles.container}>
      <InputField
        label="Email"
        placeholder="Your Email"
        value={data.email}
        onChangeText={(email) => setData({ ...data, email })}
      />
      <InputField
        label="Password"
        placeholder="Your Password"
        value={data.password}
        onChangeText={(password) => setData({ ...data, password })}
        secureTextEntry
      />
      <Button title="Submit" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
