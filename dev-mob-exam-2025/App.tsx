import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './models/Routing'
import { HomeScreen } from './screens/HomeScreen'
import React from 'react'
import { AnnounceDetailsScreen } from './screens/AnnounceDetailsScreen'
import { FavouriteAnnounceListButton } from './components/FavouriteAnnounceListButton'
import { FavouriteAnnounceScreen } from './screens/FavouriteAnnounceScreen'
import { CartListButton } from './components/CartListButton'
import { CartScreen } from './screens/CartScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  const renderFavouriteButton = () => {
    return <FavouriteAnnounceListButton />
  }

  const renderCartButton = () => {
    return <CartListButton />
  }

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            headerLeft: () => renderFavouriteButton(),
            headerRight: () => renderCartButton(),
          }}
        />
        <Stack.Screen name={'Cart'} component={CartScreen} />
        <Stack.Screen
          name={'FavouriteAnnounce'}
          component={FavouriteAnnounceScreen}
        />
        <Stack.Screen
          name={'AnnounceDetails'}
          component={AnnounceDetailsScreen}
        />
        <Stack.Screen name={'NewAnnounce'} component={AnnounceDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
