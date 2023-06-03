import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './Card';
import {COLORS, FONTS} from '../../../../constants';
import image from '../../../../assets/images/dummy/camera_03.png';
const RecentOrders = () => {
  return (
    <View style={styles.recent_container}>
      <Text
        style={{
          color: COLORS.dark,
          alignSelf: 'flex-start',
          paddingHorizontal: 20,
          paddingVertical: 5,
          ...FONTS.h3,
        }}>
        Order Received
      </Text>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <Card />
        <Card image={image} />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

export default RecentOrders;

const styles = StyleSheet.create({
  recent_container: {
  backgroundColor:COLORS.gre08,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});
