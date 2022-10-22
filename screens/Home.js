import { SafeAreaView, Dimensions, View,Image, FlatList,Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AdSlide from '../components/AdSlide'

import { COLORS, SIZES } from '../constants'

const { width } = Dimensions.get('window')
const height = width / 2 -20


const images = [
  'https://coffee.alexflipnote.dev/Xw6n-pdnnKs_coffee.jpg',
  'https://coffee.alexflipnote.dev/EaC_SDvujzs_coffee.jpg',
  'https://coffee.alexflipnote.dev/qP4vm9xcR04_coffee.jpg',
  'https://coffee.alexflipnote.dev/Egm5iagAZ7k_coffee.jpg',
  'https://coffee.alexflipnote.dev/kUV3MBzjCT8_coffee.jpg'
]

const cardData = [
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 2000,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 2000,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 1500,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 3500,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 4000,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 1200,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 2100,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 3000,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 2500,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 1100,
  },
  {
      image_url: '../assets/images/menu_coffee.jpg',
      name: 'Expresso',
      price: 1700,
  },
]

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>

        <StatusBar backgroundColor='#000' />
        <AdSlide width={width} height={height} />
        
        <View 
        style={{
          // backgroundColor: '#1A5108',
          width: "100%",
          height: 460,
          flexDirection: 'column',
          marginTop: 20
        }}>
           <FlatList
           data={cardData}
           showsVerticalScrollIndicator={false}
           renderItem={({item,index}) => {
            return(
              <TouchableOpacity style={{height: 150,width: '90%',marginHorizontal: 15,}} activeOpacity={.9} key={index}>
                <View style={{width: '100%',backgroundColor: '#017169',height: 140,flexDirection: 'row',margin: 5,marginTop:10,borderRadius:10,}}>
                  <Image source={require('../assets/images/menu_coffee.jpg')} style={{width:100,height: 100,borderRadius: 10,marginTop: 20,marginLeft: 20}} />
                  <View style={{marginTop: 17,height: 70, justifyContent: 'center',marginLeft: 15,marginTop: 30}}>
                    <Text style={{color: '#fff',fontWeight: '600',fontSize: SIZES.extraLarge *1.5}}>{item.name}</Text>
                    <Text style={{color: '#fff',marginTop: 10}}>{item.price}Ks /<Text style={{fontSize: 8,}}> 1 pac</Text></Text>
                    <Text style={{color: '#fff',marginTop: 20}}>Hot, Sweet, Special</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
           }}
            />
        </View>

    </SafeAreaView>
  )
}

export default Home