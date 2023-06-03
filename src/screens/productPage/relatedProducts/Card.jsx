import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../../constants';
import {related_prodcuts} from '../../../../constants/quickLinks';
import {width} from '../../../../constants/theme';

const Card = ({navigation}) => {
  return (
    <View style={styles.related_container}>
      <FlatList
        data={related_prodcuts}
        keyExtractor={index => index}
        horizontal={true}
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.product_wrapper}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate('ProductPage')}>
                <Image source={item.image} style={styles.image} />
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>
                  Nike Air jordan
                </Text>
                <Text style={{color: COLORS.grey80, ...FONTS.h5}}>
                  Nike Store
                </Text>
                <View style={styles.price_off}>
                  <Text style={{color: COLORS.primary, ...FONTS.h4}}>$200</Text>
                  <Text style={{color: COLORS.grey60, ...FONTS.h5}}>-20%</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  related_container: {
    width: width,
  },
  product_wrapper: {
    width: 130,
    height: 170,
    backgroundColor: COLORS.light80,
    borderRadius: SIZES.radius,
    paddingHorizontal: 5,
    marginLeft: 10,
  },
  image: {
    width: 90,
    height: 80,
    resizeMode: 'cover',
  },
  price_off: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
