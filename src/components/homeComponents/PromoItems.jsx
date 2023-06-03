import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../../constants';
import ArrowRight from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import {FlatList} from 'react-native';
const {width, height} = Dimensions.get('window');
import * as Progress from 'react-native-progress';

const promoItems = [
  {
    id: 1,
    title: 'Promo Product',
    desc: 'Products are priced from 40%',
  },
  {
    id: 2,
    image: require('../../../assets/images/dummy/product_03.png'),
    name: 'Wireless Controller PS4™',
    price: 278.0,
    discount: '-54%',
  },
  {
    id: 3,
    image: require('../../../assets/images/dummy/product_04.png'),
    name: 'T-shirt Men Uniquilo',
    price: 378.0,
    discount: '-60%',
  },
  {
    id: 34,
    image: require('../../../assets/images/dummy/bed_03.png'),
    name: 'Five Star Bed',
    price: 78.0,
    discount: '-30%',
  },
  {
    id: 4,
    image: require('../../../assets/images/collection/dress/dress4.png'),
    name: 'T-shirt Men Uniquilo',
    price: 37.0,
    discount: '-50%',
  },
];

const PromoItems = ({navigation}) => {
  return (
    <View style={styles.promoItem}>
      <View style={styles.promoItem_heading}>
        <Text style={{color: COLORS.dark80, ...FONTS.h4}}>Promotion items</Text>
        <View style={styles.promo_seeMore}>
          <Text
            style={{paddingHorizontal: 10, color: COLORS.dark60, ...FONTS.h5}}>
            see more
          </Text>
          <ArrowRight name="long-arrow-right" size={20} color={COLORS.dark80} />
        </View>
      </View>
      <View style={styles.promoItem_container}>
        <FlatList
          data={promoItems}
          horizontal={true}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            if (index == 0) {
              return (
                <View style={styles.flashDeal_boxMain}>
                  <Text
                    style={{
                      color: COLORS.light,
                      padding: SIZES.padding,
                      ...FONTS.h3,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.light60,
                      paddingHorizontal: SIZES.padding / 2,
                      ...FONTS.h5,
                    }}>
                    {item.desc}
                  </Text>
                </View>
              );
            } else {
              return (
                <TouchableOpacity
                  aciveOpacity={0.6}
                  onPress={() => navigation.navigate('ProductPage')}>
                  <View style={styles.promo_product_itemContainer}>
                    <Image source={item.image} style={styles.promoItem_image} />
                    <Progress.Bar
                      progress={0.4}
                      width={70}
                      borderRadius={10}
                      height={13}
                      color={COLORS.primary}
                      style={styles.progress_bar}
                    />
                    <Text
                      style={{
                        paddingVertical: 10,
                        ...FONTS.h5,
                      }}>
                      {item.name}
                    </Text>
                    <View style={styles.promoPriceContainer}>
                      <Text style={{color: COLORS.primary, ...FONTS.h3}}>
                        ${item.price}
                      </Text>
                      <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                        {item.discount}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
    </View>
  );
};

export default PromoItems;

const styles = StyleSheet.create({
  promoItem: {
    // paddingBottom: 40,
    marginVertical: 10,
    height: 230,
  },
  promoItem_heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 1.5,
  },
  promoItem_container: {
    marginVertical: 15,
    marginLeft: 15,
  },
  promo_seeMore: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  progress_bar: {
    backgroundColor: COLORS.grey20,
    borderColor: COLORS.light60,
  },
  flashDeal_boxMain: {
    width: width / 2.8,
    paddingVertical: SIZES.padding * 1.6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.shadow08,
    borderRadius: 13,
    marginHorizontal: 5,
  },
  promoItem_image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  promo_product_itemContainer: {
    width: width / 2.7,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.shadow08,
    borderColor: COLORS.shadow08, // if you need
    borderWidth: 1,
    backgroundColor: COLORS.light80,
    shadowColor: COLORS.shadow08,
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 13,
    marginHorizontal: 5,
    // backgroundColor:"red"
  },
  promoPriceContainer: {
    width: width / 3.2,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:"space-between",
    justifyContent: 'space-between',
  },
});
