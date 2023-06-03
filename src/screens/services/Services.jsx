import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const services = [
  {
    id: '1',
    title: 'Fast shopping',
    description: 'Fast home delivery within 2h free shipping',
    price: 'Only 50$/Month',
    image: require('../../../assets/images/get_card.png'),
  },
  {
    id: '2',
    title: 'Fresh food',
    description: 'You just need the menu we will suggest, choose buy for you',
    price: 'Only 20$/Month',
    image: require('../../../assets/images/buy_coffee.png'),
  },
  {
    id: '3',
    title: 'Exchange old things',
    description: 'You can exchange used items',
    price: 'Only 10$/Month',
    image: require('../../../assets/images/get_money.png'),
  },
  {
    id: '4',
    title: 'Give gifts friend',
    description: 'Help you to send gifts to your loved ones',
    price: 'Only 5$/Month',
    image: require('../../../assets/images/get_reward.png'),
  },
];

const Services = ( ) => {
  return (
    <View style={styles.service_container}>
      <FlatList
        data={services}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.service_wrapper}>
              <View style={styles.service_text_wrapper}>
                <Text
                  style={{
                    color: COLORS.dark,
                    paddingVertical: 5,
                    ...FONTS.h3,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: COLORS.dark60,
                    paddingVertical: 3,
                    lineHeight:20,
                    ...FONTS.h6,
                  }}>
                  {item.description}
                </Text>
                <Text
                  style={{
                    color: COLORS.primary,
                    paddingVertical: 3,
                    ...FONTS.h5,
                  }}>
                  {item.price}
                </Text>
              </View>
              <Image source={item.image} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  service_container: {
    backgroundColor: COLORS.dark08,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical:SIZES.padding
    marginVertical:10
  },
  service_wrapper: {
    width: width / 1.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.light80,
    borderRadius: 20,
    paddingVertical: 25,
    marginVertical:6,
    shadowColor:COLORS.shadow,
    shadowOpacity:1,
  },
  service_text_wrapper: {
    width: width / 1.8,
  },
});
