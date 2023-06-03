import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Card from './Card';
import {COLORS, FONTS, SIZES} from '../../../../constants';
import ArrowRight from 'react-native-vector-icons/FontAwesome';
import {width} from '../../../../constants/theme';
import BoughtTogather from './BoughtTogather';
import StoreInfo from '../../storeInfo/StoreInfo';
import SomeStoreProdcuts from '../../storeInfo/SomeStoreProdcuts';
import {ScrollView} from 'react-native-gesture-handler';

const RelatedProducts = ({navigation}) => {
  return (
    <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <View style={styles.related_products}>
        <View style={styles.related_heading}>
          <Text style={{color: COLORS.dark80, ...FONTS.h4}}>More products</Text>
          <View style={styles.sale_seeMore}>
            <Text
              style={{
                paddingHorizontal: 10,
                color: COLORS.dark60,
                ...FONTS.h5,
              }}>
              see more
            </Text>
            <ArrowRight
              name="long-arrow-right"
              size={20}
              color={COLORS.dark80}
            />
          </View>
        </View>
        <Card navigation={navigation} />
        <View style={styles.related_heading}>
          <Text style={{color: COLORS.dark80, ...FONTS.h4}}>
            Usually Bought togather
          </Text>
          <View style={styles.sale_seeMore}>
            <Text
              style={{
                paddingHorizontal: 10,
                color: COLORS.dark60,
                ...FONTS.h5,
              }}>
              see more
            </Text>
            <ArrowRight
              name="long-arrow-right"
              size={20}
              color={COLORS.dark80}
            />
          </View>
        </View>
        <BoughtTogather navigation={navigation} />

        <StoreInfo navigation={navigation} />
        <Text
          style={{
            paddingHorizontal: 10,
            color: COLORS.dark,
            alignSelf: 'flex-start',
            paddingLeft: 15,
            ...FONTS.h3,
          }}>
          Some Store products
        </Text>
        <SomeStoreProdcuts navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default RelatedProducts;

const styles = StyleSheet.create({
  related_products: {
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  related_heading: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 1,
    marginVertical: 10,
  },
  sale_seeMore: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
});
