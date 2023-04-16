import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Button, Alert } from "react-native";
import axios from "../../plugins/axios";
const Profile = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      // Retrieve user data from server
      axios.get('accounts/users/me/')
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }, []);
  
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userData?.email}</Text>
  
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{userData?.username}</Text>
  
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.value}>{userData?.first_name}</Text>
  
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.value}>{userData?.last_name}</Text>
  
          <Text style={styles.label}>Birthdate:</Text>
          <Text style={styles.value}>{userData?.birthdate}</Text>
  
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{userData?.gender}</Text>
        </View>
      </>
    )
  }
  
  export default Profile;
  
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    value: {
      fontSize: 16,
      marginBottom: 15,
    },
  });