import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Category2 from '../../components/category/Category2';
import {COLORS} from '../../../constants/theme';

const ChooseCategory2 = ({navigation}) => {
  return (
    <View style={styles.ChooseCategory2}>
      <Category2 navigation={navigation} />
    </View>
  );
};

export default ChooseCategory2;

const styles = StyleSheet.create({
  ChooseCategory2: {
    backgroundColor: COLORS.grey08,
  },
});
