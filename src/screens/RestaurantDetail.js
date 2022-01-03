import React from 'react'
import { ScrollView, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { About } from '../components/restaurantDetail/about/About';
import { ViewCart } from '../components/restaurantDetail/viewCart/ViewCart';
import {MenuItem} from '../components/restaurantDetail/menuItem/MenuItem';

const foods = [
  {
    title: 'Pasta',
    description: "Made with all the italian feeling",
    price: "900.00",
    image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
  },
  {
    title: 'Asado',
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "2130.00",
    image: "https://www.wallpaperup.com/uploads/wallpapers/2015/06/14/722641/f006f5e939402192938706820e6bff64-700.jpg"
  },
  {
    title: 'Burger',
    description: "Better than Mc Donald's food",
    price: "700.00",
    image: "https://i.pinimg.com/originals/de/7e/de/de7ede8ab5c498d7bc833f2f8e41372b.jpg"
  },
  {
    title: 'Sushi',
    description: "Roll sushi, Roll Buenos aires, Roll Brazilian, and more..",
    price: "1900.00",
    image: "https://images6.alphacoders.com/405/thumb-1920-405692.jpg"
  },
  {
    title: 'Soup',
    description: "Only for brave people who love eat hot food in hot days",
    price: "500.00",
    image: "https://wallpapercave.com/wp/wp2524649.jpg"
  },
  {
    title: 'Milanesas',
    description: "Neither your mom can cook better milanesas than ours",
    price: "1100.00",
    image: "https://www.argentinaenelmundo.com/wp-content/uploads/D%C3%ADa-de-la-milanesa-737x415.jpg"
  },
  {
    title: 'Sushi',
    description: "Roll sushi, Roll Buenos aires, Roll Brazilian, and more..",
    price: "1900.00",
    image: "https://images6.alphacoders.com/405/thumb-1920-405692.jpg"
  },
]

const RestaurantDetail = ({route, navigation}) => {
  return (
    <View>
      <ScrollView>
        <About route={route}/>
        <Divider width={2.0} style={{marginVertical: 20}} />
        <MenuItem restaurantName={route.params.name} foods={foods}/>
      </ScrollView>
      <ViewCart navigation={navigation} restaurantName={route.params.name}/>
    </View>
  )
}

export default RestaurantDetail;