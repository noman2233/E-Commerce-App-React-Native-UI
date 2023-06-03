import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Person from '../../../assets/images/dummy/man.webp';
import {COLORS, FONTS, SIZES} from '../../../constants';
import Setting from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {width} from '../../../constants/theme';
const Topbar = ({navigation, toggleTabs, toggleState}) => {
  return (
    <View style={styles.Main_container}>
      <View style={styles.tobar_container}>
        <View style={styles.profile_wrapper}>
          <Image source={Person} style={styles.person} />
          <View style={styles.tobar_wrapper}>
            <Text style={{color: COLORS.light, ...FONTS.h2}}>Usman Awan</Text>
            <Text style={{color: COLORS.light, paddingTop: 5, ...FONTS.body}}>
              Welcome Usman
            </Text>
          </View>
        </View>
        <Setting name="md-settings" color="white" size={25} />

        <View style={styles.tobar_buttons}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(1)}>
            <Setting
              name="heart-outline"
              color="black"
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(2)}>
            <Setting
              name="notifications-outline"
              color="black"
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(3)}>
            <MaterialIcons
              name="messenger-outline"
              color="black"
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => toggleTabs(4)}>
            <Feather name="box" color="black" size={20} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  tobar_container: {
    width: width,
    position: 'relative',
    // backgroundColor: '#0039a6',
    backgroundColor:COLORS.primary,
    paddingBottom: 30,
    paddingTop: 10,
    height: 180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    marginBottom:30
  },
  tobar_wrapper: {},
  profile_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  person: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 30,
    marginRight: 20,
  },
  tobar_buttons: {
    position: 'absolute',
    bottom: -20,
    right: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  icon: {
    backgroundColor: COLORS.light,
    padding: 15,
    borderRadius: SIZES.radius,
    marginHorizontal: 12,
    shadowColor: COLORS.dark,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 15,
  },
});
