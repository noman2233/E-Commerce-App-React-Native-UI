import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../../../assets/images/store.jpg';
import {COLORS, FONTS, SIZES} from '../../../../constants';
const Top = () => {
  return (
    <View style={styles.store_container}>
      <View style={styles.store_top}>
        <Image source={Logo} style={styles.logo} />
        <View>
          <Text style={{color: COLORS.light, ...FONTS.h3}}>
            Nike Jordan Official
          </Text>

          <Text style={{color: COLORS.light60, ...FONTS.h5}}>
            90% positive response
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  store_container: {},
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 25,
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  store_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.dark,
    paddingVertical: 30,
  },
});
