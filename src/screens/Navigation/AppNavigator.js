import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './normal/Splash';
import Parent from './normal/Parent';
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';
import NumberVerification from '../Authentication/NumberVerification';
import OTP from '../Authentication/OTP';
import ChooseCategory2 from '../category/ChooseCategory2';
import MainCategory from '../../components/category/MainCategory';
import ProductPage from '../productPage/ProductPage';
import ProductDescription from '../productPage/ProductDescription';
import Review from '../productPage/Review/Review';
import Services from '../services/Services';
import Welcome from '../welcomeScreens/Welcome';
import Walkthrough from '../welcomeScreens/Walkthrough';
import Home from '../home/Home';
import DeveloperInfo from '../DeveloperInfo/DeveloperInfo';
import Notification from '../notification/Notification';
import RelatedProducts from '../productPage/relatedProducts/RelatedProducts';
import Main from '../storeInfo/storeScreen/Main';
import Cart from '../cart/Cart';
import ContactUs from '../support/ContactUs';
import MainUserProfile from '../userProfile/MainUserProfile';
import MainCheckoutFile from '../cartCheckout/checkout/MainCheckoutFile';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Number Verification"
          component={NumberVerification}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="MainCategory"
          component={MainCategory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChooseCategory2"
          component={ChooseCategory2}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ProductPage"
          component={ProductPage}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ProductDescription"
          component={ProductDescription}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="RelatedProducts"
          component={RelatedProducts}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Reviews"
          component={Review}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Walkthrough"
          component={Walkthrough}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Developer Info"
          component={DeveloperInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart "
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Contact"
          component={ContactUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfile"
          component={MainUserProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={MainCheckoutFile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
