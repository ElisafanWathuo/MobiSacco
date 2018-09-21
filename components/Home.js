import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import TouchableButton from './touchableButton';
// import PieChart from './PieChart';
// import AccountDetails from './accountDetails';

export default class Home extends React.Component {
    onComponentMap = () => {
        console.log('Account Details '+this.props.accountDetails);
        this.props.accountDetails.map (
            data => {
                return (
                    <View style={styles.accountDetBar}>
                        <Text style={{color:'#FFFFFF', fontSize: 25, fontWeight: 'bold', fontFamily: 'Roboto'}}>
                            Account Number: {data.accNo}
                        </Text>
                    </View>
                );
            }
        );
    }
    render () {
        return (
            <View>
                <StatusBar
                    backgroundColor="#9370DB"
                    barStyle="light-content"
                />
                <View style={
                                {
                                    flex: 1, 
                                    justifyContent: 'space-evenly', 
                                    flexDirection: 'row', 
                                    // alignItems:'center', 
                                    marginTop: 10
                                }
                            }
                >
                    <TouchableOpacity style={styles.topBarButton} >
                        <Image source={require('../icons/withdraw.png/')} backgroundColor='#FFFFFF' borderRadius={5} />
                        <Text style={{color:'#FFFFFF', fontSize: 15, fontWeight: 'bold'}}>Withdraw</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topBarButton} >
                        <Image source={require('../icons/save.png/')} backgroundColor='#FFFFFF' borderRadius={5} />
                        <Text style={{color:'#FFFFFF', fontSize: 15, fontWeight: 'bold'}}>Deposit</Text>
                    </TouchableOpacity>
                </View>
                {this.onComponentMap()}
                {/* <AccountDetails accountDetails={this.props.AccountDetails} style={{marginTop: 30}}/> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    touchableBar: {
        flex: 1, 
        justifyContent: 'space-evenly', 
        flexDirection: 'row', 
        alignItems:'center', 
        marginTop: 30,
    },
    topBarButton: {
        width: 170, 
        height: 100, 
        backgroundColor: '#8A2BE2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
  });