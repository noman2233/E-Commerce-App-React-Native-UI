import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../../constants';
import STAR from 'react-native-vector-icons/AntDesign';
const ReviewProductCard = () => {
  return (
    <View style={styles.review_product_container}>
      <Image
        source={{
          uri: 'https://sneakerfits.com/wp-content/uploads/2019/01/jordan-1-mid-team-orange-clothing-match.jpg',
        }}
        style={styles.prodcut_review}
      />
      <View style={styles.review_product_details}>
        <Text style={{color: COLORS.dark, ...FONTS.h4}}>Nike Jordan Air</Text>
        <View style={styles.review_prodcut_rating}>
          <STAR name="star" color={COLORS.success} size={13} />

          <Text style={{color: COLORS.grey, paddingLeft: 4, ...FONTS.h5}}>
            4.3 (200 ratings)
          </Text>
        </View>
        <Text style={{color: COLORS.DARK, ...FONTS.h5}}>SKU : #68JHGF87</Text>
      </View>
      <STAR name="qrcode" color={COLORS.dark} size={60} />
    </View>
  );
};

export default ReviewProductCard;

const styles = StyleSheet.create({
  review_product_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: COLORS.light80,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    paddingVertical: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.51,
    // shadowRadius: 13.16,
    // elevation: 20,
  },
  review_prodcut_rating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
  },
  prodcut_review: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
});
