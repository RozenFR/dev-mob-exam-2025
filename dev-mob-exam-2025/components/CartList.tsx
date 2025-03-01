import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../models/Routing'
import { Announce } from '../models/Announce'
import { Avatar, ListItem, VStack } from '@react-native-material/core'
import { getAllCartAnnounces } from '../services/CartStoreService'
import { DeleteCartAnnounceButton } from './DeleteCartAnnounceButton'
import { CartPrice } from './CartPrice'

export const CartList = () => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [announces, setAnnounces] = useState<Announce[]>([])
  const [cartPrice, setCartPrice] = useState<number>(0)

  useEffect(() => {
    getAllCartAnnounces().then(result => {
      setAnnounces(result.announces)
      if (cartPrice === 0)
        result.announces.forEach(a => setCartPrice(cartPrice + a.price))
    })
  })

  return (
    <View style={styles.container}>
      <VStack>
        <ScrollView>
          {announces.map(announce => (
            <ListItem
              key={announce.id}
              leadingMode={'avatar'}
              leading={<Avatar image={{ uri: announce.salerAvatar }} />}
              trailing={<DeleteCartAnnounceButton announceId={announce.id} />}
              title={announce.model + ' - ' + announce.price + '€'}
              secondaryText={announce.description}
              style={styles.row}
              onPress={() =>
                announce.id
                  ? navigation.navigate('AnnounceDetails', {
                      announceId: announce.id,
                    })
                  : null
              }
            ></ListItem>
          ))}
        </ScrollView>
      </VStack>
      <CartPrice totalPrice={cartPrice} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  row: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    alignSelf: 'center',
    flex: 3,
    height: 90,
    justifyContent: 'center',
  },
  movie: {
    paddingVertical: 20,
    width: '100%',
    fontSize: 16,
  },
})
