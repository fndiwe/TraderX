import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
const {height, width} = Dimensions.get('window');

export default function Profile({navigation}) {

  return (
    <View style={styles.container}>
    <StatusBar barStyle="dark-content" />

    </View>
  );
}
