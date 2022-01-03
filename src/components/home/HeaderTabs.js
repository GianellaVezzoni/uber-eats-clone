import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={{
      flexDirection: 'row',
      alignSelf: 'center'
    }}>
      <HeaderButtons 
        text='Delivery' 
        btnColor='#000' 
        textColor='#FFF' 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
      <HeaderButtons
        text='Pickup' 
        btnColor='#FFF' 
        textColor='#000' 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
    </View>
  )
}

const HeaderButtons = (props) => (
  <TouchableOpacity style={{
    backgroundColor: props.activeTab === props.text ? '#000' : '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 30
  }}
    onPress={()=> props.setActiveTab(props.text)}
  >
    <Text style={{
      color:props.activeTab === props.text ? '#FFF' : '#000', 
      fontSize: 15, 
      fontWeight: '900'
    }}>
      {props.text}
    </Text>
  </TouchableOpacity>
)