import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItem = ({navigation, ...props}) => {
  return (
    <>
      {props.restaurants.map((restaurant, index)=> (
        <TouchableOpacity key={index} activeOpacity={1} style={{marginBottom: 30}} 
          onPress={()=> navigation.navigate('RestaurantDetail', {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews:restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories
          })}
        > 
          <View style={{marginTop: 10, padding: 15, backgroundColor: '#FFF'}}>
            <RestaurantImage image={restaurant.image_url}/>
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}

const RestaurantImage = (props) => {
  return(
    <>
      <Image 
        style={{
          width: '100%', 
          height: 200
        }}
        source={{
          uri: props.image
        }}
      />
      <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#FFF' />
      </TouchableOpacity>
    </>
  )
}

const RestaurantInfo = (props) => (
  <View 
    style={{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#FFF'
    }}>
    <View>
      <Text 
        style={{
          fontSize: 15,
          fontWeight: '600'
        }}
      >
        {props.name}
      </Text>
      <Text 
        style={{
          fontSize: 13,
          color: '#000'
        }}
      >
        30-45 min
      </Text>
    </View>
    <View
      style={{
        backgroundColor: '#EEE', 
        height: 30, 
        width: 30, 
        alignItems: 'center',
        borderRadius: 15,
        justifyContent:'center'
      }}
      >
      <Text>
        {props.rating}
      </Text>
    </View>
  </View>
);

export default RestaurantItem;