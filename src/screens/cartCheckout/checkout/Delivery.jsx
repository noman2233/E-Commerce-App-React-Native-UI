import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import picture from '../../../../assets/images/dummy/camera_03.png';
import {color} from 'react-native-reanimated';
import {COLORS, FONTS} from '../../../../constants';
import {SIZES, width} from '../../../../constants/theme';
import {TextButton} from '../../../../components';
const Delivery = () => {
  return (
    <View style={styles.delivery_container}>
      <View style={styles.delivery_wrapper}>
        <Image source={picture} style={styles.picture_image} />
        <View style={styles.order_box}>
          <Text style={{color: COLORS.dark, ...FONTS.h4}}>
            Nikon A21 Camera
          </Text>
          <Text style={{color: COLORS.primary, ...FONTS.h3}}>$230.00</Text>
        </View>
        <Text style={{color: COLORS.support5, ...FONTS.h5}}>Order placed</Text>
      </View>

    
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  delivery_container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delivery_wrapper: {
    width: width / 1.1 + 10,
    backgroundColor: COLORS.light,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 8,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: SIZES.radius,
    marginVertical: 6,
  },
  picture_image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
});
