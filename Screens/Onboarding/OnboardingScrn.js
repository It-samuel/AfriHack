import { StyleSheet, Text, View,StatusBar, } from 'react-native'
import Swiper from 'react-native-swiper'
import React, {useRef} from 'react'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'

export default function OnboardingScrn() {

    const swiperRef = useRef(null);
    const navigation = useNavigation()
    
    const handleNext = () => {
        // If not on the last screen, go to the next screen
        if (swiperRef.current && swiperRef.current.state.index < screens.length - 1) {
          swiperRef.current.scrollBy(1, true);
        } else {
          // If on the second-to-last screen, go to the last screen with a different button
          if (swiperRef.current && swiperRef.current.state.index === screens.length - 2) {
            swiperRef.current.scrollBy(1, true);
          } else {
            // If on the last screen, navigate to the login screen
            navigation.navigate('Login');
          }
        }
      };
    const screens= [
        <View key={1}><Screen1 /></View>,
        <View key={2}><Screen2 /></View>,
        <View key={3}><Screen3 /></View>,
    ]

  return (
    <View>
      <Text>OnboardingScrn</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight,
    },
})