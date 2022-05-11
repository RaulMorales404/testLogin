import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
export const validateCount = (email, password, navigation) => {
  const accessApp = name => {
    navigation.navigate('Home', {
      name: name,
    });
  };
  AsyncStorage.getItem('user')
    .then(dataUser => {
      const data = JSON.parse(dataUser);
      let counter = 1;
      data.map(item => {
        if (item.user === email && item.password === password) {
          counter = 0;
          accessApp(item.user);
        } else if (item.email === email && item.password === password) {
          accessApp(item.user);
          counter = 0;
        } else if (counter === data.length) {
          Alert.alert('', 'Credentials do not match');
        }
        counter++;
      });
    })
    .catch(error => {
      console.log(`Algo salio mal Error${error}`);
    });
};

//   const accessApp = () => {
//     navigation.navigate('Home', {
//       name: name,
//     });
//   };
