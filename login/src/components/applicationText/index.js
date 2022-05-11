import {Alert} from 'react-native';
export const rules = () => {
  return Alert.alert(
    'Password rules',
    'Password minimum 8 characters upper and lower case letters and numbers',
  );
};
