import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Divider } from 'react-native-elements';

export const OrderCompleted = ({route, navigation}) => {
  const items = route.params.items;

  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: '#FFF'
    }}>
      <View
        style={{
          margin: 15,
          alignItems: 'center',
          height: '100%'
        }}
      >
        <LottieView 
          style={{
            height: 100,
            alignSelf: 'center',
            marginBottom: 30
          }}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold'
          }}
        >
          Your order at {route.params.restaurantName} has been placed for {route.params.totalPrice}
        </Text>
        <ScrollView
          style={{
            marginTop: '10%',
            width: '100%'
          }}
        >
          {items?.map((item, index)=>(
            <View
              key={index}
            >
              <View
                style={{
                  padding: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Text style={{color: '#000', fontSize: 20}}>
                  {item.item.title}
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent:'center',
                    alignSelf: 'center'
                  }}
                >
                  ${item.item.price}
                </Text>
              </View>
              <Divider />
            </View>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          We will notify you when your order is ready
        </Text>
        <LottieView 
          style={{
            height: 100,
            alignSelf: 'center',
            marginBottom: 30
          }}
          source={require('../assets/animations/cooking.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
      </View>
    </SafeAreaView>
  )
}
