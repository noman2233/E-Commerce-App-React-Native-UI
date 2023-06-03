import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Welcome from '../../welcomeScreens/Welcome';
import Walkthrough from '../../welcomeScreens/Walkthrough';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 1000);
  }, []);
  return (
    <View>
      <Welcome navigation={navigation} />
      {/* <Walkthrough navigation={navigation} /> */}
    </View>
  );
};

export default Splash;
