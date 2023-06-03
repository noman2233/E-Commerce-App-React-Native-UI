import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Home from 'react-native-vector-icons/AntDesign';
import Pay from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTS} from '../../../../constants';
import {width} from '../../../../constants/theme';

const TopBar = ({navigation, toggleTabs, toggleState}) => {
  return (
    <View style={styles.checkout_topbar}>
      <Text style={{color: COLORS.light, alignSelf: 'center', ...FONTS.h4}}>
        Your Order Summary
      </Text>
      <View style={styles.checkout_topbar_wrapper}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(1)}>
          <Home name="home" size={25} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(2)}>
          <Pay name="payment" size={25} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(3)}>
          <Home name="sound" size={25} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(4)}>
          <Pay name="done" size={25} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  checkout_topbar: {
    position: 'relative',
    width: width,
    height: 120,
    backgroundColor: COLORS.primary,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 15,
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 30,
  },
  checkout_topbar_wrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -20,
    right: 0,
    left: 0,
    margin: 'auto',
  },
  icon: {
    backgroundColor: COLORS.light,
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 20,
  },
});
