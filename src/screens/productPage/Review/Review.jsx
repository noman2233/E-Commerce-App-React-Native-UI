import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants';
import ReviewCard from './ReviewCard';
import ReviewProductCard from './ReviewProductCard';

const Review = () => {
  return (
    <View style={styles.review_container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReviewProductCard />

        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ScrollView>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  review_container: {
    backgroundColor: COLORS.grey20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
