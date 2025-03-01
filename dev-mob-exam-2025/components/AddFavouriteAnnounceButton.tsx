import React, { useEffect, useState } from 'react'
import { Pressable } from '@react-native-material/core'
import { FontAwesome } from '@expo/vector-icons'
import { getAnnounce } from '../services/AnnounceStoreService'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'
import { Announce } from '../models/Announce'
import { saveUpdateFavouriteAnnounce } from '../services/AnnounceFavouriteStoreService'

type Props = {
  announceId: string
}

export const AddFavouriteAnnounceButton: React.FC<Props> = ({ announceId }) => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [announce, setAnnounce] = useState<Announce | null>(null)

  useEffect(() => {
    getAnnounce(announceId).then(res => (res ? setAnnounce(res) : null))
  })

  const addFavouriteAnnounceHandler = async () => {
    await saveUpdateFavouriteAnnounce(announce!)
    if (navigation.canGoBack()) navigation.goBack()
  }

  return (
    <Pressable onPress={addFavouriteAnnounceHandler}>
      <FontAwesome name='heart-o' size={24} color='red' />
    </Pressable>
  )
}
