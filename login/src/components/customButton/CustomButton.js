import React from 'react';
import {TouchableOpacity, Alert, Text} from 'react-native';
import Icon from 'react-native-ionicons';
import {styles} from './styles';
const CustomButton = ({
  action = () => {
    Alert.alert('Hello Apple');
  },
  withoutBackgroundColor = false,
  icon = false,
  textButton = 'texto',
}) => {
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={
        withoutBackgroundColor
          ? styles.withoutBackgroundColor
          : styles.withBackground
      }>
      {icon && (
        <Icon ios="logo-apple" size={25} color="#000" android="logo-apple" />
      )}
      <Text
        style={withoutBackgroundColor ? styles.textButton : styles.textApple}>
        {textButton}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
