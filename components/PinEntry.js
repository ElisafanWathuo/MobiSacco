import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Axios from 'axios';

export default class PinEntry extends React.Component {
    state = {
        pin: '',
        AccountDetails: [],
    }

    componentDidMount () {
        Axios.get('http://192.168.100.7:8080/account/254722848650')
            .then(
                (response) => {
                    console.log('We have a New Winner' + response.data);
                    console.log('We have a Winner' + JSON.stringify(response.data));
                    console.log(typeof response.data);
                    this.setState(()=>{
                        return {
                            AccountDetails: response.data
                        }
                     })
                }
            ).catch( (error) => {
                // console.log(error);
            } );
    }

    // onPinEntry = (pin) => {
    //     this.setState({pin: pin});
    // }

    // onValidatePin = () => {
    //     // Axios.get('http://192.168.100.7:8080/validatePin?accNo=' + this.state.AccountDetails['accNo'] + '&cellPhone=254722848650&pin=' + this.state.pin)
    //     //     .then(
    //     //         (response) => {
    //     //             if (response.data) {
    //     //                 Actions.home();
    //     //             }else {
    //     //                 Actions.pinInvalid();
    //     //                 // console.warn(response.data);
    //     //             }
    //     //         }
    //     //     ).catch( (error) => {
    //     //         // console.log(error);
    //     //     } );
    // }

    render () {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#9370DB"
                    barStyle="light-content"
                />
                <TextInput 
                    maxLength = {4}
                    keyboardType="numeric"
                    onChangeText={ (text) => { this.setState({pin: text}); } }
                    placeholder="PIN"
                    textContentType="password"
                    secureTextEntry={true}
                    style={styles.pinInput}
                />
                <TouchableOpacity
                    onPress={ () => {
                        // let accountDets = this.state.AccountDetails;
                        this.state.AccountDetails.map(
                            account => {
                                console.log("Account NUmber =" + account.accNo);
                                console.log('http://192.168.100.7:8080/validatePin?accNo=' + account.accNo + '&cellPhone=254722848650&pin=' + this.state.pin);
                                Axios.get('http://192.168.100.7:8080/validatePin?accNo=' + account.accNo + '&cellPhone=254722848650&pin=' + this.state.pin)
                                    .then(
                                        (response) => {
                                            if (response.data) {
                                                Actions.home({accountDetails: this.state.AccountDetails});
                                            }else {
                                                Actions.pinInvalid();
                                                // console.warn(response.data);
                                            }
                                        }
                                    ).catch( (error) => {
                                        // console.log(error);
                                    } );
                            }
                        );
                        console.log('At Validate Pin ' + this.state.AccountDetails);
                    } }
                    style={styles.button}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 'bold'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
      fontSize: 20,
      textAlign: 'center',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      width: 150,
      height: 25,
      borderRadius: 15,
      backgroundColor: '#9370DB',
      color: '#FFFFFF',
      alignItems: 'center',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    pinInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
        width: 250,
        textAlign: 'center',
    }
  });