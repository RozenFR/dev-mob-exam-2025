import React, { useEffect, useState } from 'react'
import { Avatar, ListItem } from '@react-native-material/core'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'
import { Announce } from '../models/Announce'
import { ScrollView, View, StyleSheet } from 'react-native'
import { getAllFavouriteAnnounces } from '../services/AnnounceFavouriteStoreService'

export const FavouriteAnnounceList: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [announces, setAnnounces] = useState<Announce[]>([])

  useEffect(() => {
    getAllFavouriteAnnounces().then(result => {
      setAnnounces(result.announces)
    })
  })

  return (
    <View style={styles.container}>
      <ScrollView>
        {announces.map(announce => (
          <ListItem
            key={announce.id}
            leadingMode={'avatar'}
            leading={<Avatar image={{ uri: announce.salerAvatar }} />}
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
    flex: 1,
    height: 90,
    justifyContent: 'center',
  },
  movie: {
    paddingVertical: 20,
    width: '100%',
    fontSize: 16,
  },
})
