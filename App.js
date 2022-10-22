import { StyleSheet, SafeAreaView,Image, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { SHADOWS, SIZES,tabs } from './constants';

import Home from './screens/Home';
import Cart from './screens/Cart';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';

const Tabs = createBottomTabNavigator();


const App = () => {
  return (
      
      <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home"
          screenOptions={{tabBarShowLabel: false,
          tabBarStyle:{
            // position: 'absolute',
            backgroundColor: '#017169', 
            // height: 80,
          }}}>
          <Tabs.Screen name="Home" component={Home} options={{tabBarIcon: ({focused}) => (
            <View style={{justifyContent:'center',alignItems: 'center',top: 10}}>
              <Image source={require('./assets/images/home.png')} style={{width:25,height:25,tintColor: focused? '#fff' : '#000'}} />
              <Text style={{fontSize: SIZES.font-2,fontWeight: '500', color: focused? '#fff': '#000'}}>Home</Text>
            </View>
          )}} />
          <Tabs.Screen name="Cart" component={Cart} options={{tabBarIcon: ({focused}) => (
            <View style={{justifyContent:'center',alignItems: 'center',top: 10}}>
              <Image source={require('./assets/images/cart.png')} style={{width:25,height:25,tintColor: focused? '#fff' : '#000'}} />
              <Text style={{fontSize: SIZES.font-2,fontWeight: '500', color: focused? '#fff': '#000'}}>Cart</Text>
            </View>
          )}} />
          <Tabs.Screen name="Wallet" component={Wallet} options={{tabBarIcon: ({focused}) => (
            <View style={{justifyContent:'center',alignItems: 'center',top: 10}}>
              <Image source={require('./assets/images/wallet.png')} style={{width:25,height:25,tintColor: focused? '#fff' : '#000'}} />
              <Text style={{fontSize: SIZES.font-2,fontWeight: '500', color: focused? '#fff': '#000'}}>Wallet</Text>
            </View>
          )}} />
          <Tabs.Screen name="Profile" component={Profile} options={{tabBarIcon: ({focused}) => (
            <View style={{justifyContent:'center',alignItems: 'center',top: 10}}>
              <Image source={require('./assets/images/profile.png')} style={{width:25,height:25,}} />
              <Text style={{fontSize: SIZES.font-2,fontWeight: '500', color: focused? '#fff': '#000'}}>profile</Text>
            </View>
          )}} />
        </Tabs.Navigator>
      </NavigationContainer>

  );
}

export default App;
