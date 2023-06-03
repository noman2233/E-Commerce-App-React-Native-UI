import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/Ionicons';
import Home from '../../home/Home';
import Category from '../../category/Category';
import Login from '../../Authentication/Login';
import Cart from '../../cart/Cart';
import {COLORS} from '../../../../constants';
import FlashDeal from '../../flashDeal/FlashDeal';
import {StyleSheet} from 'react-native';
const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        activeTintColor: '#000000',
        inactiveTintColor: 'black',
        headerShown: false,
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        tabBarShowLabel: false,
        labelStyle: {fontSize: 14},
        showIcon: true,
        tabBarStyle: {
          //   position: 'absolute',
          //   bottom:5,
          //   right: 7,
          //   left: 7,
          height: 60,
          //   borderRadius: 10,
          backgroundColor: COLORS.light80,
          ...styles.shadow,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'FlashDeal') {
            iconName = 'gift';
            size = focused ? 25 : 23;
            color = focused ? COLORS.primary : COLORS.dark60;
          } else if (route.name === 'Cart') {
            iconName = 'cart';
            size = focused ? 25 : 23;
            color = focused ? COLORS.primary : COLORS.dark60;
          } else if (route.name === 'Category') {
            iconName = 'cube';
            size = focused ? 25 : 23;
            color = focused ? COLORS.primary : COLORS.dark60;
          } else if (route.name === 'Login') {
            iconName = 'ios-person-add-sharp';
            size = focused ? 25 : 23;
            color = focused ? COLORS.primary : COLORS.dark60;
          } else if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 30 : 30;
            color = focused ? COLORS.primary : COLORS.dark80;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      activeColor="black"
      inactiveColor="white"
      barStyle={{backgroundColor: 'white'}}>
      <Bottom.Screen
        name="Category"
        component={Category}
        screenOptions={{
          headerShown: true,
        }}
      />
      <Bottom.Screen
        name="FlashDeal"
        component={FlashDeal}
        screenOptions={{
          headerShown: () => true,
        }}
      />
      <Bottom.Screen
        name="Home"
        component={Home}
        screenOptions={{
          headerShown: () => false,
        }}
      />
      <Bottom.Screen
        name="Cart"
        component={Cart}
        screenOptions={{
          headerShown: () => false,
        }}
      />
      {/* <Bottom.Screen
        name="Login"
        component={MainCheckoutFile}
        screenOptions={{
          headerShown: () => false,
        }}
      /> */}
      <Bottom.Screen
        name="Login"
        component={Login}
        screenOptions={{
          headerShown: () => false,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.grey08,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
