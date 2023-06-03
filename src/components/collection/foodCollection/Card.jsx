import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../../constants';
import {SIZES, width} from '../../../../constants/theme';

const Card = () => {
  return (
    <View style={styles.card_conrainer}>
      <Image
        source={{
          uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
        }}
        style={styles.card_image}
      />
      <Text style={{color: COLORS.dark, ...FONTS.h3}}>Lorem ipsum dolor .</Text>
      <Text style={{color: COLORS.dark, ...FONTS.body5}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, quas.
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card_conrainer: {
    width: width / 1.1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: COLORS.light80,
    borderWidth: 0.5,
    borderColor: COLORS.grey,
    borderRadius: SIZES.radius,
  },

  card_image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 40,
  },
});
