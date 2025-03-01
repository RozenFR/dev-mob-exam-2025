import { Pressable } from '@react-native-material/core'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'

export const CartListButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Cart')
      }}
    >
      <FontAwesome name='shopping-cart' size={24} color='black' />
    </Pressable>
  )
}
