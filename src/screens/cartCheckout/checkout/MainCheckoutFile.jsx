import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Delivery from './Delivery';
import Address from './Address';
import TopBar from './TopBar';
import {COLORS, FONTS} from '../../../../constants';
import Checkout from './Checkout';
import {height} from '../../../../constants/theme';
import OrderCompleted from './OrderCompleted';

const MainCheckoutFile = ({navigation}) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTabs = index => {
    setToggleState(index);
  };
  return (
    <View style={styles.checkout_main}>
      <TopBar toggleState={toggleState} toggleTabs={toggleTabs} />
      <View style={toggleState === 1 ? styles.active : styles.inActive}>
        <Address />
      </View>
      <ScrollView>
        <View style={toggleState === 2 ? styles.active : styles.inActive}>
          <Text style={{color: COLORS.dark, paddingLeft: 20, ...FONTS.h4}}>
            Your Orders
          </Text>
          <Delivery />
          <Delivery />
          <Delivery />
          <Delivery />
          <Delivery />
        </View>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={toggleState === 3 ? styles.active : styles.inActive}>
          <Checkout />
        </View>
      </ScrollView>
      <View style={toggleState === 4 ? styles.active : styles.inActive}>
        <OrderCompleted navigation={navigation} />
      </View>
    </View>
  );
};

export default MainCheckoutFile;

const styles = StyleSheet.create({
  checkout_main: {
    // height:height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inActive: {
    display: 'none',
  },
});
