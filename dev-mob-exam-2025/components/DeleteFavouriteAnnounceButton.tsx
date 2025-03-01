import React from 'react'
import { Pressable } from '@react-native-material/core'
import { FontAwesome } from '@expo/vector-icons'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'
import { deleteFavouriteAnnounce } from '../services/AnnounceFavouriteStoreService'

type Props = {
  announceId: string
}

export const DeleteFavouriteAnnounceButton: React.FC<Props> = ({
  announceId,
}) => {
  const navigation = useNavigation<ScreenNavigationProp>()

  const removeFavouriteMovieHandler = async () => {
    await deleteFavouriteAnnounce(announceId)
    if (navigation.canGoBack()) navigation.goBack()
  }

  return (
    <Pressable onPress={removeFavouriteMovieHandler}>
      <FontAwesome name='heart' size={24} color='red' />
    </Pressable>
  )
}
