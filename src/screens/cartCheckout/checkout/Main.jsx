import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Delivery from './Delivery';
import Address from './Address';
import TopBar from './TopBar';
import {COLORS, FONTS} from '../../../../constants';
import Checkout from './Checkout';

const Main = () => {
  return (
    <View style={styles.checkout_main}>
      <TopBar />
      {/* <View>
        <Text style={{color: COLORS.dark, paddingLeft: 20, ...FONTS.h4}}>
          Your Orders
        </Text>
        <Delivery />
        <Delivery />
        <Delivery />
        <Delivery />
        <Delivery />
      </View> */}
      {/* <Address /> */}
      <Checkout />
    </View>
  );
  
};

export default Main;

const styles = StyleSheet.create({
  checkout_main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
