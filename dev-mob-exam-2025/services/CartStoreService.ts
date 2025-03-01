import AsyncStorage from '@react-native-async-storage/async-storage'
import { Announce, AnnounceStore } from '../models/Announce'
import { CART_STORE_KEY } from '../models/Cart'

export const getAllCartAnnounces = async () => {
  const cartStoreItem = await AsyncStorage.getItem(CART_STORE_KEY)
  if (cartStoreItem) {
    return JSON.parse(cartStoreItem) as AnnounceStore
  }
  return { announces: [] }
}

export const saveUpdateCartAnnounce = async (announce: Announce) => {
  const cartStore = await getAllCartAnnounces()
  if (announce.id) {
    const announceIndex = cartStore.announces.findIndex(
      a => a.id === announce.id,
    )
    cartStore.announces.splice(announceIndex, 1, announce)
  } else {
    cartStore.announces.push(announce)
  }
  await AsyncStorage.setItem(CART_STORE_KEY, JSON.stringify(cartStore))
}

export const deleteCartAnnounce = async (id: string) => {
  const cartStore = await getAllCartAnnounces()
  const announceIndex = cartStore.announces.findIndex(
    announce => announce.id === id,
  )
  cartStore.announces.splice(announceIndex, 1)
  await AsyncStorage.setItem(CART_STORE_KEY, JSON.stringify(cartStore))
}
