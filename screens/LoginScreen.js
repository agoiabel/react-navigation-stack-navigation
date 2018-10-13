import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  }

  pressMe = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LoginScreen!</Text>

        <Button title="PressMe" onPress={this.pressMe} />
      </View>
    );
  }
  
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
