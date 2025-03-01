import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
  Home: undefined
  FavouriteAnnounce: undefined
  Cart: undefined
  NewAnnounce: undefined
  AnnounceDetails: { announceId: string }
  EditAnnounce: { announceId: string }
}

export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>

export type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'AnnounceDetails'
>
