import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

function SignUp() {
  return (
    <View>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput style={styles.textinput} placeholder="First Name" />
      <TextInput style={styles.textinput} placeholder="Last Name" />
      <TextInput style={styles.textinput} placeholder="Email" />
      <TextInput style={styles.textinput} placeholder="Mobile Number" />
      <TextInput style={styles.textinput} placeholder="Date of Birth" />
      <TextInput style={styles.textinput} placeholder="Address" />
      <TextInput style={styles.textinput} placeholder="Zip Code" />
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textbutton}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textTransform: "uppercase",
    color: "#fff",
    marginBottom: 40,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#199187"
  },
  textinput: {
    hight: 40,
    marginBottom: 30,
    paddingBottom: 5,
    color: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#fsfsfs",
    alignSelf: "stretch"
  },
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#59cbbd",
    marginTop: 10
  },
  textbutton: {
    color: "fff",
    fontWeight: "bold"
  }
});
export default SignUp;
