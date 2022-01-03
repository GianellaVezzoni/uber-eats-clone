import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, View} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { BottomTabs } from '../components/home/BottomTabs'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItem from '../components/home/RestaurantItem'
import Searchbar from '../components/home/Searchbar';

const Home = ({navigation}) => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  
  const VELP_API_KEY = 'wnhVtMpKn7jsAl3Hap9VwMBi1saVt6x03WwxYx9P5eka0EXac1j7bH49i8h0QauKngsUaeqJUVgx0xUwWPJxJ14B98M_1f9kknDWu37v_XmZAOBsKTAlCSOANfDMYXYx';

  const getAllRestaurantsFromYelp = async () => {
    const url = 'https://api.yelp.com/v3/businesses/search?term=restaurant&location=SanDiego';
    
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${VELP_API_KEY}`,
      },
    }
    const res = await fetch(url, apiOptions)
    const json = await res.json()
    return setRestaurantsData(json.businesses)
  }

  useEffect(() => {
    getAllRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#EEE', flex: 1}}>
      <View style={{backgroundColor: '#FFF', padding: 15}}>
        <HeaderTabs />
        <Searchbar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurants={restaurantsData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}

export default Home;