import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

import Post from "./src/components/Post";

class App extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#373142"
    },
    headerTitleStyle: {
      color: "#FFF"
    }
  };

  goToPost = () => {
    this.props.navigation.navigate("Post");
  };

  render() {
    return (
      <View>
        <Text>
          <Button onPress={this.goToPost} title="Go to post page" />
        </Text>
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
    screen: App
  }
});
