import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BAG from 'react-native-vector-icons/MaterialCommunityIcons';
import Dot from 'react-native-vector-icons/Entypo';
import {COLORS, FONTS} from '../../../constants';
import {SIZES, width} from '../../../constants/theme';

const Card = () => {
  return (
    <View style={styles.Notification_card}>
      <BAG name="shopping" color={COLORS.primary} size={20} />
      <View style={styles.Notification_card_contant}>
        <Text style={{color: COLORS.dark, ...FONTS.h3}}>Order Arrived</Text>
        <Text style={{color: COLORS.dark80, paddingVertical: 10, ...FONTS.h5}}>
          Order 24089794727000824 has been completed & arrived at the
          destination address (Please rates your order)
        </Text>
        <Text style={{color: COLORS.grey, ...FONTS.body5}}>
          July 20, 2020 (08:00 pm)
        </Text>
      </View>
      <Dot name="dot-single" color={COLORS.primary} size={25} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Notification_card: {
    width: width / 1.12 + 10,
    backgroundColor: COLORS.light80,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginVertical: 7,
    borderRadius: SIZES.radius,
    shadowColor: 'grey',

    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 10,
  },
  Notification_card_contant: {
    paddingLeft: 10,
  },
  notification_bag: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    color: COLORS.primary,
  },
});
