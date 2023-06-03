import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './Card';
import {COLORS, FONTS} from '../../../constants';
import {width} from '../../../constants/theme';

const Notification = () => {
  return (
    <View style={styles.notification}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{color: COLORS.dark, paddingLeft: 20, ...FONTS.h4}}>
          Your Activity
        </Text>
        <View style={styles.notification_wrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notification: {
    width:width,
    backgroundColor: COLORS.grey08,
    paddingVertical: 15,
  },
  notification_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
