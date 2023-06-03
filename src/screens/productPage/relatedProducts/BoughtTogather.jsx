import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {bought_togather} from '../../../../constants/quickLinks';
import {COLORS, FONTS, SIZES, width} from '../../../../constants/theme';

const BoughtTogather = () => {
  return (
    
    <View style={styles.BoughtTogather}>
      <View style={styles.container}>
        {bought_togather.map(item => (
          <View key={item.index} style={styles.image_conationer}>
            <Image source={item.image} style={styles.product} />
            <Text style={{color: COLORS.primary, ...FONTS.h4}}>$ 230</Text>
          </View>
        ))}
      </View>
      <Text style={{color: COLORS.grey, paddingVertical: 10, ...FONTS.h5}}>
        Bought togather with 40$ discount
      </Text>
    </View>
  );
};

export default BoughtTogather;

const styles = StyleSheet.create({
  BoughtTogather: {
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: width / 1.1 + 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_conationer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
