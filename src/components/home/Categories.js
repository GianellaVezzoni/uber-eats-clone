import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    title: 'Pick-up'
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    title: 'Soft Drinks'
  },
  {
    image: require("../../assets/images/bread.png"),
    title: 'Bakery Items'
  },
  {
    image: require("../../assets/images/deals.png"),
    title: 'Deals'
  },
  {
    image: require("../../assets/images/coffee.png"),
    title: 'Coffe & Tea'
  },
  {
    image: require("../../assets/images/desserts.png"),
    title: 'Desserts'
  }
]

export default Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingLeft: 20
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index)=>{
          return(
            <View 
              style={{
                alignItems: 'center',
                marginRight: 30
              }}
              key={index}
            >
              <Image source={item.image} 
                style={{
                  width: 50, 
                  height: 40, 
                  resizeMode: 
                  'contain'}}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "900"
                }}
              >
                {item.title}
              </Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
