import React from 'react'
import { Snackbar } from '@react-native-material/core'
import { StyleSheet } from 'react-native'

type Props = {
  totalPrice: number
}

export const CartPrice: React.FC<Props> = ({ totalPrice }) => {
  return (
    <Snackbar
      message={'Total Price : ' + totalPrice.toString() + ' €'}
      style={styles.snackbar}
    ></Snackbar>
  )
}

const styles = StyleSheet.create({
  snackbar: {
    bottom: 0,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
})
