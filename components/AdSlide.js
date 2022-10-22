import { View, ScrollView, Image } from 'react-native'
import React from 'react'


const images = [
    'https://coffee.alexflipnote.dev/Xw6n-pdnnKs_coffee.jpg',
    'https://coffee.alexflipnote.dev/EaC_SDvujzs_coffee.jpg',
    'https://coffee.alexflipnote.dev/qP4vm9xcR04_coffee.jpg',
    'https://coffee.alexflipnote.dev/Egm5iagAZ7k_coffee.jpg',
    'https://coffee.alexflipnote.dev/kUV3MBzjCT8_coffee.jpg'
]


export const AdSlide = ({width,height}) => {
  return (
    <View style={{width: width,height,alignItems: 'center'}} top={10}>
        <ScrollView horizontal pagingEnabled style={{borderRadius: 15,width: width-35}}>
            {images.map((image,index) => (
                <Image source={{url: image}} key={index}
                    style={{width: width-35,height,resizeMode:'cover'}}
                />
            ))}
        </ScrollView>
    </View>
  )
}

export default AdSlide