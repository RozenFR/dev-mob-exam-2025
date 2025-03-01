import React, { useEffect, useState } from 'react'
import { Avatar, ListItem, TextInput, Text } from '@react-native-material/core'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'
import { Announce } from '../models/Announce'
import { getAllAnnounces } from '../services/AnnounceStoreService'
import { ScrollView, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export const AnnounceList: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [announces, setAnnounces] = useState<Announce[]>([])

  const renderSearchIcon = () => {
    return <FontAwesome name='search' size={24} color='black' />
  }

  const renderSearchInput = () => {
    return (
      <TextInput
        label='Search'
        placeholder='Search'
        leading={() => renderSearchIcon()}
        onChangeText={text => {
          setAnnounces(
            announces.filter(announce =>
              announce.model.toLowerCase().includes(text.toLowerCase()),
            ),
          )
        }}
      ></TextInput>
    )
  }

  const renderCountAnnounces = () => {
    return <Text variant='h5'>{announces.length} results</Text>
  }

  useEffect(() => {
    getAllAnnounces().then(result => {
      setAnnounces(result.announces)
    })
  })

  return (
    <View style={styles.container}>
      {renderSearchInput()}
      {renderCountAnnounces()}
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
