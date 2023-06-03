import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {collections} from '../../../constants/quickLinks';
import {COLORS} from '../../../constants';
import {FONTS, height, width} from '../../../constants/theme';

const MainCollection = ({navigation}) => {
  return (
    <View style={styles.collection_container}>
      <FlatList
        keyExtractor={index => index.id}
        data={collections}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.collection_wrapper}>
              <TouchableOpacity
                activeOpacity={0.7}
                onpress={() => navigation.navigate('RelatedProducts')}>
                <View style={styles.collection_image_wrapper}>
                  <View style={styles.sub_collection_image_wrapper}>
                    <Image source={item.img} style={styles.collection_image} />
                    <Image
                      source={item.img_1}
                      style={styles.collection_image}
                    />
                  </View>
                  <View style={styles.sub_collection_image_wrapper}>
                    <Image
                      source={item.img_2}
                      style={styles.collection_image}
                    />
                    <Image
                      source={item.img_3}
                      style={styles.collection_image}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <Text
                style={{
                  color: COLORS.dark,
                  textAlign: 'center',
                  ...FONTS.h3,
                }}>
                {item.title}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MainCollection;

const styles = StyleSheet.create({
  collection_container: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.grey20,
  },
  collection_wrapper: {
    marginVertical: 10,
  },
  sub_collection_image_wrapper: {
    flexDirection: 'row',
  },
  collection_image_wrapper: {
    width: width / 2.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light80,
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  collection_image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    margin: 4,
    backgroundColor: COLORS.grey20,
    borderRadius: 8,
  },
});
