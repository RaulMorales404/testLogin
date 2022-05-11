import React, {useEffect} from 'react';
import {View, Image, ScrollView, Text, Alert} from 'react-native';
import {useState} from 'react';
import {styles} from './styles';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import {useValidation} from 'react-native-form-validator';
import {isFormValidEmail} from '../../components/validation/validate';
import {isFormValidPassword} from '../../components/validation/validate';
import {validateCount} from '../../asyncStorage/validateCount';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [validEmail, setValidEmail] = useState(false);

  const {validate} = useValidation({
    state: {email, password},
  });

  useEffect(() => {
    isFormValidEmail(validate) ? setValidEmail(true) : setValidEmail(false);
  }, [email]);

  const validateData = () => {
    if (
      isFormValidEmail(validate, false) === true &&
      isFormValidPassword(validate) === true
    ) {
      validateCount(email, password, navigation);
    } else {
      Alert.alert('Incorrecto emial o password');
    }
  };

  const activeShowPassword = value => {
    setShowPassword(!value);
  };

  const goRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView>
      <View style={styles.rowNav}>
        <Image style={styles.img} source={require('../../svg/image1.png')} />
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.colTitlePrimary}>
          <Text style={styles.textPrimary}>Welcome!</Text>
          <Text style={styles.text}>Login you account with your</Text>
        </View>
        <CustomButton icon={true} textButton="Apple" />
        <Text style={styles.text}>Or account with your email</Text>
      </View>
      <View style={styles.rowInputs}>
        <View style={styles.rowTitleInputEmail}>
          <Text style={styles.inputTitle}>EMAIL/USERNAME</Text>
        </View>
        <CustomInput success={validEmail} state={email} onAction={setEmail} />
        <View style={styles.rowTitleInputPassword}>
          <Text style={styles.inputTitle}>PASSWORD</Text>
        </View>
        <CustomInput
          state={password}
          typeInputPassword={true}
          activeShwoPass={showPassword}
          onAction={setPassword}
          onActivePassword={activeShowPassword}
        />
        <CustomButton
          action={validateData}
          withoutBackgroundColor={true}
          textButton="Login"
        />
        <View style={styles.rowInfo}>
          <Text style={styles.text}>Forgot Password?</Text>
        </View>
        <CustomButton action={goRegister} textButton={'Create an account'} />
      </View>
    </ScrollView>
  );
};

export default Login;
