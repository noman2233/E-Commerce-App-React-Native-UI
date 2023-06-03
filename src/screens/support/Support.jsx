import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ContactUs from './ContactUs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTS} from '../../../constants';
import {height, width} from '../../../constants/theme';
import {questions} from '../../../constants/quickLinks';
import {question} from '../../../constants/quickLinks';
const Support = ({navigation}) => {
  const [close, setClose] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.support}>
        <View style={styles.support_container}>
          <View style={styles.support_wrapper}>
            <Text style={{color: COLORS.dark, paddingVertical: 5, ...FONTS.h3}}>
              FAQ's
            </Text>

            {question.map(question => (
              <View>
                <View style={styles.question_container}>
                  <Text
                    style={{
                      color: COLORS.dark,
                      paddingVertical: 5,
                      paddingRight: 10,
                      ...FONTS.body4,
                    }}>
                    {question.question}
                  </Text>
                  <TouchableOpacity onPress={() => setOpen(!open)}>
                    <AntDesign name="down" color="black" size={10} />
                  </TouchableOpacity>
                </View>
                {open && (
                  <Text style={{color: COLORS.grey, ...FONTS.body4}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, quasi.
                  </Text>
                )}
              </View>
            ))}

            {close &&
              questions.map(question => (
                <View>
                  <View style={styles.question_container}>
                    <Text
                      style={{
                        color: COLORS.dark,
                        paddingVertical: 5,
                        paddingRight: 10,
                        ...FONTS.body4,
                      }}>
                      {question.question}
                    </Text>
                    <TouchableOpacity onPress={() => setOpen(!open)}>
                      <AntDesign name="down" color="black" size={10} />
                    </TouchableOpacity>
                  </View>
                  {open && (
                    <Text style={{color: COLORS.grey, ...FONTS.body4}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod, quasi.
                    </Text>
                  )}
                </View>
              ))}

            <TouchableOpacity onPress={() => setClose(!close)}>
              <Text
                style={{
                  color: COLORS.primary,
                  textAlign: 'center',
                  paddingVertical: 5,
                  ...FONTS.h4,
                }}>
                {close ? 'see less ' : 'see more'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ContactUs navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Support;

const styles = StyleSheet.create({
  support: {
    width:width,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.grey20,
    // height: height,
  },
  support_container: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  support_wrapper: {
    width: width / 1.1,
    backgroundColor: COLORS.light,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  question_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
