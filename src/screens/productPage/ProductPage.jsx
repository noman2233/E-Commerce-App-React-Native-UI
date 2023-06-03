import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {product_page} from '../../../constants/quickLinks';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {TextButton} from '../../../components';
const {width, height} = Dimensions.get('window');
import TimeIcon from 'react-native-vector-icons/Ionicons';
import SaveIcon from 'react-native-vector-icons/AntDesign';
import ProductDescription from './ProductDescription';
const ProductPage = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={styles.product_page_main}>
      <View style={styles.product_page_container}>
        <View style={styles.category_topBar}>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{color: COLORS.grey, paddingRight: 20, ...FONTS.h4}}>
              Product Detail
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('ProductDescription')}>
            <Text style={{color: COLORS.grey, ...FONTS.h4}}>Description</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.product_page_wrapper}>
          <Animated.FlatList
            horizontal
            data={product_page}
            pagingEnabled
            resizeMode={SIZES.width}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={e => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex((x / width).toFixed(0));
            }}
            renderItem={({item, index}) => {
              return (
                <View style={styles.product_page_content_wrapper}>
                  <View style={styles.product_page_image_wrapper}>
                    <Image
                      source={{uri: item.img_1}}
                      style={styles.watlkthrought_image}
                    />
                  </View>
                </View>
              );
            }}
          />
          <View style={styles.dots_container}>
            {product_page.map((item, index) => (
              <Text
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  marginLeft: 5,
                  backgroundColor:
                    currentIndex == index ? COLORS.primary : COLORS.grey20,
                }}
                key={index}></Text>
            ))}
          </View>
        </View>

        <View style={styles.product_details}>
          <View style={styles.product_row1}>
            <Text style={{color: COLORS.dark, ...FONTS.h2}}>
              Air Jordan 1 Mid SS
            </Text>
            <SaveIcon name="save" color="gray" size={20} />
          </View>
          <Text
            style={{
              color: COLORS.grey80,
              paddingVertical: 15,
              ...FONTS.h4,
            }}>
            SKU : 1257RDDS
          </Text>
          <View style={styles.product_row2}>
            <Text style={{color: COLORS.primary, ...FONTS.h5}}>
              Available Stock : 70
            </Text>
            <Text style={{color: COLORS.primary, ...FONTS.h2}}>$ 456</Text>
          </View>
        </View>

        <View style={styles.product_cart_box}>
          <SaveIcon
            name="plus"
            color={COLORS.dark}
            size={20}
            style={styles.plus_icon}
          />
          <TextButton
            contentContainerStyle={{
              height: 60,
              width: width / 1.4,
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.radius,
            }}
            labelStyle={{
              color: COLORS.light,
            }}
            label="Checkout Now"
            // label="Add to cart"
          />
        </View>
      </View>
      <View style={styles.product_page_buttons}>
        <TimeIcon
          name="time"
          color="white"
          size={20}
          style={{paddingRight: 10}}
        />
        <TextButton
          // activeOpacity={0.8}
          contentContainerStyle={{
            height: 60,
            backgroundColor: COLORS.error,
            borderRadius: SIZES.radius,
          }}
          labelStyle={{
            color: COLORS.light,
            ...FONTS.h4,
          }}
          label="Checkout Now"
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  product_page_main: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey08,
  },
  product_page_container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product_page_wrapper: {
    width: width,
    backgroundColor: COLORS.light80,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    paddingBottom: 10,
  },
  category_topBar: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    backgroundColor: COLORS.light80,
  },

  product_page_content_wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  product_page_image_wrapper: {
    width: width,
    height: height / 2.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  watlkthrought_image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  product_page_buttons: {
    width: width / 1.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    backgroundColor: COLORS.error,
    borderRadius: SIZES.radius,
  },
  dots_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  product_paget_dots: {
    width: 8,
    height: 8,
    backgroundColor: 'blue',
    borderRadius: 4,
    marginRight: 10,
  },
  product_details: {
    width: width,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  product_row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  product_row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  product_cart_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus_icon: {
    width: 60,
    padding: 20,
    backgroundColor: COLORS.grey60,
    borderRadius: 15,
    marginRight: 10,
  },
});
