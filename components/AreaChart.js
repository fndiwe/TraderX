/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
const {width, height} = Dimensions.get("window")
export const AreaChart = (props) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: height * 0.1,
        width: width * 0.85,
        backgroundColor: 'transparent',
      }}>
      <LineChart
        thickness={3}
        color="#f2911a"
        maxValue={30000}
        noOfSections={3}
        areaChart
        yAxisTextStyle={{color: 'lightgray'}}
        data={props.data}
        curved
        height={height * 0.35}
        width={width * 0.85}
        isAnimated
        startFillColor={'#f2911a'}
        endFillColor={'#fdf1e1'}
        startOpacity={0.4}
        endOpacity={0.4}
        spacing={width * 0.075}
        backgroundColor="transparent"
        hideRules
        hideAxesAndRules
        hideOrigin
        initialSpacing={10}
        dataPointsHeight={20}
        dataPointsWidth={20}
      />
    </View>
  );
};
