import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Product from '../../../../assets/images/dummy/cat6.png';
import {COLORS, FONTS} from '../../../../constants';
import {SIZES, width} from '../../../../constants/theme';
import {TextButton} from '../../../../components';
import {order_received} from '../../../../constants/quickLinks';
const Card = ({image}) => {
  return (
    <FlatList
      data={order_received}
      nestedScrollEnabled
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View style={styles.recent_orders}>
            <View style={styles.recent_orders_wrapper}>
              <View style={styles.product_detail}>
                <Image source={item.image} style={styles.image} />
                <View>
                  <Text style={{color: COLORS.dark60, ...FONTS.h5}}>
                    {item.name}
                  </Text>
                  <Text style={{color: COLORS.dark, ...FONTS.h4}}>$80 </Text>
                </View>
              </View>
              <Text style={{color: COLORS.grey, ...FONTS.body5}}>
                15-April-2020
              </Text>
            </View>
            <Text
              style={{color: COLORS.dark, paddingVertical: 5, ...FONTS.body5}}>
              Your package has been delivered.Kindly share your review
            </Text>
            <View style={styles.share_review}>
              <Text style={{color: '#0d8f0b', ...FONTS.body5}}>Delivered</Text>
              <TextButton
                contentContainerStyle={{
                  // height: 50,
                  marginTop: SIZES.base,
                  backgroundColor: null,
                }}
                label="share review"
                labelStyle={{
                  color: COLORS.primary,
                  ...FONTS.h5,
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default Card;

const styles = StyleSheet.create({
  recent_orders: {
    width: width / 1.1 + 5,
    marginVertical: 8,
    backgroundColor: COLORS.light,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: SIZES.radius * 2,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 8,
  },
  image: {
    width: 60,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  recent_orders_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  product_detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  share_review: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
});
