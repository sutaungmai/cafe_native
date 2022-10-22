import { View, Text, TouchableOpacity,Image, FlatList } from 'react-native'
import React from 'react'

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

const CoffeeCard = () => {
  return (
    <FlatList data={cardData}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{width: '100%',}}
    />
  )
}

export default CoffeeCard