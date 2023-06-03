import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images, icons} from '../../../constants';
import {Dimensions} from 'react-native';
import SettingsIcon from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('window');
const TopBar = ({navigation}) => {
  return (
    <View style={styles.top_container_wrapper}>
      <View style={styles.top_wrapper}>
        <View style={styles.top_logo_heading}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/ef/82/4e/ef824ee86efb3ec6cc6eb6758cd5e70c.png',
            }}
            style={styles.home_logo}
          />
          <Text style={{color: COLORS.light, ...FONTS.h4}}>Home</Text>
        </View>
        <View style={styles.toBar_icon_container}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Notification')}>
            <Image source={icons.bell} style={styles.topBar_icons} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Cart')}>
            <Image source={icons.shoppingCart} style={styles.topBar_icons} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('UserProfile')}>
            <SettingsIcon
              name="settings"
              color="white"
              size={20}
              style={{paddingLeft: 4}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topBar_input_container}>
        <Image source={icons.search} style={styles.topBar_icons} />
        <TextInput placeholder="Search Products" style={styles.topBar_input} />
      </View>
    </View>
  );
};

export default TopBar;
const styles = StyleSheet.create({
  top_container_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey08,
  },
  top_wrapper: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding / 2,
    paddingHorizontal: SIZES.padding,
  },
  top_logo_heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  home_logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 4,
  },

  toBar_icon_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  topBar_icons: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  topBar_input_container: {
    width: width / 1.16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.light,
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: SIZES.padding / 2,
    // fontSize:3
  },
  topBar_input: {
    width: '80%',
    color: COLORS.grey,
    fontSize: SIZES.h5,
  },
});
