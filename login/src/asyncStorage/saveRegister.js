import AsyncStorage from '@react-native-async-storage/async-storage';

export const registerUserAsyncStora = (name, email, password, navigation) => {
  const accessApp = () => {
    navigation.navigate('Home', {
      name: name,
    });
  };
  const newUser = [];
  const userData = {
    tokem: '14',
    user: name,
    email: email,
    password: password,
  };
  newUser.push(userData);
  try {
    AsyncStorage.getItem('user').then(item => {
      if (item !== null) {
        let addNewUser = JSON.parse(item);
        addNewUser.push(userData);
        AsyncStorage.setItem('user', JSON.stringify(addNewUser)).then(() => {
          accessApp();
        });
      } else {
        AsyncStorage.setItem('user', JSON.stringify(newUser)).then(() => {
          accessApp();
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const seeData = () => {
  AsyncStorage.getItem('user')
    .then(dataUser => {
      console.log(dataUser);
    })
    .catch(error => {
      console.log(`Algo salio mal Error${error}`);
    });
};
