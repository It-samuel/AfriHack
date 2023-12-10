import { StyleSheet, Text, View,  ScrollView, StatusBar } from 'react-native'
import React from 'react'


export default function CreateCircle() {
  return (
    <ScrollView style={styles.container}>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight,
        
    }
})