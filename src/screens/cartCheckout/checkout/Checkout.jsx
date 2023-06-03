import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../../constants';
import debit from '../../../../assets/images/visa1.jpg';
import master from '../../../../assets/images/master.png';
import {SIZES, width} from '../../../../constants/theme';
import {ImageBackground} from 'react-native';
import {TextButton} from '../../../../components';

const Checkout = () => {
  return (
    <View style={styles.checkout_options}>
      <Text style={{color: COLORS.dark, paddingVertical: 10, ...FONTS.h3}}>
        Select payment method
      </Text>
      <View style={styles.cash_box}>
        <Text style={{color: COLORS.dark, ...FONTS.h4}}>Cash on delivery</Text>
        <View style={styles.radio_button}></View>
      </View>
      <View style={styles.credit_cardContainer}>
        <View style={styles.credit_card}>
          <View style={styles.credit_card_box}>
            <Image source={debit} style={styles.debit_card} />

            <Text style={{color: COLORS.dark, ...FONTS.h4}}>
              Debit/credit Card
            </Text>
          </View>
          <View style={styles.radio_button}></View>
        </View>
        <View style={styles.credit_card}>
          <View style={styles.credit_card_box}>
            <Image source={master} style={styles.debit_card} />

            <Text style={{color: COLORS.dark, ...FONTS.h4}}>
              Debit/credit Card
            </Text>
          </View>
          <View style={styles.radio_button}></View>
        </View>
      </View>
      <View style={styles.card_debit_container}>
        <TextInput placeholder="Name on Card" style={styles.card_input} />
        <TextInput placeholder="Card Number" style={styles.card_input} />
        <View style={styles.card_num_expire}>
          <TextInput placeholder="NVC" style={styles.card_input_num} />
          <TextInput
            placeholder="Card expire date"
            style={styles.card_input_num}
          />
        </View>
        <TextButton
          contentContainerStyle={{
            height: 50,
            width: 300,

            borderRadius: SIZES.radius,
          }}
          labelStyle={{
            color: COLORS.light80,
          }}
          label="Pay Now"
        />
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  checkout_options: {
    alignItems: 'center',
  },
  radio_button: {
    backgroundColor: COLORS.light,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: COLORS.dark,
    borderWidth: 1.5,
  },
  cash_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width / 1.1 + 10,
    height: 100,
    backgroundColor: COLORS.light,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 8,
    paddingHorizontal: 10,
    borderRadius: SIZES.radius,
    marginVertical: 6,
  },
  credit_cardContainer: {
    width: width / 1.1 + 10,
    height: 150,
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
    marginVertical: 6,
  },
  credit_card: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  credit_card_box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  debit_card: {
    width: 40,
    height: 30,
    marginRight: 20,
  },
  card_debit_container: {
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
    marginVertical: 6,
  },
  card_input: {
    width: '95%',
    borderWidth: 1,
    borderColor: COLORS.dark20,
    backgroundColor: COLORS.light,
    borderRadius: 4,
    marginVertical: 5,
    paddingLeft: 20,
    height: 50,
  },
  card_num_expire: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  card_input_num: {
    width: '45%',
    borderWidth: 1,
    borderColor: COLORS.dark20,
    backgroundColor: COLORS.light,
    borderRadius: 4,
    paddingLeft: 20,
    height: 50,
  },
});
