import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlashDealOne from '../../components/flashDeal/FlashDealOne';
import {COLORS} from '../../../constants';
import { height } from '../../../constants/theme';

const FlashDeal = () => {
  return (
    <View style={styles.flashDeal_screen}>
      <FlashDealOne />
    </View>
  );
};

export default FlashDeal;

const styles = StyleSheet.create({
  flashDeal_screen: {
    // height:height,
    backgroundColor: COLORS.grey08,
  },
});
