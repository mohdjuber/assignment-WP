import React from "react";
import { StyleSheet, View } from "react-native";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
function App() {
  return (
    <View style={styles.container}>
      <SignUp />
      <SignIn />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "Center",
    backgroundColor: "#36485f",
    paddingLeft: 40,
    paddingRight: 40
  }
});

export default App;
