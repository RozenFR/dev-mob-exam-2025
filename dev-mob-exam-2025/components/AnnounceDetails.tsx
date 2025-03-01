import React from 'react'
import { Announce } from '../models/Announce'
import { Box, ListItem, VStack, Text } from '@react-native-material/core'
import { ScrollView, View } from 'react-native'

type Props = {
  announce: Announce
}

export const AnnounceDetails: React.FC<Props> = ({ announce }) => {
  const renderAnnounceDetails = () => {
    return announce ? (
      <VStack m={20} spacing={5}>
        <Box>
          <Text variant='h5'>{announce.model}</Text>
        </Box>
        <ListItem
          title={'Saler Name'}
          secondaryText={announce.saler}
        ></ListItem>
        <ListItem
          title={'Price'}
          secondaryText={announce.price + ' €'}
        ></ListItem>
        <ListItem
          title={'Description'}
          secondaryText={announce.description}
        ></ListItem>
        <ListItem
          title={'Release Date'}
          secondaryText={announce.releaseDate}
        ></ListItem>
        <ListItem
          title={'Saler Gender'}
          secondaryText={announce.salerGender}
        ></ListItem>
        <ListItem
          title={'Saler Country'}
          secondaryText={announce.salerCountry}
        ></ListItem>
        <ListItem
          title={'Saler City'}
          secondaryText={announce.salerCity}
        ></ListItem>
        <ListItem title={'OS'} secondaryText={announce.os}></ListItem>
      </VStack>
    ) : (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return <ScrollView>{renderAnnounceDetails()}</ScrollView>
}
