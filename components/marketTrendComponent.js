/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  Text,
  FlatList,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
import {marketTrendData} from './data';
const {height, width} = Dimensions.get('window');

export default function MarketTrendComponent(props) {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.marketTrendView}>
        <item.Logo
          style={[styles.cardLogo, {position: 'absolute'}]}
          height={height * 0.06}
          width={width * 0.13}
        />
        <View style={{marginLeft: width * 0.167, flexDirection: 'row'}}>
          <Text
            style={[
              styles.cardName,
              {
                color: "black",
                marginLeft: width * 0.02,
                marginTop: height * 0.03,
                fontSize:height * 0.025,
              },
            ]}>
            {item.name}
          </Text>
          <Text
            style={[
              styles.cardValue,
              {
                fontSize:height * 0.026,
                marginTop: height * 0.03,
                position: 'absolute',
                left: width * 0.47,
              },
            ]}>
            {item.value}
          </Text>
        </View>
        <View style={{marginLeft: width * 0.142, flexDirection: 'row'}}>
          <Text style={[styles.shortCode, {marginTop: 0}]}>
            {item.shortCode}
          </Text>
          <Text style={styles.marketTrendPercentageText}>
            <Icon
            size={height * 0.025}
            color={item.percentage.startsWith('-') ? '#f36d43' : '#59be7b'}
              name={
                item.percentage.startsWith('-') ? 'chevron-down' : 'chevron-up'
              }
            />{" "}
            {item.percentage}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={
          props.length
            ? marketTrendData.slice(0, props.length)
            : marketTrendData
        }
        renderItem={renderItem}
      />
    </View>
  );
}
