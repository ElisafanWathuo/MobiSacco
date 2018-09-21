import React from 'react';
import { View, StyleSheet, Text, Image, StatusBar } from 'react-native';

export default class PinInvalid extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#9370DB"
                    barStyle="light-content"
                />
                <Image
                    source={require('../icons/access-denied.png')}
                    backgroundColor='#FFFFFF'
                />
                <Text>You Have Entered a Wrong Pin</Text>
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
    }
  });