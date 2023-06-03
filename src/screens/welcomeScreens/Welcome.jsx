import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES, images} from '../../../constants';
import {TextButton} from '../../../components';
const Welcome = ({navigation}) => {
  return (
    <View style={styles.welcome_container}>
      <View style={styles.logo_wrapper}>
        <Image source={images.logo} style={styles.logo} />
        <Text
          style={{marginTop: SIZES.padding, color: COLORS.dark, ...FONTS.h1}}>
          Welcome to
        </Text>
        <Text style={{marginTop: SIZES.base, color: COLORS.dark, ...FONTS.h1}}>
          Margaret
        </Text>
      </View>
      <View style={styles.button_wrapper}>
        <View style={styles.welcome_buttons}>
          <TextButton
            contentContainerStyle={{
              height: 50,
              width: 300,

              borderRadius: SIZES.radius,
            }}
            labelStyle={{
              color: COLORS.light80,
            }}
            label="Get Started"
            onPress={()=>navigation.navigate("Walkthrough")}
            />

          <TextButton
            contentContainerStyle={{
              height: 50,
              marginTop: SIZES.base,
              backgroundColor: null,
            }}
            label="Already have an account"
            labelStyle={{
              color: COLORS.primary,
            }}
            onPress={()=>navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};
// , ...

export default Welcome;

const styles = StyleSheet.create({
  welcome_container: {
    // width: '100%',
    height: '100%',
    // flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo_wrapper: {
    flex: 5,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  logo: {
    width: 150,
    height: 150,
  },
  welcome_buttons: {
    wisth: '100%',
    paddingHorizontal: SIZES.padding,
    marginBottom: 30,
  },
  button_wrapper: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
