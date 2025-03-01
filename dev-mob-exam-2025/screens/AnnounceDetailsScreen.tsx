import React, { useEffect, useState } from 'react'
import { AnnounceDetails } from '../components/AnnounceDetails'
import {
  MovieDetailsScreenRouteProp,
  ScreenNavigationProp,
} from '../models/Routing'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Announce } from '../models/Announce'
import { getAnnounce } from '../services/AnnounceStoreService'
import { getFavouriteAnnounce } from '../services/AnnounceFavouriteStoreService'
import { DeleteFavouriteAnnounceButton } from '../components/DeleteFavouriteAnnounceButton'
import { AddFavouriteAnnounceButton } from '../components/AddFavouriteAnnounceButton'

export const AnnounceDetailsScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const route = useRoute<MovieDetailsScreenRouteProp>()
  const announceId = route.params.announceId
  const [announce, setAnnounce] = useState<Announce | null>(null)
  const [favouriteAnnounce, setFavouriteAnnounce] = useState<
    Announce | undefined
  >(undefined)

  const renderFavouriteButton = () => {
    return favouriteAnnounce ? (
      <DeleteFavouriteAnnounceButton announceId={announceId} />
    ) : (
      <AddFavouriteAnnounceButton announceId={announceId} />
    )
  }

  useEffect(() => {
    getAnnounce(announceId).then(movie => (movie ? setAnnounce(movie) : null))
    getFavouriteAnnounce(announceId).then(announce =>
      announce
        ? setFavouriteAnnounce(announce)
        : setFavouriteAnnounce(undefined),
    )
    navigation.setOptions({
      headerRight: () => renderFavouriteButton(),
    })
  })

  return announce ? <AnnounceDetails announce={announce} /> : <></>
}
