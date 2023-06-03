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
import MainCategory from '../../components/category/MainCategory';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {TextButton} from '../../../components';
import {height} from '../../../constants/theme';
const Category = ({navigation}) => {
  return (
    <View style={styles.category_main_container}>
      <View style={styles.category_topBar}>
        <TouchableOpacity
          activeOpacity={0.5}
         >
          <Text style={{color: COLORS.dark80, paddingRight: 20, ...FONTS.h4}}>
            General
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Collection')}>
          <Text style={{color: COLORS.dark80, ...FONTS.h4}}>Collection</Text>
        </TouchableOpacity>
      </View>

      <MainCategory navigation={navigation}/>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category_main_container: {
    backgroundColor: COLORS.grey08,
  },
  category_topBar: {
    flexDirection: 'row',
    paddingLeft: SIZES.padding,
    paddingTop: SIZES.padding,
  },
});
