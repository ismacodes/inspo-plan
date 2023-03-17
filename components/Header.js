import { StyleSheet, View, Dimensions } from 'react-native'
import { Text } from '@ui-kitten/components'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText} category='h4'>InspoPlan</Text>
    </View>
  )
}

const { height, width } = Dimensions.get('window');

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: "center", 
        alignItems: "center",
    },
    headerText: {
        fontSize: height * .028,
    }
})