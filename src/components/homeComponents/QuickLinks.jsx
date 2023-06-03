import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {quickALinks} from '../../../constants/dummyData';
import {COLORS, FONTS} from '../../../constants';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const quickALinks = [
  {
    id: 1,
    title: 'Event',
    icon: require('../../../assets/icons/book.png'),
    color: COLORS.light60
  },
  {
    id: 2,
    title: 'Transport',
    icon: require('../../../assets/icons/car.png'),
    color: COLORS.support5_08
  },
  {
    id: 3,
    title: 'Live',
    icon: require('../../../assets/icons/video.png'),
    color: COLORS.support2_08
  },
  {
    id: 4,
    title: 'Coin',
    icon: require('../../../assets/icons/shopping_bag.png'),
    color: COLORS.support3_08
  },
  {
    id: 5,
    title: 'Sale',
    icon: require('../../../assets/icons/clock.png'),
    color: COLORS.error08
  },
  {
    id: 6,
    title: 'Search',
    icon: require('../../../assets/icons/search.png'),
    color: COLORS.success20
  },
  {
    id: 7,
    title: 'Premium',
    icon: require('../../../assets/icons/fire.png'),
    color: "rgba(246, 216, 186, 0.922)3"
  },
  {
    id: 8,
    title: 'Card',
    icon: require('../../../assets/icons/credit_card.png'),
    color: COLORS.support5_08

  },
];

const QuickLinks = () => {
  return (
    <View style={styles.quicklinks_container}>
      <View style={styles.quicklinks_container_wrapper}>
        <FlatList
          data={quickALinks}
          numColumns={4}
          nestedScrollEnabled={true}
          keyExtractor={index => index}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.quicklinks_wrapper}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: item.color,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 5,
                    borderRadius: 8,
                  }}>
                  <Image
                    source={item.icon}
                    // source={quickALinks.icon}
                    style={styles.quickLinks_image}
                  />
                </View>

                <Text
                  style={{
                    color: COLORS.dark,
                    ...FONTS.h5,
                  }}>
                  {item.title}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default QuickLinks;

const styles = StyleSheet.create({
  quicklinks_container: {
    marginVertical: 8,
  },
  quicklinks_container_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  quicklinks_wrapper: {
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickLinks_image_container: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.grey20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    borderRadius: 8,
  },
  quickLinks_image: {
    width: 30,
    height: 30,
    // padding: 30,
  },
});
