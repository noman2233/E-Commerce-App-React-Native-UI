import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Top from './Top';
import SomeStoreProdcuts from '../SomeStoreProdcuts';
import Card from '../../productPage/relatedProducts/Card';
import {COLORS, FONTS, SIZES} from '../../../../constants';
import {width} from '../../../../constants/theme';
import ArrowRight from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../../../components/flashDeal/ProductCard';
import Banner from './Banner';

const Main = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Top />
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View style={styles.related_heading}>
          <Text style={{color: COLORS.dark80, ...FONTS.h4}}>
            Top rated products
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
        <Card />
        <Banner />
        <SomeStoreProdcuts />
        <View style={styles.related_heading}>
          <Text style={{color: COLORS.dark80, ...FONTS.h4}}>All products</Text>
          <View style={styles.sale_seeMore}>
            <Text
              style={{
                paddingHorizontal: 10,
                color: COLORS.grey,
                ...FONTS.h5,
              }}>
              more
            </Text>
            <ArrowRight
              name="long-arrow-down"
              size={20}
              color={COLORS.grey80}
            />
          </View>
        </View>
        <ProductCard />
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
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
