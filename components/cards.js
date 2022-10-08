/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  Text,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {cardData} from './data';
const {height, width} = Dimensions.get('window');

export default function Cards() {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.card}>
        <Image style={styles.cardBackgroundImage}
          blurRadius={0.9}
          source={item.backgroundImage} />
          <item.Logo
            style={styles.cardLogo}
            height={height * 0.07}
            width={width * 0.13}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cardName}>{item.name}</Text>
            <View
              style={[
                styles.cardPercentage,
                {
                  backgroundColor: item.percentage.startsWith('-')
                    ? '#f36d43'
                    : '#59be7b',
                },
              ]}>
              <Text style={styles.cardPercentageText}>{item.percentage}</Text>
            </View>
          </View>
          <Text style={styles.cardValue}>{item.value}</Text>
          <Text style={styles.shortCode}>{item.shortCode}</Text>
      </View>
    );
  };
  return (
    <View>
    <FlatList
      data={cardData}
      horizontal
      renderItem={renderItem}
    />
    </View>
  );
}
