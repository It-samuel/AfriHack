import { StyleSheet, Text, View, SafeAreaView,StatusBar, TouchableOpacity,Image, TextInput } from 'react-native'
import React from 'react'
import { colors } from './colors'

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.contain}>
        <View>
        
        <View style={{flexDirection:'row',marginTop:40, marginLeft:10}}>
        
          <Text style={{color:'white', fontSize:25, alignSelf:'center', marginLeft:10}}>Sign in</Text>
        </View>
        
        <View style={styles.main}>
        <Text style={{color:colors.primColor, fontSize:25, alignSelf:'center',marginTop:5}}>Welcome To CircleUp</Text>
            <Text style={{marginLeft:20,marginTop:10}}>Hello there, sign in to continue</Text>
            <Image 
              source={require('../Screens/Images/pic.jpg')}  
              style = {{ height: 170, width: 170, resizeMode: 'contain' , alignSelf:'center' }}
              
          />

        <TextInput 
            placeholder="Enter your Email"
            style={styles.input}
            keyboardType='email-address'
            
          
        />
        <TextInput 
            placeholder="Password"
            style={styles.input}
            keyboardType='email-address'
            
          
        />
        <TouchableOpacity><Text style={{alignSelf:'flex-end', marginRight:30}}>Forgot Password?</Text></TouchableOpacity>

        <TouchableOpacity style={styles.getStartedBtn} >
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:20}}>
        <Image 
              source={require('../Screens/Images/fingerprint.png')}  
              style = {{ height: 60, width: 70, resizeMode: 'contain' , alignSelf:'center' }}
              tintColor={colors.primColor}
              
          />
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:15,alignItems:'center',justifyContent:'center',}}>
        <Text style={{ alignSelf:'center', }}>Don't have an account?</Text>
        <TouchableOpacity ><Text style={{alignSelf:'center', marginLeft:8,color:colors.primColor}} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text></TouchableOpacity>
        </View>

        </View>

        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        marginTop:StatusBar.currentHeight,
        backgroundColor:colors.primColor
    },
    main:{
        width:'100%',
        height:'100%',
        backgroundColor:colors.white,
        marginTop:10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
        
        
    },
    input:{
        height:45,
        width:300,
        borderWidth:1,
        marginHorizontal:15,
        alignSelf:'center',
        padding:10,
        borderRadius:8,
        marginBottom:10
    },
    getStartedBtn:{
        backgroundColor:colors.primColor,
        width:325,
        height:45,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        alignSelf:'center',
        marginTop:15
    }
})