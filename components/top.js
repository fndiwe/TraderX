/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Dimensions, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {styles} from './styles';
const {height, width} = Dimensions.get('window');

export default function Top(props) {
  return (
    <View
      style={styles.topView}>
      <Image style={styles.topImage} source={props.image} />
      <Text style={styles.topText}>{props.username}</Text>
      <TouchableOpacity style={styles.bellButton}>
      <Octicons color="#e0943e" name='dot-fill' style={styles.badge} />
        <Icon size={width * 0.05} color="white" name="bell" />
      </TouchableOpacity>
    </View>
  );
}
