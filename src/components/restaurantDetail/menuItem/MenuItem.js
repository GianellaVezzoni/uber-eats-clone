import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';

export const MenuItem = ({
  restaurantName, 
  foods, 
  hideCheckbox, 
  marginLeft
}) => {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => dispatch({
    type: 'ADD_TO_CART',
    payload: {
      item, 
      restaurantName: restaurantName, 
      checkboxValue: checkboxValue
    }
  })

  const cartItems = useSelector((state) => state.cartReducers.selectedItems.items);

  const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title === food.title))

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => {
        return (
          <View key={index}>
            <View style={styles.menuItem}>
              {!hideCheckbox && (
                <BouncyCheckbox 
                  iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
                  fillColor='green'
                  onPress={(checkboxValue)=> selectItem(food, checkboxValue)}
                  isChecked={isFoodInCart(food, cartItems)}
                />
              )}
              <FoodInfo food={food}/>
              <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
            </View>
            <Divider width={0.5} orientation='vertical' style={{marginHorizontal: 20}}/>
          </View>
        )
      })}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>${props.food.price}</Text>
  </View>
)

const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image source={{uri: props.food.image}} style={styles.foodImage} />
  </View>
)