import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Banner_image from '../../../../assets/images/slider/nike.png';
import {width} from '../../../../constants/theme';
const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image source={Banner_image} style={styles.banner_image} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  banner_image: {
    width: width / 1.1 + 10,
    height: 120,
    resizeMode: 'cover',
  },
});
