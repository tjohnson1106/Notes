import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

import Post from "./src/components/Post";
import navigationStyles from "./src/styles/navigationStyles";

class App extends Component {
  static navigationOptions = {
    title: "Home",
    ...navigationStyles
  };

  goToPost = () => {
    this.props.navigation.navigate("Post");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Bracket Factory Notes App</Text>
        <Button
          onPress={this.goToPost}
          title="Go to post page"
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default StackNavigator({
  Home: {
    screen: App
  },
  Post: {
    screen: Post
  }
});
