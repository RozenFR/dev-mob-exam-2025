import React from 'react'
import { Pressable } from '@react-native-material/core'
import { FontAwesome } from '@expo/vector-icons'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'
import { deleteCartAnnounce } from '../services/CartStoreService'

type Props = {
  announceId: string
}

export const DeleteCartAnnounceButton: React.FC<Props> = ({ announceId }) => {
  const navigation = useNavigation<ScreenNavigationProp>()

  const removeFavouriteMovieHandler = async () => {
    await deleteCartAnnounce(announceId)
    if (navigation.canGoBack()) navigation.goBack()
  }

  return (
    <Pressable onPress={removeFavouriteMovieHandler}>
      <FontAwesome name='trash' size={24} color='red' />
    </Pressable>
  )
}
