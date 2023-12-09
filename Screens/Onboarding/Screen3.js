import { StyleSheet, Text, View, SafeAreaView,StatusBar,
  Image,
  } from 'react-native'
  import React from 'react'
  
  export default function Screen3() {
    return (
      <SafeAreaView style={styles.container}>
          <View >
          <Image 
              source={require('../Images/pics2.png')}  
              style = {{ height: 250, width: 395, resizeMode: 'cover' , marginTop:50 }}
          />
          <View style={styles.text1}>
          <Text style={{alignSelf:'center', fontSize:25,fontWeight:'bold', marginTop:10}}>Secure Your Kids </Text>
          <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}> Education </Text>
          
          </View>
          <View style={styles.text2}>
            <Text style={{textAlign:'center', fontSize:15,fontWeight:'400'}}>Set a target and collectively pay for your children’s school fees. Structure payments to suit you circle’s goals.</Text>
          </View>
          </View>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
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