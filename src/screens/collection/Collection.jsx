import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainCollection from '../../components/collection/MainCollection';

const Collection = ({navigation}) => {
  return (
    <View>
      <MainCollection navigation={navigation} />
    </View>
  );
};

export default Collection;

const styles = StyleSheet.create({});
