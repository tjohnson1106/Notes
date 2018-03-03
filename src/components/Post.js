import React, { Component } from "react";
import { View } from "react-native";

import navigationStyles from "../styles/navigationStyles";

class Post extends Component {
  static navigationOptions = {
    title: "Post",
    ...navigationStyles
  };
  render() {
    return (
      <View>
        <Text>New Page</Text>
      </View>
    );
  }
}

export default Post;
