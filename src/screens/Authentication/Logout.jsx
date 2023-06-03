import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextButton} from '../../../components';
import {COLORS, SIZES, height} from '../../../constants/theme';

const Logout = () => {
  return (
    <View style={styles.logout_container}>
      <TextButton
        contentContainerStyle={{
          height: 50,
          width: '70%',
          borderRadius: SIZES.radius,
        }}
        labelStyle={{
          color: COLORS.light,
        }}
        label="Logout Now"
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  logout_container: {
    height: height,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: COLORS.grey08,
  },
});
