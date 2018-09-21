import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class AccountDetails extends React.Component {
    onComponentMap = () => {
        console.log(typeof this.props.accountDetails);
        console.log("At Account Details "+ this.props.accountDetails);
        // this.props.accountDetails.map (
        //     data => {
        //         return (
        //             <View style={styles.accountDetBar}>
        //                 <Text style={{color:'#FFFFFF', fontSize: 25, fontWeight: 'bold', fontFamily: 'Roboto'}}>
        //                     Account Number: {data.accNo}
        //                 </Text>
        //             </View>
        //         );
        //     }
        // );
    }
    render () {
        return (
            <View>
                {this.onComponentMap()}
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
    accountDetBar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9370DB',
        borderRadius: 20,
        width: 250,
    }
  });