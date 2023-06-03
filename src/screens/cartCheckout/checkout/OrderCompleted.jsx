import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants';
import {FONTS, SIZES, height, width} from '../../../../constants/theme';
import Order from '../../../../assets/images/completed.png';
import product from '../../../../assets/images/dummy/camera_03.png';
import {TextButton} from '../../../../components';

const OrderCompleted = ({navigation}) => {
  return (
    <View style={styles.ordercompleted}>
      {/* <View style={styles.order_wrapper}>
        <Image source={product} style={styles.order_order} />
        <View>
          <Text style={{color: COLORS.dark, ...FONTS.h3}}>
            Nikon Camera A21
          </Text>
          <Text style={{color: COLORS.primary, ...FONTS.h4}}>$200.00</Text>
          <Text style={{color: COLORS.support5, ...FONTS.h4}}>
            Quantity = 1
          </Text>
        </View>
      </View> */}
      <Text style={{color: COLORS.dark, paddingVertical: 20, ...FONTS.h3}}>
        Order placed Successfully
      </Text>
      <Image source={Order} style={styles.order_image} />
      <TextButton
        contentContainerStyle={{
          height: 50,
          width: 300,

          borderRadius: SIZES.radius,
        }}
        labelStyle={{
          color: COLORS.light,
        }}
        label="Continue Shopping"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  ordercompleted: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 2,
  },
  order_image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    opacity: 0.8,
    marginBottom: 20,
  },
  order_order: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 20,
  },
  order_wrapper: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
});
