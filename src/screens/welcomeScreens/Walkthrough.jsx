import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { walkThroughImages } from '../../../constants/images';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { TextButton } from '../../../components';
const {width, height} = Dimensions.get('window');
const Walkthrough = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  return (
    <View style={styles.walkthrough_container}>
      <View style={styles.walkthrough_wrapper}>
        <Animated.FlatList
          horizontal
          keyExtractor={(item,index) => index.toString()}
          data={walkThroughImages}
          pagingEnabled
          resizeMode={SIZES.width}
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.walkthrough_content_wrapper}>
                <View style={styles.walkthrough_image_wrapper}>
                  <Image
                    source={item.image}
                    style={styles.watlkthrought_image}
                  />
                </View>
                <Text style={{marginTop: SIZES.base,color:COLORS.dark, ...FONTS.h1}}>
                {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: SIZES.base,
                    color:COLORS.dark80,
                    ...FONTS.body5,
                  }}>
                    {item.subtitle}
                </Text>
              </View>
            );
          }}
        />
        <View style={styles.dots_container}>
          {walkThroughImages.map((item, index) => (
            <Text
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                marginLeft: 5,
                backgroundColor:
                  currentIndex == index ? COLORS.primary : COLORS.dark20,
              }}></Text>
          ))}
        </View>
      </View>

      <View style={styles.walkthrough_buttons}>
        <TextButton
          contentContainerStyle={{
            height: 50,
            width: 160,
            backgroundColor: COLORS.dark08,
            borderRadius: SIZES.radius,
          }}
          labelStyle={{
            color: COLORS.primary,
          }}
          label="Join Now"
          onPress={()=>navigation.navigate("SignUp")}
          />
        <TextButton
          contentContainerStyle={{
            height: 50,
            width: 150,
            borderRadius: SIZES.radius,
          }}
          labelStyle={{
            color: COLORS.light,
          }}
          label="Get Started"
          onPress={()=>navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  walkthrough_container: {
    width: width,
    height: height,
  },
  walkthrough_wrapper: {
    width: width,
    height: '75%',
  },

  walkthrough_content_wrapper: {
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  walkthrough_image_wrapper: {
    height: '70%',
    width: width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  watlkthrought_image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  walkthrough_buttons: {
    width: width,
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dots_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  walkthrought_dots: {
    width: 8,
    height: 8,
    backgroundColor: 'blue',
    borderRadius: 4,
    marginRight: 10,
  },
});
