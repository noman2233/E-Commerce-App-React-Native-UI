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
import Phone from 'react-native-vector-icons/FontAwesome5';
import {height, width} from '../../../constants/theme';
const NumberVerification = ({navigation}) => {
  const HideKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  return (
    <HideKeyboard>
      <View style={styles.phone_container}>
        <View style={styles.text_wrapper}>
          <Text style={{color: COLORS.dark, ...FONTS.h2}}>Continue using</Text>
          <Text style={{color: COLORS.dark, ...FONTS.h2}}>phone number</Text>
        </View>
        <View style={styles.phone_wrapper}>
          <Phone
            name="phone"
            color={COLORS.grey}
            size={20}
            style={styles.input_icon}
          />
          <TextInput placeholder="Phone" style={styles.phone_input} />
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
          label="Send Verification Code"
        />
        <View style={styles.enter_otp}>
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
            label="Enter OTP"
            onPress={() => navigation.navigate('OTP')}
          />
        </View>
      </View>
    </HideKeyboard>
  );
};

export default NumberVerification;

const styles = StyleSheet.create({
  phone_container: {
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: COLORS.grey08,
    height: height,
  },
  text_wrapper: {
    width: width / 1.2,
    alignItems: 'flex-start',
  },
  phone_wrapper: {
    width: width / 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.grey80,
    backgroundColor: COLORS.light80,
    marginVertical: 20,
    borderRadius: 7,
  },
  phone_input: {
    width: '100%',
  },
  input_icon: {
    paddingLeft: 50,
    paddingRight: 10,
  },
  enter_otp: {
    width: '70%',
    alignItems: 'flex-end',
  },
});
