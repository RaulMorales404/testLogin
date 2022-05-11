import React from 'react';
import {TextInput, Image, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const CustomInput = ({
  onAction,
  state,
  success = false,
  typeInputPassword = false,
  activeShwoPass = false,
  onActivePassword,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onAction}
        value={state}
        secureTextEntry={activeShwoPass}
      />
      {success && typeInputPassword === false && (
        <View style={styles.rowIcon}>
          <Image
            style={styles.img}
            source={require('../../svg/check-circle-outline-active.png')}
          />
        </View>
      )}

      {typeInputPassword && (
        <TouchableOpacity
          onPress={() => {
            onActivePassword(activeShwoPass);
          }}
          style={styles.rowIcon}>
          <Image
            style={styles.img}
            source={
              activeShwoPass
                ? require('../../svg/eye-off-outline.png')
                : require('../../svg/eye-outline.png')
            }
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
