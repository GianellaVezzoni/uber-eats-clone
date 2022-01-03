import React from 'react';
import { View, Text, Image } from 'react-native';
import {styles} from './styles';

export const About = (props) => {
  const {name, image, price, reviews, rating, categories} = props.route.params;
  const formattedCategories = categories.map((category) => category.title).join(' - ')
  const description = `${formattedCategories} ${price ? ' . ' + price : ' '} - ${rating} - ${reviews} (reviews)`;

  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantName name={name}/>
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{uri: props.image}} style={styles.restaurantImage} />
)
const RestaurantName = (props) => (
  <Text
    style={styles.restaurantNameText}
  >
    {props.name}
  </Text>
)

const RestaurantDescription = (props) => (
  <Text
    style={styles.restaurantDescription}
  >
    {props.description}
  </Text>
)