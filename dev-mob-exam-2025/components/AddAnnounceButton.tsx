import React from 'react'
import { Pressable } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../models/Routing'
import { FontAwesome } from '@expo/vector-icons'

export const AddAnnounceButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('NewAnnounce')
      }}
    >
      <FontAwesome name='plus' size={24} color='black' />
    </Pressable>
  )
}
