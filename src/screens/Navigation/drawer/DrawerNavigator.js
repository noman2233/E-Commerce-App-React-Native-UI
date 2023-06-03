import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Person from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Policy from 'react-native-vector-icons/MaterialIcons';
import Home from '../../home/Home';
import Category from '../../category/Category';
import {COLORS} from '../../../../constants';
import Collection from '../../collection/Collection';
import SignUp from '../../Authentication/SignUp';
import Main from './Main';
import Logout from '../../Authentication/Logout';
import DeveloperInfo from '../../DeveloperInfo/DeveloperInfo';
import Support from '../../support/Support';
import TermsOfUse from '../../termsOfUse/TermsOfUse';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.light,

          width: 270,
        },
        contentOptions: {
          style: {
            backgroundColor: COLORS.grey20,
          },
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerStatusBarHeight: 0.01,
        drawerInactiveTintColor: COLORS.dark,
        drawerActiveTintColor: COLORS.dark,
        drawerActiveBackgroundColor: COLORS.grey20,
        drawerContentContainerStyl: COLORS.grey08,
        drawerType: 'back',
      }}>
      <Drawer.Screen
        name="Menu"
        component={Main}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: true,

          drawerIcon: ({focused}) => (
            <FontAwesome5Icon
              name="home"
              size={focused ? 25 : 20}
              color={focused ? COLORS.dark : COLORS.dark60}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Category"
        component={Category}
        options={{
          title: 'Category',
          headerShown: true,

          drawerIcon: ({focused}) => (
            <FontAwesome5Icon
              name="cube"
              size={focused ? 25 : 20}
              color={focused ? COLORS.dark : COLORS.dark60}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Collection"
        component={Collection}
        options={{
          title: 'Collection',

          drawerIcon: ({focused}) => (
            <FontAwesome5Icon
              name="globe-asia"
              size={focused ? 25 : 20}
              color={focused ? COLORS.dark : COLORS.dark60}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="DeveloperInfo"
        component={DeveloperInfo}
        options={{
          title: 'Developer',

          drawerIcon: ({focused}) => (
            <FontAwesome5Icon
              name="info-circle"
              size={focused ? 25 : 20}
              color={focused ? COLORS.dark : COLORS.dark60}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{
          title: 'Support',

          drawerIcon: ({focused}) => (
            <FontAwesome5Icon
              name="question"
              size={focused ? 25 : 20}
              color={focused ? COLORS.dark : COLORS.dark60}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="TermsOfUse"
        component={TermsOfUse}
        options={{
          title: 'Policy',

          drawerIcon: ({focused}) => (
            <Policy
              name="policy"
              size={focused ? 25 : 20}
              color={focused ? COLORS.dark : COLORS.dark60}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="signup"
        component={SignUp}
        options={{
          title: 'Account',

          drawerIcon: ({focused}) => (
            <Person
              name="person-add"
              size={focused ? 25 : 20}
              color={focused ? COLORS.dark : COLORS.dark60}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: 'Logout',

          drawerIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="logout"
              size={focused ? 25 : 20}
              color={focused ? COLORS.dark : COLORS.dark60}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
