import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {View} from 'react-native';
import {BottomTabs} from './components/BottomTabs';
import MarketTrends from './components/marketTrends';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MarketTrends"
          component={MarketTrends}
          options={{headerShown: false, orientation: 'portrait'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
