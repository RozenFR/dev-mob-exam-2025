import AsyncStorage from '@react-native-async-storage/async-storage'
import { Announce, ANNOUNCE_STORE_KEY, AnnounceStore } from '../models/Announce'

export const initAnnounces = async () => {
  const announces: Announce[] = []

  const f1 = require('../assets/phone.json')

  const responses = [...f1]
  responses.forEach(response => {
    announces.push({
      id: response.id,
      model: response.model,
      os: response.os,
      releaseDate: response.releaseDate,
      salerAvatar: response.salerAvatar,
      saler: response.saler,
      description: response.description,
      salerGender: response.salerGender,
      salerCity: response.salerCity,
      salerCountry: response.salerCountry,
      phone: response.phone,
      price: response.price,
    })
  })
  await AsyncStorage.setItem(ANNOUNCE_STORE_KEY, JSON.stringify({ announces }))
  return announces
}

export const getAllAnnounces = async () => {
  const announcesStoreItem = await AsyncStorage.getItem(ANNOUNCE_STORE_KEY)
  if (announcesStoreItem) {
    return JSON.parse(announcesStoreItem) as AnnounceStore
  } else {
    return { announces: await initAnnounces() }
  }
}

export const getAnnounce = async (id: string) => {
  const announcesStore = await getAllAnnounces()
  return announcesStore.announces.find(announce => announce.id === id)
}

export const getAllAnnouncesById = async (announceIds: string[]) => {
  const announces = await getAllAnnounces()
  const result: Announce[] = []
  announceIds.forEach(id => {
    const announce = announces.announces.find(announce => announce.id === id)
    if (announce) {
      result.push(announce)
    }
  })
  return { movies: result }
}

export const saveUpdateAnnounce = async (announce: Announce) => {
  const announcesStore = await getAllAnnounces()
  if (announce.id) {
    const announceIndex = announcesStore.announces.findIndex(
      a => a.id === announce.id,
    )
    announcesStore.announces.splice(announceIndex, 1, announce)
  } else {
    announcesStore.announces.push(announce)
  }
  await AsyncStorage.setItem(ANNOUNCE_STORE_KEY, JSON.stringify(announcesStore))
}

export const deleteAnnounce = async (id: string) => {
  const announcesStore = await getAllAnnounces()
  const announceIndex = announcesStore.announces.findIndex(
    announce => announce.id === id,
  )
  announcesStore.announces.splice(announceIndex, 1)
  await AsyncStorage.setItem(ANNOUNCE_STORE_KEY, JSON.stringify(announcesStore))
}
