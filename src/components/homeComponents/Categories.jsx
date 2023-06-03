import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants';
import ArrowRight from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const categories = [
  {
    id: 1,
    name: 'Bed',
    qty: '200',
    image_1: require('../../../assets/images/dummy/bed_01.png'),
    image_2: require('../../../assets/images/dummy/bed_02.png'),
    image_3: require('../../../assets/images/dummy/bed_03.png'),
    bg_color: COLORS.primary20,
    color: COLORS.primary,
  },
  {
    id: 2,
    name: 'Bathtub',
    qty: '1k',
    image_1: require('../../../assets/images/dummy/bathtub_01.png'),
    image_2: require('../../../assets/images/dummy/bathtub_02.png'),
    image_3: require('../../../assets/images/dummy/bathtub_03.png'),
    bg_color: COLORS.error20,
    color: COLORS.error,
  },
  {
    id: 3,
    name: 'Chair',
    qty: '100',
    image_1: require('../../../assets/images/dummy/chair_01.png'),
    image_2: require('../../../assets/images/dummy/chair_02.png'),
    image_3: require('../../../assets/images/dummy/chair_03.png'),
    bg_color: COLORS.success20,
    color: COLORS.success,
  },
  {
    id: 4,
    name: 'Wardrobe',
    qty: '1k',
    image_1: require('../../../assets/images/dummy/wardrobe_01.png'),
    image_2: require('../../../assets/images/dummy/wardrobe_02.png'),
    image_3: require('../../../assets/images/dummy/wardrobe_03.png'),
    bg_color: COLORS.secondary20,
    color: COLORS.dark,
  },
];

const Categories = () => {
  return (
    <View style={styles.category}>
      <View style={styles.category_heading}>
        <Text style={{color: COLORS.dark80, ...FONTS.h4}}>You May Like</Text>
        <View style={styles.category_seeMore}>
          <Text
            style={{paddingHorizontal: 20, color: COLORS.dark60, ...FONTS.h5}}>
            see more
          </Text>
          <ArrowRight name="long-arrow-right" size={20} color={COLORS.dark80} />
        </View>
      </View>
      <View style={styles.category_container}>
        <FlatList
          data={categories}
          numColumns={2}
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.category_wrapper}>
                <View style={styles.category_images_wrapper}>
                  <View style={styles.category_individual_image}>
                    <Image
                      source={item.image_1}
                      style={styles.category_image}
                    />
                  </View>
                  <View style={styles.category_individual_image}>
                    <Image
                      source={item.image_2}
                      style={styles.category_image}
                    />
                  </View>
                  <View style={styles.category_individual_image}>
                    <Image
                      source={item.image_3}
                      style={styles.category_image}
                    />
                  </View>
                </View>
                <TouchableOpacity activeOpacity={0.6}>
                  <View
                    style={{
                      width: width / 2.2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 10,
                      marginBottom: -10,
                      paddingVertical: 8,
                      borderBottomLeftRadius: 13,
                      borderBottomRightRadius: 13,
                      backgroundColor: item.bg_color,
                    }}>
                    <Text
                      style={{
                        color:item.color,

                        ...FONTS.h3,
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{color: COLORS.dark80, ...FONTS.h5}}>
                      {item.qty} products
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category:{
    marginVertical:10
  },
  category_heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 1.5,
  },
  category_seeMore: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  category_container: {
    width: width,
    alignItems: 'center',
    // justifyContent:'space-between',
    marginBottom: 200,
  },
  category_wrapper: {
    width: width / 2.2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.shadow08,
    backgroundColor: COLORS.light80,
    padding: 10,
    shadowRadius: 3,
    borderRadius: 13,
    margin: 5,
    // marginHorizontal:10
  },
  category_images_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category_individual_image: {
    backgroundColor: COLORS.grey08,
    marginHorizontal: 3,
    padding: 3,
    alignItems: 'center',
    borderRadius: 10,
  },
  category_image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  category_bottom: {},
});
