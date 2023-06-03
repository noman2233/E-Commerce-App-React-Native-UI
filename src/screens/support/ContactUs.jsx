import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Email from 'react-native-vector-icons/MaterialIcons';
import {SIZES, width} from '../../../constants/theme';
import { TextButton } from '../../../components';

const ContactUs = ({navigation}) => {
  return (
    <View style={styles.contactUs_container}>
      <Text style={{color: COLORS.dark, paddingVertical: 15, ...FONTS.h3}}>
        Contact Us
      </Text>
      <View style={styles.contact_box}>
        <Icon name="chatbox" color={COLORS.success} size={25} />
        <View style={styles.connect_methods}>
          <Text style={{color: COLORS.dark, ...FONTS.h4}}>Chat Now</Text>
          <Text style={{color: COLORS.dark, ...FONTS.body5}}>
            You can chat us here
          </Text>
        </View>
      </View>
      <View style={styles.contact_box}>
        <Email name="email" color={COLORS.error} size={25} />
        <View style={styles.connect_methods}>
          <Text style={{color: COLORS.dark, ...FONTS.h4}}>Send us Email</Text>
          <Text style={{color: COLORS.dark, ...FONTS.body5}}>
            contact@margarat.com
          </Text>
        </View>
      </View>
      <View style={styles.contact_box}>
        <Icon name="call" color={COLORS.primary} size={25} />
        <View style={styles.connect_methods}>
          <Text style={{color: COLORS.dark, ...FONTS.h4}}>
            Customer service
          </Text>
          <Text style={{color: COLORS.dark, ...FONTS.body5}}>
            Call us for support
          </Text>
        </View>
      </View>
      <View style={styles.contact_box}>
        <Icon
          name="ios-information-circle-sharp"
          color={COLORS.support1}
          size={25}
        />
        <View style={styles.connect_methods}>
          <TextButton
            contentContainerStyle={{
              // height: 50,
              // marginTop: SIZES.h5,
              backgroundColor: null,
            }}
            label="Read company Policy"
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h4
            }}
            onPress={()=>navigation.navigate("TermsOfUse")}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  contactUs_container: {
    width: width / 1.1,
    backgroundColor: COLORS.light,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    paddingVertical: 20,
  },
  contact_box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  connect_methods: {
    paddingLeft: 15,
  },
});
