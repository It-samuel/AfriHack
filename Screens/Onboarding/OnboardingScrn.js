import { StyleSheet, Text, View,StatusBar, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper'
import React, {useRef} from 'react'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors } from '../colors';

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
            swiperRef.current.scrollBy(1, false);}
         else {
            // If on the last screen, navigate to the login screen
            navigation.navigate('Login');
          }
        }
      };

    const handleSkip = () => {
        // Navigate to the login screen
        navigation.navigate('Login');
      };
      
      const handleGetStarted = () => {
        // Handle the action for the "Get Started" button on the last screen
        // For example, you might want to navigate to a different screen
        navigation.navigate('GetStarted');
      };

    const screens= [
        <View key={1}><Screen1  />
        </View>,
        <View key={2}><Screen2 /></View>,
        <View key={3}><Screen3 /></View>,
    ]

  return (
    <View style={{ flex: 1 }}>
    <Swiper ref={swiperRef} loop={false}>
      {screens}
    </Swiper>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
      {swiperRef.current && swiperRef.current.state.index < 3 ? (
        <>
          <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Next </Text>
          </TouchableOpacity>
        </>
      ) : 
      ('')
      }
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight,
    },
    skipBtn:{
        backgroundColor:colors.primColor,
        width:125,
        height:45,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    nextBtn:{
        backgroundColor:colors.primColor,
        width:125,
        height:45,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    getStartedBtn:{
        backgroundColor:colors.primColor,
        width:225,
        height:45,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    }
    
})