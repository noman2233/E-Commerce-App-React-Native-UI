import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Topbar from './Topbar';
import Notifications from './Notifications';
import {COLORS, FONTS} from '../../../constants';
import Favorite from './Favorite';
import {width} from '../../../constants/theme';
import Messages from './Messages';
import RecentOrders from './recentOrder/RecentOrders';

const UserProfile = ({navigation}) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTabs = index => {
    setToggleState(index);
  };
  return (
    <View style={styles.main_prodile}>
      <Topbar toggleState={toggleState} toggleTabs={toggleTabs} />
      <View style={toggleState === 2 ? styles.active : styles.inActive}>
        <Text
          style={{
            color: COLORS.dark,
            paddingTop: 40,
            paddingBottom: 10,
            paddingLeft: 30,
            alignSelf: 'flex-start',
            ...FONTS.h3,
          }}>
          Notifications
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
        </ScrollView>
      </View>
      <View style={toggleState === 1 ? styles.active : styles.inActive}>
        <Favorite />
      </View>
      <View style={toggleState === 4 ? styles.active : styles.inActive}>
        <RecentOrders />
      </View>
      <View style={toggleState === 3 ? styles.active : styles.inActive}>
        <Messages />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  main_prodile: {
    width: width,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  inActive: {
    display: 'none',
  },
});
