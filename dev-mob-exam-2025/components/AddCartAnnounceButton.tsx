import React, { useEffect, useState } from 'react'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'
import { Announce } from '../models/Announce'
import { getAnnounce } from '../services/AnnounceStoreService'
import { saveUpdateCartAnnounce } from '../services/CartStoreService'
import { Pressable, Text } from '@react-native-material/core'
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

type Props = {
  announceId: string
}

export const AddCartAnnounceButton: React.FC<Props> = ({ announceId }) => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [announce, setAnnounce] = useState<Announce | undefined>(undefined)

  useEffect(() => {
    getAnnounce(announceId).then(res => (res ? setAnnounce(res) : undefined))
  })

  const addCartAnnounceHandler = async () => {
    await saveUpdateCartAnnounce(announce!)
    if (navigation.canGoBack()) navigation.goBack()
  }

  return (
    <Pressable onPress={addCartAnnounceHandler} style={styles.button}>
      <FontAwesome name='cart-plus' size={24} color='white' />
      <Text style={styles.text} variant={'h5'}>
        Buy
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
})
