import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LOGO from '../../../assets/images/logo.png';
import {COLORS, FONTS} from '../../../constants';
import {height, width} from '../../../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const DeveloperInfo = () => {
  return (
    <View style={styles.developerInfo_container}>
      <View style={styles.developerInfo_wrapper}>
        <View style={styles.developerInfo_logo}>
          <Image source={LOGO} style={styles.logo_logo} />
          <Text style={{color: COLORS.dark, ...FONTS.h2}}>Noman Sanaullah</Text>
        </View>
        <Text style={{color: COLORS.dark, paddingTop: 20, ...FONTS.h3}}>
          Developer Information
        </Text>
        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Developer Name</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h4}}>
            Noman Sanaullah
          </Text>
        </View>

        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Phone Number</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h3}}>
            (+92)0312-0655529
          </Text>
        </View>
        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Email</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h4}}>
            nomansanaullah2233@gmail.com
          </Text>
        </View>
        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Date Of Birth</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h4}}>6/7/2000</Text>
        </View>
        <View style={styles.developerInfo_box}>
          <Text style={{color: COLORS.grey, ...FONTS.h5}}>Gender</Text>
          <Text style={{color: COLORS.dark80, ...FONTS.h4}}>Male</Text>
        </View>
      </View>
    </View>
  );
};

export default DeveloperInfo;

const styles = StyleSheet.create({
  developerInfo_container: {
    height: height,
    backgroundColor: COLORS.grey20,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  developerInfo_wrapper: {
    width: width / 1.11,
    backgroundColor: COLORS.light80,
    borderRadius: 15,
    padding: 10,
    marginVertical: 20,
  },
  developerInfo_logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_logo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  developerInfo_box: {
    marginVertical: 10,
  },
});
