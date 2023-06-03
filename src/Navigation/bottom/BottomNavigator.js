import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../../screens/home/Home';
const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        activeTintColor: '#000000',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        tabBarShowLabel: false,
        labelStyle: {fontSize: 14},
        showIcon: true,

        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 25 : 20;
            color = focused ? '#000000' : '#2b2929';
          } else if (route.name === 'SpecialOffers') {
            iconName = 'weight';
            size = focused ? 25 : 20;
            color = focused ? '#000000' : '#2b2929';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      activeColor="black"
      inactiveColor="white"
      barStyle={{backgroundColor: 'white'}}>
      <Bottom.Screen
        name="Home"
        component={Home}
        screenOptions={{
          headerShown: () => false,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
