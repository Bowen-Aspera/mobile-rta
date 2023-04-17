import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import axios from "../../plugins/axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // npm install @react-native-async-storage/async-storage // dili mag run saimuhang end

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null); // added error state
  const [token, setToken] = useState(null); // added token state

  useEffect(() => {
    // Retrieve user data from server
    const fetchUserData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        setToken(storedToken);
        const response = await fetch("http://127.0.0.1:8000/api/v1/accounts/users/", {
          headers: {
            Authorization: `Token ${storedToken}`,
          },
        });
        if (response.status === 401) {
          // Handle 401 unauthorized error
          setError("Unauthorized. Please login again.");
        } else {
          const userData = await response.json();
          setUserData(userData);
        }
      } catch (error) {
        // Handle other errors
        setError("Failed to retrieve user data.");
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    // Display error message if error state is set
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
        <Button
          title="Go to Login"
          onPress={() => {
            // Navigate to login screen on error
            setError(null); // Reset error state
            // You can replace this with your actual login navigation logic
            // e.g. navigation.navigate('Login');
          }}
        />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        {/* Render user data */}
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userData?.email}</Text>
      </View>
    </>
  );
};

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
