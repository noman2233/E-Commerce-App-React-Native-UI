import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants';
import {FONTS, SIZES, width} from '../../../../constants/theme';
import {TextButton} from '../../../../components';

const Address = () => {
  return (
      <View style={styles.Address_container}>
        <View style={styles.Address_wrapper}>
          <Text
            style={{color: COLORS.dark, alignSelf: 'flex-start', ...FONTS.h5}}>
            Address
          </Text>
          <TextInput
            placeholder="XYZ city Lahore pakisten"
            style={styles.input_home}
          />
        </View>
        <View style={styles.Address_wrapper}>
          <Text
            style={{color: COLORS.dark, alignSelf: 'flex-start', ...FONTS.h5}}>
            Phone Number
          </Text>
          <TextInput placeholder="000-00000000" style={styles.input_home} />
        </View>
        <View style={styles.Address_wrapper}>
          <Text
            style={{color: COLORS.dark, alignSelf: 'flex-start', ...FONTS.h5}}>
            House / Flat number
          </Text>
          <TextInput
            placeholder="123-town street 2"
            style={styles.input_home}
          />
        </View>
        <View style={styles.city_country}>
          <View style={styles.country_wrapper}>
            <Text
              style={{
                color: COLORS.dark,
                alignSelf: 'flex-start',
                ...FONTS.h5,
              }}>
              Country
            </Text>
            <TextInput placeholder="Pakistan" style={styles.input_city} />
          </View>
          <View style={styles.country_wrapper}>
            <Text
              style={{
                color: COLORS.dark,
                alignSelf: 'flex-start',
                ...FONTS.h5,
              }}>
              City
            </Text>
            <TextInput placeholder="Lahore" style={styles.input_city} />
          </View>
        </View>
        <View style={styles.Address_wrapper}>
          <Text
            style={{
              color: COLORS.dark,
              alignSelf: 'flex-start',
              ...FONTS.h5,
            }}>
            Pin Code
          </Text>
          <TextInput placeholder="8765" style={styles.input_home} />
        </View>
        <TextButton
          contentContainerStyle={{
            height: 50,
            width: 300,

            borderRadius: SIZES.radius,
          }}
          labelStyle={{
            color: COLORS.light,
          }}
          label="Proceed to Checkout"
        />
      </View>
  
  );
};

export default Address;

const styles = StyleSheet.create({
  Address_container: {
    width: width / 1.1 + 10,
    backgroundColor: COLORS.light,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 8,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    // marginVertical: 6,
  },
  Address_wrapper: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  input_home: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey80,
    color: COLORS.dark,
    fontSize: 15,
    fontWeight: '800',
    marginTop: -5,
  },
  city_country: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  country_wrapper: {
    width: '40%',
    color: COLORS.dark,
    fontSize: 15,
    fontWeight: '800',
    marginVertical: 6,
  },
  input_city: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey80,
    color: COLORS.dark,
    fontSize: 15,
    fontWeight: '800',
    marginTop: -5,
  },
});
