import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import {dummyData} from '../../../constants';
import {COLORS, FONTS, SIZES, icons} from '../../../constants';
import ArrowRight from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import {FlatList} from 'react-native';
const {width, height} = Dimensions.get('window');
import * as Progress from 'react-native-progress';
import PromoItems from './PromoItems';
// import ProgressBar from 'react-native-progress/Bar';
const flashDeals = [
  {
    id: 1,
    title: 'Flash Deals',
    desc: 'Sale time from 1:00pm - 3:00pm',
  },
  {
    id: 2,
    image: require('../../../assets/images/dummy/product_01.png'),
    sold_qty: '4k',
    total_qty: '5k',
    percentage: '.5',
  },
  {
    id: 3,
    image: require('../../../assets/images/dummy/product_02.png'),
    sold_qty: '546',
    total_qty: '5k',
    percentage: '.8',
  },
  {
    id: 34,
    image: require('../../../assets/images/dummy/camera_01.png'),
    sold_qty: '106',
    total_qty: '5k',
    percentage: '.5',
  },
  {
    id: 4,
    image: require('../../../assets/images/collection/bags/bag2.png'),
    sold_qty: '56',
    total_qty: '5k',
    percentage: '.7',
  },
];

const SaleItems = ({navigation}) => {
  return (
    <View style={styles.saleItem}>
      <View style={styles.saleItem_heading}>
        <Text style={{color: COLORS.dark80, ...FONTS.h4}}>
          Sale time products
        </Text>
        <View style={styles.sale_seeMore}>
          <Text
            style={{paddingHorizontal: 10, color: COLORS.dark60, ...FONTS.h5}}>
            see more
          </Text>
          <ArrowRight name="long-arrow-right" size={20} color={COLORS.dark80} />
        </View>
      </View>
      <View style={styles.saleItem_container}>
        <FlatList
          data={flashDeals}
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
                      paddingVertical: SIZES.padding,
                      ...FONTS.h3,
                    }}>
                    Flash Deals
                  </Text>
                  <Text
                    style={{
                      color: COLORS.light60,
                      paddingHorizontal: SIZES.padding / 2,
                      ...FONTS.h5,
                    }}>
                    Sale time from 1:00pm - 3:00pm
                  </Text>
                </View>
              );
            } else {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate('ProductPage')}>
                  <View style={styles.sale_product_itemContainer}>
                    <Image source={item.image} style={styles.saleItem_image} />
                    <Progress.Bar
                      progress={item.percentage}
                      width={80}
                      borderRadius={10}
                      height={13}
                      color={COLORS.error}
                      style={styles.progress_bar}
                    />
                    <Text
                      style={{
                        paddingVertical: 7,
                        color: COLORS.dark60,
                        ...FONTS.h5,
                      }}>
                      {item.total_qty} / {item.total_qty}
                    </Text>
                    <Text style={{color: COLORS.grey, ...FONTS.body5}}>
                      {item.sold_qty} Products
                    </Text>
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

export default SaleItems;

const styles = StyleSheet.create({
  saleItem: {
    // paddingBottom: 40,
    marginVertical: 10,
  },
  saleItem_heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 1,
  },
  saleItem_container: {
    marginVertical: 15,
    marginLeft: 15,
  },
  sale_seeMore: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  progress_bar: {
    backgroundColor: COLORS.grey20,
    borderColor: COLORS.light60,
  },
  flashDeal_boxMain: {
    width: width / 2.8,
    // paddingVertical: SIZES.padding * 1.5/,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.error,
    shadowColor: COLORS.shadow08,
    borderRadius: 13,
    marginHorizontal: 5,
  },
  saleItem_image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  sale_product_itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding,
    shadowColor: COLORS.shadow08,
    borderColor: COLORS.shadow08, // if you need
    borderWidth: 1,
    backgroundColor: COLORS.light80,
    shadowColor: COLORS.shadow08,
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 13,
    marginHorizontal: 5,
  },
  sold_totalQuantity: {},
});
