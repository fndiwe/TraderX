/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  portfolio:{
    color: 'black',
    fontFamily: 'opensans-semibold',
    marginTop: height * 0.02,
    marginLeft: width * 0.045,
    fontSize:height * 0.025,
  },
  totalWallet: {
    color: 'grey',
    fontFamily: 'opensans-regular',
    marginTop: height * 0.02,
    marginLeft: width * 0.045,
    fontSize:height * 0.023,
  },
  USD:{
    color: '#f36d43',
    fontFamily: 'opensans-semibold',
    marginTop: height * 0.02,
    marginLeft: width * 0.28,
    fontSize:height * 0.025,
  },
  centerView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: height * 0.02,
    borderRadius: width * 0.03,
    height: height * 0.09,
  },
  iconRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
  },
  iconWrapper: {
    backgroundColor: '#fcdca5',
    borderRadius: 100,
    alignSelf: 'center',
  },
  analytics: {
    color: 'black',
    fontFamily: 'opensans-regular',
    fontSize:height * 0.023,
  },
  topView: {
    flexDirection: 'row',
    marginLeft: width * 0.045,
    marginTop: height * 0.03,
  },
  topImage: {
    width: width * 0.1,
    height: height * 0.05,
    borderRadius: 100,
  },
  topText: {
    color: 'black',
    fontFamily: 'opensans-medium',
    marginTop: height * 0.008,
    marginLeft: width * 0.02,
    fontSize:height * 0.025,
  },
  bellButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: width * 0.46,
    width: width * 0.08,
    height: height * 0.045,

  },
  badge: {
    fontSize:height * 0.025,
    position:'absolute',
    top: 1,
    right: 6,
    zIndex:1,
  },
  card: {
    backgroundColor: 'white',
    height: height * 0.26,
    width: width * 0.5,
    marginLeft: width * 0.045,
    marginTop: height * 0.03,
    borderRadius: width * 0.05,
    marginRight: width * 0.02,
  },
  cardLogo: {
    marginTop: height * 0.03,
    marginLeft: width * 0.04,
  },
  cardName: {
    color: 'grey',
    fontFamily: 'opensans-semibold',
    fontSize:height * 0.023,
    marginTop: height * 0.02,
    marginLeft: width * 0.052,
  },
  cardPercentage: {
    borderRadius: 100,
    height: height * 0.03,
    marginTop: height * 0.018,
    marginLeft: width * 0.03,
    justifyContent: 'center',
    color: "grey",
  },
  cardPercentageText: {
    fontFamily: 'opensans-semibold',
    paddingRight: width * 0.015,
    paddingLeft: width * 0.015,
    color: 'white',
    fontSize:height * 0.02,
  },
  cardBackgroundImage: {
    position: 'absolute',
    top: height * 0.03,
    left: width * 0.1,
    width: width * 0.4,
    height: height * 0.25,
    opacity: 0.5,
  },
  cardValue: {
    fontFamily: 'opensans-bold',
    color: 'black',
    marginLeft: width * 0.05,
    marginTop: height * 0.02,
    fontSize:height * 0.035,
  },
  shortCode: {
    fontFamily: 'opensans-regular',
    color: 'grey',
    marginLeft: width * 0.05,
    marginTop: height * 0.015,
    fontSize:height * 0.02,
  },
  marketTrendView: {
    marginBottom: height * 0.005,
  },
  marketTrendPercentageText: {
    fontFamily: 'opensans-regular',
    color: 'grey',
    fontSize: height * 0.02,
    position: 'absolute',
    left: width * 0.64,
  },
  dropDown: {
    flexDirection: 'row',
    marginTop: height * 0.02,
    borderRadius: width * 0.05,
    backgroundColor: 'white',
    width: width * 0.9,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e28d2e',
  },
  backgroundImage: {
    position: 'absolute',
    top: height * 0.03,
    left: width * 0.5,
    transform: [{'rotateZ': '-38deg'}],
    width: width * 0.4,
    height: height * 0.25,
    opacity: 0.5,
  },
  button: {
    backgroundColor: "#f9911d",
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.38,
    height: height * 0.06,
    borderRadius: 100
  },
  buy: {
    fontFamily: "opensans-regular",
    color: "white",
    fontSize:height * 0.025,
  },
  periodText: {
        color: "grey",
        textAlign: 'center',
        fontSize:height * 0.02,
        marginLeft: 0,
        marginTop: 0,
        fontFamily: 'opensans-semibold',
  }
});
export {styles};
