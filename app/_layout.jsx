import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Root layout</Text>
    </View>
  )
}

export default RootLayout;

const styles = StyleSheet.create({ container: { justifyContent: 'center', alignItems: 'center' } });