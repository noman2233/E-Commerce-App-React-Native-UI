import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, SIZES, images, icons} from '../../../constants';
import TopBar from '../../components/topBar/TopBar';
import {TextButton} from '../../../components';
import QuickLinks from '../../components/homeComponents/QuickLinks';
import SaleItems from '../../components/homeComponents/SaleItems';
import PromoItems from '../../components/homeComponents/PromoItems';
import Categories from '../../components/homeComponents/Categories';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Slider from '../../components/flashDeal/Slider';
const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <View style={styles.HOME}>
      <View style={styles.home_container}>
        <TopBar navigation={navigation} />

        <View style={styles.home_topBar}>
          <TextButton
            contentContainerStyle={{
              borderRadius: SIZES.radius,
            }}
            labelStyle={{
              color: COLORS.light,
              paddingRight: 10,
              ...FONTS.h4,
            }}
            label="Prodcuts"
          />
          <TextButton
            contentContainerStyle={{
              borderRadius: SIZES.radius,
            }}
            labelStyle={{
              color: COLORS.light,
              paddingHorizontal: 10,
              ...FONTS.h4,
            }}
            label="Category"
            onPress={() => navigation.navigate('MainCategory')}
          />
          <TextButton
            contentContainerStyle={{
              borderRadius: SIZES.radius,
            }}
            labelStyle={{
              color: COLORS.light,
              paddingHorizontal: 10,
              ...FONTS.h4,
            }}
            label="Services"
            onPress={() => navigation.navigate('Services')}
          />
        </View>
      </View>

      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        {/* <View style={styles.absoluteCard_container}>
          <Image source={images.banner01} style={styles.absolute_card} />
          <View style={styles.absolute_card_content}>
            <View style={styles.absolute_card_text}>
              <Text style={{color: COLORS.light, ...FONTS.h3}}>
                Same Price of $100
              </Text>
              <Text style={{color: COLORS.lightGrey, ...FONTS.body5}}>
                Lorem ipsum, dolor sit amet
              </Text>
            </View>
            <Text
              style={{
                width: 30,
                height: 40,
                backgroundColor: 'white',
                color: COLORS.dark,
                padding: 30,
                borderRadius: 15,
                ...FONTS.h4,
              }}>
              noman
            </Text>
          </View>
        </View> */}
        <Slider />
        {/* ***********
         ***** QuickLinks Links ********** */}
        <QuickLinks />
        {/* ***** saleItem items **********  */}
        <SaleItems navigation={navigation} />
        {/* ***** promotion Items **********  */}
        <PromoItems navigation={navigation} />
        {/* ***** Category  **********  */}
        <Categories navigation={navigation} />
        {/* **************** SaleItems Products ********** */}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HOME: {
    backgroundColor: COLORS.grey08,
  },
  home_container: {
    width: width,
    // height: height / 3,
    backgroundColor: COLORS.primary,
  },
  home_topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: SIZES.margin,
    paddingHorizontal: SIZES.padding / 1.5,
  },

  absoluteCard_container: {
    width: width,
    alignItems: 'center',
    marginTop: 10,
  },
  absolute_card_content: {
    position: 'absolute',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.padding,
  },
  absolute_card: {
    width: width / 1.16,
    height: 170,
    borderRadius: 15,
  },
  absolute_card_text: {
    width: '80%',
  },
  absolute_card_date: {},
});
