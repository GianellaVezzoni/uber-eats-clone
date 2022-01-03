import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screens/Home';
import RestaurantDetail from './src/screens/RestaurantDetail';
import {Provider as ReduxProvider} from 'react-redux';
import ConfigureStore from './src/redux/store';
import { OrderCompleted } from './src/screens/OrderCompleted';

export default Navigation = () => {
  const Stack = createStackNavigator();
  const store = ConfigureStore();
  
const screenOptions = {
  headerShown: false
}

  return <ReduxProvider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name= 'Home' component={Home} />
        <Stack.Screen name= 'RestaurantDetail' component={RestaurantDetail} />
        <Stack.Screen name= 'OrderCompleted' component={OrderCompleted} />
      </Stack.Navigator>
    </NavigationContainer>
  </ReduxProvider>
}
