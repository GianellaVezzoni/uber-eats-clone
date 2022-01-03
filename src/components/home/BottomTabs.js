import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between'
      }}
    >
      <IconBottom icon={'home'} text={'Home'} />
      <IconBottom icon={'search'} text={'Browse'} />
      <IconBottom icon={'shopping-bag'} text={'Grocery'} />
      <IconBottom icon={'receipt'} text={'Orders'} />
      <IconBottom icon={'user'} text={'Account'} />
    </View>
  )
}

const IconBottom = (props) => (
  <View>
    <FontAwesome5 
      name={props.icon}
      size={25}
      style={{
        alignSelf: 'center',
        marginBottom: 3
      }}
    /> 
    <Text>{props.text}</Text> 
  </View>
)