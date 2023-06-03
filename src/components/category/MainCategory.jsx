import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {width, height} from '../../../constants/theme';
import {COLORS, FONTS, SIZES} from '../../../constants';

import {Category} from '../../../constants/quickLinks';
const MainCategory = ({navigation}) => {
  return (
    <View style={styles.main_category}>
      <FlatList
        keyExtractor={item => item.id}
        data={Category}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ChooseCategory2')}>
              <View
                key={item.id}
                style={{
                  width: width / 1.1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: item.bg_color,
                  padding: SIZES.padding / 1.5,
                  borderRadius: 15,
                  marginVertical: 5,
                }}>
                <View style={styles.category_image_container}>
                  <Text
                    style={{
                      color: item.color,
                      paddingVertical: 5,
                      ...FONTS.h2,
                    }}>
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      color: COLORS.dark,
                      ...FONTS.body5,
                    }}>
                    {item.subtitle}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.dark,
                      paddingVertical: 5,
                      ...FONTS.h4,
                    }}>
                    {item.products} Products
                  </Text>
                </View>
                <Image source={item.img} style={styles.category_large_image} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default MainCategory;

const styles = StyleSheet.create({
  main_category: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding / 2,
    marginBottom:100
  },
  category_main_container: {},
  mainCat_image: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    backgroundColor: COLORS.light80,
    marginHorizontal: 4,
    marginVertical: 4,
    borderRadius: 15,
    padding: 10,
  },
  category_small_image: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category_large_image: {
    width: 100,
    height: 130,
    resizeMode: 'cover',
  },
});
