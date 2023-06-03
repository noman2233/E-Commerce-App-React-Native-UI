import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChooseCategory_2} from '../../../constants/quickLinks';
import { COLORS, width } from '../../../constants/theme';
const CategoryBox = () => {
  return (
    <View>
      <FlatList
        data={ChooseCategory_2}
        keyExtractor={index => index.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        renderItem={({item}) => {
          return (
            <View style={styles.category_wrapper}>
              <View style={styles.Category_image_container}>
                <Image
                  source={{
                    uri: item.img_1,
                  }}
                  style={styles.cooseCategory2_image}
                />
                <Image
                  source={{
                    uri: item.img_2,
                  }}
                  style={styles.cooseCategory2_image}
                />
                <Image
                  source={{
                    uri: item.img_3,
                  }}
                  style={styles.cooseCategory2_image}
                />
              </View>
              <Text style={{color: COLORS.dark, ...FONTS.h4}}>
                {item.title}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CategoryBox;

const styles = StyleSheet.create({
  category_wrapper: {
    width: width / 2.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  Category_image_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  cooseCategory2_image: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    backgroundColor: COLORS.grey20,
    marginHorizontal: 3,
    borderRadius: 7,
  },
});
