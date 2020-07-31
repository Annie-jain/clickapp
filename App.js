import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

class Homescreen extends React.Component {
  static navigationOptions = {
      title: "Welcome"
  }
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.textproperties}>Helloo!</Text>
          <Appbutton title={"Click Here"} onPress={() => this.props.navigation.navigate("Profile")} />
          <StatusBar style="auto" />
        </View>
    );
  }
}


class Profilescreen extends React.Component {
 static navigationOptions = {
    title: 'MyProfile',
 }
 
 constructor(props) {
   super(props);
 }

 render() {
    return(
        <View style = { styles.container }>
          <Text style = { styles.textproperties }> RA1911003010302 </Text>
        </View>
    );
 }
}

const App = createStackNavigator ({
    Home : {screen : Homescreen},
    Profile : {screen : Profilescreen},
    },   
    {
      initialRouteName: 'Home',
    }
);

export default createAppContainer(App);

const Appbutton = ( {onPress, title}) => (
    <TouchableOpacity 
        activeOpacity={0.8}
        onPress={onPress} 
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb6c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textproperties: {
    fontSize: 24,
    textAlign: 'center'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
