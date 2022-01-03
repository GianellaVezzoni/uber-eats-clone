import React, {useState} from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { Order } from '../order/Order';
import LottieView from 'lottie-react-native';
import { styles } from './styles';

export const ViewCart = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const {items, restaurantName} = useSelector((state) => state.cartReducers.selectedItems);
  const total = items.map((item)=> Number(item.item.price))
    .reduce((prev, curr) => prev + curr, 0)
  const totalPrice = total.toLocaleString("en", {
    style: "currency",
    currency: "USD"
  })

  const goToOrderCompleted = () => {
    setIsModalVisible(false);
    setLoading(true);
    navigation.navigate('OrderCompleted',{
      items: items,
      restaurantName: restaurantName,
      totalPrice: totalPrice
    })
    setLoading(false);
  };

  const modalCheckoutOrder = () => {
    return(
      <View stlye={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantNameText}>
            {restaurantName}
          </Text>
          {items.map((item, index)=> (
            <Order key={index} item={item.item}/>
          ))}
          <View style={styles.subTotalContainer}>
            <Text style={styles.subtotalText}>
              Subtotal
            </Text>
            <Text>
              {totalPrice}
            </Text>
          </View>
          <View style={styles.checkoutButtonView}>
            <TouchableOpacity 
              style={styles.touchableOpacityCheckout}
              onPress={()=> goToOrderCompleted()}
            >
              <Text style={styles.checkoutTextButton}>
                Checkout
              </Text>
              <Text
                style={styles.priceCheckoutButton}
              >{total ? totalPrice : "" }</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <>
      {isModalVisible ? (
        <Modal 
          animationType='slide' 
          visible={isModalVisible}
          transparent={true}
          onRequestClose={()=> setIsModalVisible(false)}
        >
          {modalCheckoutOrder()}
        </Modal>
      ):(<></>)}
      {total > 0 && (
        <View 
          style={styles.viewMainContainerViewCart}
        >
          <View 
            style={styles.viewSubContainerViewCart}
          >
            <TouchableOpacity 
              style={styles.touchableButtonOpacityViewCart}
              onPress={()=> setIsModalVisible(true)}
            >
              <Text 
                style={{
                  color:'#FFF',
                  fontSize: 20
                }}
              >
                VIEW CART {totalPrice}
              </Text>
            </TouchableOpacity>
          </View>
        </View>  
      )}
      {loading && (
        <View 
          style={styles.viewLottieContainer}
        >
          <LottieView 
            style={{
              height: 200,
            }}
            source={require('../../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      )}
    </>
  )
}
