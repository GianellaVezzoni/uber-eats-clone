import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const Order = ({item}) => {
  const { title, price } = item
  return (
    <View
      style={styles.viewMainOrderContainer}
    >
      <Text 
        style={styles.titleOrder}
      >
        {title}
      </Text>
      <Text 
        style={styles.priceOrder}
      >
        {price}
      </Text>
    </View>
  )
}
