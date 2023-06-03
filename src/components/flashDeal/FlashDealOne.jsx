import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import Banner from '../../../assets/images/banner-03.png';
import {width } from '../../../constants/theme';
import FlashSale from './FlashSale';
import ProductCard from './ProductCard';
import Brands from './Brands';
import Banner from './Banner';
// import {flashSales} from
const FlashDealOne = () => {
  return (
    <View>
      <ScrollView>
      


        {/* ************ flash sale ********** */}
        <FlashSale />
        {/* ************ Brands ********** */}
        <Brands />
        {/* ************ filters ********** */}
        <Banner/>

        <ProductCard />
      </ScrollView>
    </View>
  );
};

export default FlashDealOne;

const styles = StyleSheet.create({
  flashDeal_banner_continaer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  flashDeal_banner_wrapper: {
    width: width / 1.2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flashDeal_banner: {
    width: width / 1.1,
    height: 100,
    borderRadius: 10,
  },
});
