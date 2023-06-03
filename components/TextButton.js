import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {FONTS, COLORS} from '../constants';

const TextButton = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...contentContainerStyle,
      }}
      activeOpacity={0.4}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: COLORS.secondary60, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
