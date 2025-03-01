import { Pressable } from '@react-native-material/core'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'

export const FavouriteAnnounceListButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('FavouriteAnnounce')
      }}
    >
      <FontAwesome name='bookmark' size={24} color='black' />
    </Pressable>
  )
}
