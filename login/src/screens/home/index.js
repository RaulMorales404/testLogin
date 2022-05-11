import React from 'react';
import {View, Text} from 'react-native';
const Home = ({route}) => {
  let {name} = route.params;

  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: '500'}}> Welcome {name}</Text>
    </View>
  );
};

export default Home;
