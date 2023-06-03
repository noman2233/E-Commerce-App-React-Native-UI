import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants';

import Product from '../../../assets/images/collection/bags/cat2.png';
import {width} from '../../../constants/theme';
const Notifications = () => {
  return (
    <View style={styles.notification}>
      <View style={styles.wrapper}>
        <View style={styles.product_detail}>
          <Image source={Product} style={styles.image} />
          <View>
            <Text style={{color: COLORS.grey, ...FONTS.h5}}>
              Women bags collection
            </Text>
            <View style={styles.prices}>
              <Text style={{color: COLORS.dark, ...FONTS.h4}}>$80 </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                  ...FONTS.h5,
                }}>
                $100
              </Text>
            </View>
          </View>
        </View>
        <Text style={{color:COLORS.support5, ...FONTS.h3}}>-20%</Text>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  notification: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width / 1.1 + 10,
    backgroundColor: COLORS.light,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: SIZES.radius,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    marginRight: 30,
  },
  product_detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
