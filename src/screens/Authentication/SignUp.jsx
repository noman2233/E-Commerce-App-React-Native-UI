import {Image, Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import LOGO from '../../../assets/images/logo.png';
import {COLORS} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Email from 'react-native-vector-icons/MaterialCommunityIcons';
import Phone from 'react-native-vector-icons/FontAwesome5';
import Arrow from 'react-native-vector-icons/Entypo';
import {FONTS, SIZES, height, width} from '../../../constants/theme';
import SelectDropdown from 'react-native-select-dropdown';
import {TouchableWithoutFeedback} from 'react-native';
import {TextButton} from '../../../components';
import {ScrollView} from 'react-native';
const SignUp = ({navigation}) => {
  const countries = [
    'Egypt',
    'Canada',
    'Australia',
    'Ireland',
    'Brazil',
    'England',
    'Dubai',
    'France',
  ];
  const HideKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <HideKeyboard>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.login_container}>
          <Image source={LOGO} style={styles.login_logo} />
          <View style={styles.login_wrapper}>
            <Text style={{color: COLORS.dark, ...FONTS.h2}}>
              Create new account
            </Text>

            <View style={styles.login_input_wrapper}>
              <View style={styles.login_input}>
                <Icon
                  name="person"
                  color={COLORS.grey}
                  size={20}
                  style={styles.input_icon}
                />
                <TextInput
                  placeholder="Name"
                  style={styles.input_input}
                  keyboardType="default"
                />
              </View>
              <View style={styles.login_input}>
                <Email
                  name="email"
                  color={COLORS.grey}
                  size={20}
                  style={styles.input_icon}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.input_input}
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.login_input}>
                <Phone
                  name="phone"
                  color={COLORS.grey}
                  size={20}
                  style={styles.input_icon}
                />
                <TextInput
                  placeholder="Phone"
                  style={styles.input_input}
                  keyboardType="phone-pad"
                />
              </View>
              <View style={styles.login_dropdown}>
                <SelectDropdown
                  data={countries}
                  searchInputStyle={styles.dropdown_input}
                  rowTextStyle={styles.dropdown4RowTxtStyle}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown2BtnTxtStyle}
                  defaultButtonText="Select country"
                />
                <Arrow
                  name="arrow-bold-down"
                  color={COLORS.grey}
                  size={20}
                  style={styles.input_icon}
                />
              </View>

              <View style={styles.login_input}>
                <Email
                  name="lock-check"
                  color={COLORS.grey}
                  size={20}
                  style={styles.input_icon}
                />
                <TextInput
                  placeholder="Passowrd"
                  style={styles.input_input}
                  keyboardType="visible-password"
                  secureTextEntry
                />
              </View>
              <Text
                style={{color: COLORS.dark, textAlign: 'center', ...FONTS.h5}}>
                By registrying you will agree to our terms and conditions and
                our data use policy
              </Text>
              <TextButton
                contentContainerStyle={{
                  height: 50,
                  width: '100%',
                  borderRadius: SIZES.radius,
                }}
                labelStyle={{
                  color: COLORS.light,
                }}
                label="Create Account"
              />
            </View>
          </View>
          <View style={styles.singup_login}>
            <Text
              style={{color: COLORS.grey, paddingRight: 10, ...FONTS.body5}}>
              Already have an account
            </Text>
            <TextButton
              contentContainerStyle={{
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.light60,
              }}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.h5,
              }}
              label=" Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </ScrollView>
    </HideKeyboard>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  login_container: {
    // height: height,
    alignItems: 'center',
    backgroundColor: COLORS.grey20,
  },
  login_logo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  login_wrapper: {
    backgroundColor: COLORS.light80,
    width: width / 1.1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: COLORS.grey60,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  input_icon: {
    paddingRight: 5,
  },
  login_input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grey20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginVertical: 5,
  },
  login_dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.grey20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginVertical: 5,
  },
  dropdown_input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor:COLOR,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginVertical: 5,
  },

  input_input: {
    width: '100%',
  },
  login_input_wrapper: {
    marginTop: 10,
  },
  dropdown1BtnStyle: {
    width: '70%',
    height: 45,
  },
  dropdown2BtnTxtStyle: {
    color: COLORS.grey,
    fontSize: 14,
  },
  dropdown4RowTxtStyle: {
    color: COLORS.dark60,
    textAlign: 'center',
    fontSize: 14,
  },
  singup_login: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light60,
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: SIZES.radius,
  },
});
