/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cards from './cards';
import MarketTrendComponent from './marketTrendComponent';
import {styles} from './styles';
import Top from './top';
const {height, width} = Dimensions.get('window');

export default function Home({navigation}) {
  const PERCENTAGE = '+1.37%';
  const color = PERCENTAGE.startsWith('-') ? '#f36d43' : '#59be7b';
  const name = PERCENTAGE.startsWith('-') ? 'chevron-down' : 'chevron-up';
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Top
        image={require('../assets/images/elon_musk.jpg')}
        username="Elon Musk"
      />
      <Cards />
      <Text style={styles.portfolio}>Portfolio</Text>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 0.45,
        }}>
        <Text style={styles.totalWallet}>Total Wallet Balance</Text>
        <Text style={styles.USD}>
          USD <Icon size={height * 0.025} name="chevron-down" />
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 0.45,
        }}>
        <Text
          style={[
            styles.cardValue,
            {marginTop: height * 0.01, fontSize:height * 0.035},
          ]}>
          $6641.20
        </Text>
        <View
          style={[
            styles.cardPercentage,
            {backgroundColor: color, marginLeft: width * 0.34},
          ]}>
          <Text style={styles.cardPercentageText}>
            <Icon size={height * 0.025} name={name} /> {PERCENTAGE}
          </Text>
        </View>
      </View>
      <View style={styles.centerView}>
          <TouchableOpacity activeOpacity={0.9} style={styles.iconRow}>
            <View style={styles.iconWrapper}>
              <Ionicons style={{padding: 4}} size={height * 0.025} color="#ee962c" name="ios-analytics" />
            </View>
            <Text style={styles.analytics}>Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.iconRow}>
            <View style={styles.iconWrapper}>
              <Ionicons style={{padding: 4}} size={height * 0.025} color="#ee962c" name="arrow-up" />
            </View>
            <Text style={styles.analytics}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.iconRow}>
            <View style={styles.iconWrapper}>
              <Icon style={{padding: 4}} size={height * 0.025} color="#ee962c" name="arrow-right" />
            </View>
            <Text style={styles.analytics}>Deposit</Text>
          </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
       <Text style={styles.portfolio}>Market Trend</Text>
       <Text onPress={() => navigation.navigate('MarketTrends')} style={[styles.USD, {marginLeft: width * 0.4}]}>See all</Text>
      </View>
      <MarketTrendComponent length={2} />
    </View>
  );
}
