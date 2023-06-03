import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LOGO from '../../../assets/images/logo.png';
import {COLORS, FONTS} from '../../../constants';
import {width} from '../../../constants/theme';
import {terms_of_use} from '../../../constants/quickLinks';
const TermsOfUse = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.termsOfUse_container}>
        {/* <Image source={LOGO} style={styles.logo_logo} /> */}
         {/* <Text
              style={{color: COLORS.dark, paddingVertical: 10, ...FONTS.h3}}>
             Terms & Conditions
            </Text>   */}
        {terms_of_use.map(item => (
          <View style={styles.terms0fUse_wrapper} key={item.id}>
            <Text
              style={{color: COLORS.dark, paddingVertical: 10, ...FONTS.h3}}>
              {item.title}
            </Text>

            <Text style={{color: COLORS.dark60, ...FONTS.body5}}>
              {item.details}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TermsOfUse;

const styles = StyleSheet.create({
  termsOfUse_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey08,
    paddingVertical: 20,
  },
  logo_logo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginVertical: 5,
  },
  terms0fUse_wrapper: {
    width: width /1.07 ,
    backgroundColor: COLORS.light80,
    borderRadius: 15,
    padding: 10,
    marginVertical: 8,
  },
});
