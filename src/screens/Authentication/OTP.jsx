import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {TextButton} from '../../../components';

const OTP = () => {
  const HideKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  return (
    <HideKeyboard>
      <View style={styles.otp_container}>
        <Text style={{color: COLORS.dark, ...FONTS.h2}}>Enter OTP sent</Text>
        <Text style={{color: COLORS.dark, ...FONTS.h2}}>to your phone</Text>
        <View style={styles.otp_wrapper}>
          <TextInput style={styles.otp_input} keyboardType="numeric" />
          <TextInput style={styles.otp_input} keyboardType="numeric" />
          <TextInput style={styles.otp_input} keyboardType="numeric" />
          <TextInput style={styles.otp_input} keyboardType="numeric" />
        </View>

        <TextButton
          contentContainerStyle={{
            height: 50,
            width: '80%',
            borderRadius: SIZES.radius,
          }}
          labelStyle={{
            color: COLORS.light,
          }}
          label="Submit"
        />
        <View style={styles.resend_option}>
          <TextButton
            contentContainerStyle={{
              borderRadius: SIZES.radius,
              backgroundColor: 'transparent',
            }}
            labelStyle={{
              color: COLORS.primary,
              paddingVertical: 10,
              ...FONTS.h5,
            }}
            label="Resend code"
          />
        </View>
      </View>
    </HideKeyboard>
  );
};

export default OTP;

const styles = StyleSheet.create({
  otp_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  otp_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  otp_input: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.grey60,
    backgroundColor: COLORS.light80,
    marginHorizontal: 5,
  },
  resend_option: {
    width: '70%',
    alignItems: 'flex-end',
  },
});
