import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {favourite} from '../../../constants/quickLinks';
import {Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {width} from '../../../constants/theme';
// import related_prodcuts from ""
const Favorite = () => {
  return (
    <View srtle={styles.favorite}>
      <Text
        style={{
          color: COLORS.dark,
          paddingTop: 40,
          paddingBottom: 10,
          paddingLeft: 20,
          ...FONTS.h3,
        }}>
        Favorite
      </Text>
      <FlatList
        data={favourite}
        nestedScrollEnabled
        numColumns={2}
        keyExtractor={index => index}
        renderItem={({item}) => {
          return (
            <View style={styles.product_notification}>
              <Image source={item.image} style={styles.image_product} />
              <Text style={{color: COLORS.dark, paddingTop: 5, ...FONTS.h4}}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  favorite: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  product_notification: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2.3,
    backgroundColor: COLORS.light,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: SIZES.radius * 2,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 8,
    marginVertical: 7,
    marginHorizontal: 8,
  },
  image_product: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
