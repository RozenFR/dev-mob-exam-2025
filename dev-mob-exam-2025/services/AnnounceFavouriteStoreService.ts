import AsyncStorage from '@react-native-async-storage/async-storage'
import { Announce, AnnounceStore } from '../models/Announce'
import { ANNOUNCE_Favourite_STORE_KEY } from '../models/AnnounceFavourite'

export const getAllFavouriteAnnounces = async () => {
  const announcesStoreItem = await AsyncStorage.getItem(
    ANNOUNCE_Favourite_STORE_KEY,
  )
  if (announcesStoreItem) {
    return JSON.parse(announcesStoreItem) as AnnounceStore
  }
  return { announces: [] }
}

export const getFavouriteAnnounce = async (id: string) => {
  const announcesStore = await getAllFavouriteAnnounces()
  return announcesStore.announces.find(announce => announce.id === id)
}

export const saveUpdateFavouriteAnnounce = async (announce: Announce) => {
  const announcesStore = await getAllFavouriteAnnounces()
  if (announce.id) {
    const announceIndex = announcesStore.announces.findIndex(
      a => a.id === announce.id
    )
    announcesStore.announces.splice(announceIndex, 1, announce)
  } else {
    announcesStore.announces.push(announce)
  }
  await AsyncStorage.setItem(
    ANNOUNCE_Favourite_STORE_KEY,
    JSON.stringify(announcesStore),
  )
}

export const deleteFavouriteAnnounce = async (id: string) => {
  const announcesStore = await getAllFavouriteAnnounces()
  const announceIndex = announcesStore.announces.findIndex(
    announce => announce.id === id,
  )
  announcesStore.announces.splice(announceIndex, 1)
  await AsyncStorage.setItem(
    ANNOUNCE_Favourite_STORE_KEY,
    JSON.stringify(announcesStore),
  )
}
