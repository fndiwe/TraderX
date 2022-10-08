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
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Top from './top';
import Btc from '../assets/images/btc.svg';
import {AreaChart} from './AreaChart';
import {Hr24Data} from './data';
import CandleChart from './CandleChart';
const {height, width} = Dimensions.get('window');

export default function Wallet({navigation}) {
  const [showAreaChart, setShowAreaChart] = useState(true);
  const percentage = '+17%';
  const percentage1 = '3.6%';
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Top
        image={require('../assets/images/elon_musk.jpg')}
        username="Elon Musk"
      />
      <View style={[styles.card, {width: width * 0.91}]}>
        <Image
          style={styles.backgroundImage}
          blurRadius={0.9}
          source={require('../assets/images/bitcoin-bg.png')}
        />
        <View style={{flexDirection: 'row'}}>
          <Btc
            style={styles.cardLogo}
            height={height * 0.06}
            width={width * 0.13}
          />
          <Text
            style={[
              styles.shortCode,
              {
                marginLeft: width * 0.035,
                fontSize: height * 0.025,
                marginTop: height * 0.045,
              },
            ]}>
            Bitcoin
          </Text>
          <Text
            style={[
              styles.USD,
              {marginTop: height * 0.03, marginLeft: width * 0.35},
            ]}>
            BTC <Icon size={height * 0.03} name="chevron-down" />
          </Text>
        </View>
        <Text style={styles.cardValue}>3.521079</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.shortCode}>$19.283 USD</Text>
          <View
            style={[
              styles.cardPercentage,
              {
                marginTop: height * 0.01,
                marginLeft: width * 0.38,
                backgroundColor: percentage.startsWith('-')
                  ? '#f36d43'
                  : '#59be7b',
              },
            ]}>
            <Text style={styles.cardPercentageText}>
              {' '}
              <Icon
                size={height * 0.025}
                color="white"
                name={
                  percentage.startsWith('-') ? 'chevron-down' : 'chevron-up'
                }
              />{' '}
              {percentage}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.iconWrapper,
            {marginTop: height * 0.005, backgroundColor: '#fdf6e1'},
          ]}>
          <Icon
            color="#f36d43"
            style={{padding: 5}}
            size={height * 0.03}
            name="chevron-down"
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.card, {height: height * 0.37, width: width * 0.91}]}>
        <Text style={[styles.shortCode, {fontFamily: 'opensans-medium'}]}>
          Bitcoin (BTC)
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.cardValue,
              {marginTop: height * 0.01, fontSize: height * 0.026},
            ]}>
            $43,362.18
          </Text>
          <View
            style={[
              styles.cardPercentage,
              {
                marginTop: height * 0.01,
                marginLeft: width * 0.1,
                backgroundColor: percentage1.startsWith('-')
                  ? '#f36d43'
                  : '#59be7b',
              },
            ]}>
            <Text style={styles.cardPercentageText}>
              {' '}
              <Icon
                size={height * 0.025}
                color="white"
                name={
                  percentage1.startsWith('-') ? 'chevron-down' : 'chevron-up'
                }
              />{' '}
              {percentage1}
            </Text>
          </View>
        </View>
        {!showAreaChart ? (
          <View
            style={{
              top: height * 0.03,
              position: 'absolute',
              alignSelf: 'center',
            }}>
            <CandleChart />
          </View>
        ) : (
          <AreaChart data={Hr24Data} />
        )}
        <View
          style={{
            flexDirection: 'row',
            marginTop: height * 0.24,
            justifyContent: 'space-around',
          }}>
          <View
            style={[
              styles.iconWrapper,
              {
                width: width * 0.15,
                justifyContent: 'center',
                height: height * 0.04,
                backgroundColor: '#f0f0f0',
              },
            ]}>
            <Text style={[styles.periodText, {color: 'black'}]}>24H</Text>
          </View>
          <Text style={styles.periodText}>1W</Text>
          <Text style={styles.periodText}>1Y</Text>
          <Text style={styles.periodText}>5Y</Text>
          <Text style={styles.periodText}>All</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: height * 0.02,
          marginLeft: width * 0.06,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => setShowAreaChart(!showAreaChart)} activeOpacity={0.9} style={styles.button}>
          <Text style={styles.buy}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.button,
            {marginLeft: width * 0.125, backgroundColor: '#23262e'},
          ]}>
          <Text style={styles.buy}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
