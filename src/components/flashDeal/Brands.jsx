import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {brands} from '../../../constants/dummyData';
import {COLORS, FONTS} from '../../../constants';

const Brands = () => {
  return (
    <View style={styles.brands_container}>
      <FlatList
        data={brands}
        horizontal={true}
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={index => index}
        ListHeaderComponent={
          <View style={styles.brands_image_wrapper_top}>
            <Text style={{color: COLORS.dark, ...FONTS.h3}}>ALL</Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <View style={styles.brands_wrapper}>
              <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.brands_image_wrapper}>
                  <Image source={item.logo} style={styles.brands_logo} />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  brands_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  brands_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  brands_image_wrapper_top: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light80,
    width: 60,
    height: 55,
    marginLeft: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.grey60,
  },
  brands_image_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light80,
    width: 100,
    height: 50,
    marginLeft: 10,
    borderRadius: 8,
  },
  brands_logo: {
    width: 55,
    resizeMode: 'contain',
  },
});
