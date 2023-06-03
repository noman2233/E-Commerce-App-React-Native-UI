import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';
import ArrowRight from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import {FlatList} from 'react-native';
const {width, height} = Dimensions.get('window');
import * as Progress from 'react-native-progress';
import {category_2} from '../../../constants/quickLinks';
import Star from 'react-native-vector-icons/AntDesign';
import Fire from 'react-native-vector-icons/Fontisto';
const ProductCard = ({navigation}) => {
  return (
    <View style={styles.category_ProductCard}>
      <View style={styles.category_product_container}>
        <FlatList
          data={category_2}
          numColumns={2}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          keyExtractor={index => index.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate('ProductPage')}>
                <View style={styles.category_product_card_container}>
                  <Image
                    source={item.image}
                    style={styles.category_product_image}
                  />
                  <View style={styles.product_card_details}>
                    <Text
                      style={{
                        color: COLORS.dark,
                        paddingVertical: 4,
                        ...FONTS.h3,
                      }}>
                      {item.name}
                    </Text>

                    <View style={styles.product_rating_wrapper}>
                      <Star name="star" color={COLORS.success} size={12} />
                      <Text
                        style={{
                          color: COLORS.dark,
                          paddingHorizontal: 6,
                          ...FONTS.h5,
                        }}>
                        4.7
                      </Text>
                      <Text
                        style={{
                          color: COLORS.grey80,
                          ...FONTS.h5,
                        }}>
                        ( 3k rating)
                      </Text>
                    </View>

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

                    <Text
                      style={{
                        color: COLORS.dark60,
                        ...FONTS.h5,
                      }}></Text>
                    <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                      <View style={styles.installment_container}>
                        <Fire name="fire" color={COLORS.error} size={15} />
                        <Text
                          style={{
                            color: COLORS.dark,
                            paddingLeft: 10,
                            ...FONTS.h5,
                          }}>
                          0% installament
                        </Text>
                      </View>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  category_ProductCard: {
    marginVertical: 10,
  },

  category_product_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },

  category_product_image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 5,
  },
  category_product_card_container: {
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
    paddingTop: 6,
  },
  product_rating_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  installment_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
