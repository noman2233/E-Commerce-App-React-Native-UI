import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../../constants';
import STAR from 'react-native-vector-icons/AntDesign';
import Message from 'react-native-vector-icons/Entypo';
import {width} from '../../../../constants/theme';
const ReviewCard = () => {
  return (
    <View style={styles.review_wrapper}>
      <View style={styles.review_person_name}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg',
          }}
          style={styles.review_person}
        />
        <Text style={{color: COLORS.dark80, ...FONTS.h4}}>Usman Awan</Text>
      </View>
      <Text style={{color: COLORS.grey80, ...FONTS.body5, lineHeight: 18}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus labore
        beatae dicta corporis incidunt hic magnam ut consectetur
      </Text>
      <View style={styles.review_stars}>
        <STAR name="star" color={COLORS.success} size={10} />
        <STAR name="star" color={COLORS.success} size={10} />
        <STAR name="star" color={COLORS.success} size={10} />
        <STAR name="star" color={COLORS.success} size={10} />
        <STAR name="star" color={COLORS.success} size={10} />
      </View>
      <View style={styles.review_bottom}>
        <View style={styles.review_bottom_row1}>
          <Text style={{color: COLORS.dark,paddingRight:5, ...FONTS.h5}}>10</Text>
          <STAR name="heart" color={COLORS.error} size={13} />
        </View>
        <View style={styles.review_bottom_row1}>
          <Text style={{color: COLORS.dark,paddingRight:5, ...FONTS.h5}}>400</Text>
          <Message name="message" color={COLORS.primary} size={18} />
        </View>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  review_wrapper: {
    width: width - 25,
    backgroundColor: COLORS.light80,
    borderRadius: 10,
    paddingVertical:5,
    paddingHorizontal:10,
    marginVertical: 5,
  },
  review_person_name: {
    width: width - 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  review_person: {
    width: 35,
    height: 35,
    borderRadius:8,
    marginRight: 10,
  },
  review_stars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  review_bottom:{
    flexDirection:'row',
    justifyContent:"flex-end"
  },
  review_bottom_row1:{
    flexDirection:'row',
    alignItems:"center",
    marginHorizontal:10
  },
});
