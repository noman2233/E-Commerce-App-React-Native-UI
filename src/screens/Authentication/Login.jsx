import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
import SocialIcon from 'react-native-vector-icons/FontAwesome';
import {TextButton} from '../../../components';
const Login = ({navigation}) => {
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <HideKeyboard>
        <View style={styles.signup_container}>
          {/* <Image source={LOGO} style={styles.login_logo} /> */}
          <View style={styles.signup_wrapper}>
            <Text style={{color: COLORS.dark, ...FONTS.h2}}>
              Signin to continue
            </Text>

            <View style={styles.signup_signup_wrapper}>
              <View style={styles.signup_input}>
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

              <View style={styles.signup_input}>
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
              <View style={styles.forgot}>
                <TextButton
                  contentContainerStyle={{
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.light60,
                  }}
                  labelStyle={{
                    color: COLORS.primary,
                    ...FONTS.h5,
                  }}
                  label="Forgot Password"
                  onPress={() => navigation.navigate('Number Verification')}
                />
              </View>
              <TextButton
                contentContainerStyle={{
                  height: 50,
                  width: '100%',
                  borderRadius: SIZES.radius,
                  marginTop: 10,
                }}
                labelStyle={{
                  color: COLORS.light,
                }}
                label="Login in"
              />
            </View>
          </View>
          <View style={styles.singup_login}>
            <Text
              style={{color: COLORS.grey, paddingRight: 10, ...FONTS.body5}}>
              Dont have an account
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
              label="Create new Account"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
          <Text style={{color: COLORS.dark, ...FONTS.h5}}>or login with</Text>
          <View style={styles.login_icons_wrapper}>
            <TouchableOpacity>
              <View style={styles.social_logo}>
                <SocialIcon
                  name="google"
                  color={COLORS.dark}
                  size={30}
                  style={styles.login_icon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.social_logo}>
                <SocialIcon
                  name="facebook-f"
                  color={COLORS.dark}
                  size={30}
                  style={styles.login_icon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.social_logo}>
                <SocialIcon
                  name="twitter"
                  color={COLORS.dark}
                  size={30}
                  style={styles.login_icon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </HideKeyboard>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  signup_container: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey20,
  },

  signup_wrapper: {
    backgroundColor: COLORS.light80,
    width: width / 1.1,
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
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
  signup_input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grey20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginVertical: 10,
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

  input_input: {
    width: '100%',
  },

  forgot: {
    width: '98%',
    alignItems: 'flex-end',
  },
  signup_signup_wrapper: {
    paddingVertical: 20,
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
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  login_icons_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  social_logo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey20,
    width: 50,
    height: 50,
    marginHorizontal: 7,
    borderRadius: SIZES.radius,
  },
  login_icon: {
    marginHorizontal: 10,
    borderRadius: 8,
  },
});
