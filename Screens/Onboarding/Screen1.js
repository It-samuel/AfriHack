import { StyleSheet, Text, View, SafeAreaView,StatusBar,
Image,
} from 'react-native'
import React from 'react'

export default function Screen1({text}) {
  return (
    <SafeAreaView style={styles.container}>
        <View >
        <Image 
            source={require('../Images/pics1.jpg')}  
            style = {{ height: 250, width: 395, resizeMode: 'cover' , marginTop:50 }}
        />
        <View style={styles.text1}>
        <Text style={{alignSelf:'center', fontSize:25,fontWeight:'bold', marginTop:10}}>Community </Text>
        <Text style={{fontSize:25,fontWeight:'bold'}}>Powered Savings </Text>
        
        </View>
        <View style={styles.text2}>
          <Text style={{textAlign:'center', fontSize:15,fontWeight:'400'}}>Save together to meet up to goals and improve ones quality of living one circle at a time. 
            Share your responsibility securely.</Text>
        </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        
        marginTop:StatusBar.currentHeight,
    },
    text1:{alignSelf:'center',
    justifyContent:'center',
    overflow:'visible',
    
    
  },
    text2:{
      marginHorizontal:15,
      alignItems:'center',
      marginTop:35,
      overflow:'visible',
      
    }
})