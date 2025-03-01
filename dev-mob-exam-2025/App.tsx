import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './models/Routing'
import { HomeScreen } from './screens/HomeScreen'
import React from 'react'
import { AnnounceDetailsScreen } from './screens/AnnounceDetailsScreen'
import { FavouriteAnnounceListButton } from './components/FavouriteAnnounceListButton'
import { FavouriteAnnounceScreen } from './screens/FavouriteAnnounceScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  const renderNewAnnounceButton = () => {
    return <FavouriteAnnounceListButton />
  }

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            headerLeft: () => renderNewAnnounceButton(),
          }}
        />
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
