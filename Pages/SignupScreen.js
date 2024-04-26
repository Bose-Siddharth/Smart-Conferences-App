import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import useHttp from "../hooks/useHttp";
import { useLogin } from "../context/LoginProvider";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [edasId, setEdasId] = useState("");
  const { postRequest, loading, error } = useHttp();
  const { setIsLoggedIn } = useLogin();

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleMobileNumberChange = (text) => {
    setMobileNumber(text);
  };

  const handleEdasIdChange = (text) => {
    setEdasId(text);
  };

  const handleSubmit = async () => {
    // Handle form submission, e.g., send data to server
    const response = await postRequest("/auth/signup", {
      name,
      email,
      password,
      mobileNumber,
      edasId,
    });
    console.log("RESPONSE", response);
    if (response.success) {
      await AsyncStorage.setItem("token", response.token);
      setIsLoggedIn(true);
    } else if (!response.success) {
      setErrorMessage(response.message);
    } else {
      setErrorMessage(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleEmailChange}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handlePasswordChange}
        value={password}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleMobileNumberChange}
        value={mobileNumber}
        placeholder="Enter your mobile number"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Edas ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleEdasIdChange}
        value={edasId}
        placeholder="Enter your Edas ID"
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default RegistrationForm;
