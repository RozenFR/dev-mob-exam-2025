export type Announce = {
  id: string
  model: string
  os: string
  releaseDate: string
  salerAvatar: string
  saler: string
  description: string
  salerGender: string
  salerCity: string
  salerCountry: string
  phone: string
  price: number
}

export type AnnounceStore = {
  announces: Announce[]
}

export const ANNOUNCE_STORE_KEY = 'ANNOUNCE_STORE'
