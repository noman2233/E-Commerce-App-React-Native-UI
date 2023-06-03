import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {flashSales} from '../../../constants/dummyData';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {TouchableOpacity} from 'react-native';

const FlashSale = () => {
  return (
    <View style={styles.flashSale_component}>
      <FlatList
        data={flashSales}
        horizontal={true}
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={index => index}
        ListHeaderComponent={
          <View style={styles.flasSale_header}>
            <Text style={{color: COLORS.light, ...FONTS.h3}}>08:00</Text>
            <Text style={{color: COLORS.light, ...FONTS.h5}}>Next Flash</Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <View style={styles.flasSale_item}>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={{color: COLORS.dark, ...FONTS.h4}}>
                  {item.time}
                </Text>
                <Text style={{color: COLORS.dark60, ...FONTS.h5}}>
                  {item.status}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  flashSale_component: {
    marginVertical: 30,
    marginLeft: 20,
  },
  flasSale_header: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.grey60,
    borderRadius: 15,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  flasSale_item: {
    width: 85,
    height: 80,
    backgroundColor: COLORS.lightGrey80,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: COLORS.grey60,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
});
