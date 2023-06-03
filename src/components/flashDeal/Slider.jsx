import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {COLORS, width} from '../../../constants/theme';
import {slider} from '../../../constants/quickLinks';
const Slider = () => {
  return (
    <View style={styles.slider_container}>
      <Swiper
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={5}
        autoplayDirection={true}
        dotColor={COLORS.grey60}
        activeDotColor={COLORS.primary80}>
        {slider.map(item => {
          return (
            <View style={styles.slider_wrapper} key={item.id}>
              <Image source={item.image} style={styles.banner_image} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  slider_container: {
    width: width,
    height: 130,
    marginVertical: 10,
  },
  slider_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner_image: {
    width: width - 20,
    height: 130,
    alignItems: 'center',
    resizeMode: 'cover',
  },
});
