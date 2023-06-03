import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';
import ArrowRight from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import {FlatList} from 'react-native';
const {width, height} = Dimensions.get('window');
import * as Progress from 'react-native-progress';
import {flashSaleItems} from '../../../constants/dummyData';

const ProductCard = () => {
  return (
    <View style={styles.ProductCard}>
      <View style={styles.brand_product_container}>
        <FlatList
          data={flashSaleItems}
          numColumns={2}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          keyExtractor={index => index.id}
          renderItem={({item, index}) => {
            return (
              <View style={styles.brand_product_card_container}>
                <Image source={item.image} style={styles.brand_product_image} />
                <View style={styles.product_card_details}>
                  <Text
                    style={{
                      color: COLORS.dark,
                      paddingVertical: 4,
                      ...FONTS.h3,
                    }}>
                    {item.name}
                  </Text>
                  <View style={styles.product_price_wrapper}>
                    <Text style={{color: COLORS.primary, ...FONTS.h3}}>
                      {item.price}
                    </Text>
                    <Text
                      style={{
                        color: COLORS.grey80,
                        paddingLeft: 30,
                        ...FONTS.h5,
                      }}>
                      {item.percentage}
                    </Text>
                  </View>
                  <Progress.Bar
                    progress={0.7}
                    width={100}
                    borderRadius={10}
                    height={15}
                    color={COLORS.error}
                    style={styles.progress_bar}
                  />
                  <Text
                    style={{
                      color: COLORS.dark60,
                      ...FONTS.h5,
                    }}></Text>
                  <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                    {item.total_qty}/{item.total_qty} Product sold
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ProductCard: {
    marginVertical: 10,
  },

  brand_product_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },

  brand_product_image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 5,
  },
  brand_product_card_container: {
    width: width / 2.3,
    alignItems: 'center',
    paddingVertical: SIZES.padding / 2,
    paddingHorizontal: 10,
    shadowColor: COLORS.shadow08,
    borderColor: COLORS.shadow08,
    borderWidth: 1,
    backgroundColor: COLORS.light80,
    shadowColor: COLORS.light80,
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 13,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  progress_bar: {
    backgroundColor: COLORS.grey20,
    borderColor: COLORS.light60,
  },
  product_card_details: {
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  product_price_wrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
