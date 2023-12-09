import { StyleSheet, Text, View, SafeAreaView,StatusBar,
  Image,
  } from 'react-native'
  import React from 'react'
  
  export default function Screen2() {
    return (
      <SafeAreaView style={styles.container}>
          <View >
          <Image 
              source={require('../Images/pics3.png')}  
              style = {{ height: 250, width: 395, resizeMode: 'cover' , marginTop:50 }}
          />
          <View style={styles.text1}>
          <Text style={{alignSelf:'center', fontSize:25,fontWeight:'bold', marginTop:10}}>Empower Your </Text>
          <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>Finances </Text>
          
          </View>
          <View style={styles.text2}>
            <Text style={{textAlign:'center', fontSize:15,fontWeight:'400'}}>Learn more on how to improve your source of income and build necessary skills to be empowered.</Text>
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
      
    },
      text2:{
        marginHorizontal:15,
        alignItems:'center',
        marginTop:35
      }
  })