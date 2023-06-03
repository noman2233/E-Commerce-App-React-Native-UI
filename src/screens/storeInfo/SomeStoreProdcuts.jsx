import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {related_prodcuts} from '../../../constants/quickLinks';
import {COLORS, FONTS, SIZES, width} from '../../../constants/theme';

const SomeStoreProdcuts = () => {
  return (
    <View style={styles.SomeStoreProdcuts}>
      <FlatList
        data={related_prodcuts}
        keyExtractor={index => index}
        horizontal={true}
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.product_container}>
              <Image source={item.image} style={styles.product_image} />
              <Text style={{color: COLORS.primary, ...FONTS.h5}}>$120.00</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SomeStoreProdcuts;

const styles = StyleSheet.create({
  SomeStoreProdcuts: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  product_container: {
    backgroundColor: COLORS.light80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    width: 110,
    height: 130,
    marginLeft: 10,
  },
  product_image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
});
