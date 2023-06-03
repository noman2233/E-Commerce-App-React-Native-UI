import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import shoe from '../../../assets/images/collection/shoes/jordan.png';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { width } from '../../../constants/theme';
import { TextButton } from '../../../components';
const StoreInfo = ({navigation}) => {
  return (
    <View style={styles.storeInfo}>
      <Image source={shoe} style={styles.image} />
      <View>
        <Text style={{color: COLORS.dark, ...FONTS.h4}}>Nike Store</Text>
        <Text style={{color: COLORS.grey, ...FONTS.h5}}>2k Followers</Text>
      </View>
      <TextButton
        contentContainerStyle={{
          height: 40,
          width: 100,
          borderRadius: 8,
          backgroundColor: COLORS.dark08,
        }}
        labelStyle={{
          color: COLORS.primary,
          ...FONTS.h5,
        }}
        label="View Store"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

export default StoreInfo;

const styles = StyleSheet.create({
  storeInfo: {
    width: width / 1.1 + 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius,
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
});
