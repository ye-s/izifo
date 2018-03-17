/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Svg
} from 'react-native';
import Login from './js/login'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

    state = { currentPage: 0 };

    onChangeScreen = (pageIndex) => {
    console.log(pageIndex)
        this.setState({ currentPage: pageIndex });
    }

    takePhoto = () => {

    }

    approveIngridient = (result) => {
        if (result) {
            // TODO positive
        } else {
            // TODO negative
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.currentPage > 1 ?
                        <Header style={styles.menu}>
                            <Body style={styles.menu}>
                                <Button title="Camera"/>
                                <Button title="Type"/>
                            </Body>
                        </Header>
                        : null
                }
                <Text style={styles.welcome}>
                    Welcome to Izifo!
                </Text>
                {//<Image source={require('./resources/images/logo.png')}/>
                }
                <Text style={styles.instructions}>
                  To get started add allergens or known components that you don't want to have in your purchase
                </Text>

                <Button title="Add component" onPress={this.onChangeScreen.bind(this, '1') } />

                <Text>Or simply scan product to check it for components</Text>

                <Button title="Scan an item" onPress={this.onChangeScreen.bind(this, '2') } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  menu: {
    flex: 1,
    backgroundColor: '#1569C7',
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  notMainPage: {
    flex: 10
  },
  cameraWrapper: {
    flex: 5
  },
  buttonBlock: {
    flex: 4
  }
});

AppRegistry.registerComponent('fbsdk', () => fbsdk);

