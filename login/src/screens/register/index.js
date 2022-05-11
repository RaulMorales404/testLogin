import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {rules} from '../../components/applicationText';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import {useValidation} from 'react-native-form-validator';
import {isFormValidName} from '../../components/validation/validate';
import {isFormValidEmail} from '../../components/validation/validate';
import {isFormValidPassword} from '../../components/validation/validate';
import {registerUserAsyncStora} from '../../asyncStorage/saveRegister';
import {seeData} from '../../asyncStorage/saveRegister';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const {validate} = useValidation({
    state: {email, password, name},
  });
  const activeShowPassword = value => {
    setShowPassword(!value);
  };

  useEffect(() => {
    isFormValidEmail(validate) ? setValidEmail(true) : setValidEmail(false);
  }, [email]);

  const validateData = () => {
    if (
      isFormValidName(validate) === true &&
      isFormValidEmail(validate) === true &&
      isFormValidPassword(validate) === true
    ) {
      registerUserAsyncStora(name, email, password, navigation);
    } else {
      rules();
    }
  };

  const goLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.rowInfo}>
        <View style={styles.colTitlePrimary}>
          <Text style={styles.textPrimary}>Singup</Text>
          <Text style={styles.text}>to account with your</Text>
        </View>
        <CustomButton action={seeData} icon={true} textButton="Apple" />
        <Text style={styles.textAccount}>Or account with your email</Text>
      </View>
      <View style={styles.rowInputs}>
        <View style={styles.rowTitleInputName}>
          <Text style={styles.inputTitle}>NAME</Text>
        </View>
        <CustomInput state={name} onAction={setName} />

        <View style={styles.rowTitleInputEmail}>
          <Text style={styles.inputTitle}>EMAIL</Text>
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
      </View>
      <View style={styles.backButton}>
        <CustomButton
          action={validateData}
          withoutBackgroundColor={true}
          textButton="Create an account"
        />
        <TouchableOpacity onPress={() => goLogin()}>
          <Text style={styles.text}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
