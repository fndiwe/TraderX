/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
import MarketTrendComponent from './marketTrendComponent';
const {height, width} = Dimensions.get('window');

export default function MarketTrends({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
         activeOpacity={0.9}
          onPress={() => navigation.navigate('Root')}
          style={[styles.iconWrapper, {backgroundColor: 'white'}]}>
          <Icon
            style={{padding: 5}}
            size={height * 0.03}
            color="black"
            name="arrow-back"
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.portfolio,
            {marginTop: height * 0.005, marginLeft: width * 0.19},
          ]}>
          Market Trends
        </Text>
        <View style={[styles.iconWrapper, {backgroundColor: 'white', marginLeft: width * 0.2}]}>
          <FeatherIcon
            style={{padding: 5}}
            size={height * 0.03}
            color="#e28d2e"
            name="search"
          />
        </View>
      </View>
      <View style={styles.dropDown}>
          <Text style={[styles.portfolio, {padding: width * 0.03, marginLeft: width * 0.01, marginTop: 0}]}>All</Text>
          <Icon style={{marginLeft: width * 0.6, padding: width * 0.03}} size={height * 0.035} color="black" name="chevron-down" />
      </View>
      <MarketTrendComponent />
    </View>
  );
}
