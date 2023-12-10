import { StyleSheet, Text, View , ScrollView, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { colors } from './colors'

export default function Deposits() {
  return (
    <ScrollView style={styles.container}>
        <View style={{padding:10, borderRadius:10}}>
        <Image 
              source={require('../Screens/Images/c1.png')}  
              style = {{ height: 100, width: 328, resizeMode: 'cover' , marginTop:10, borderRadius:10 }}
              
          />
        </View>

        <View style={{padding:10, borderRadius:10}}>
        <Image 
              source={require('../Screens/Images/c2.png')}  
              style = {{ height: 100, width: 328, resizeMode: 'cover' , marginTop:10, borderRadius:10 }}
              
          />
        </View>
        <TouchableOpacity style={styles.card}>
            <View style={{flexDirection:'row',padding:15,alignItems:'center' }}>
            <Image 
              source={require('../Screens/Images/add.png')}  
              style = {{ height: 30, width: 30, resizeMode: 'cover' ,  }}
              tintColor={colors.primColor}
          />
          <Text style={{color:colors.primColor, marginLeft:10}}>Add new card</Text>
            </View>
        </TouchableOpacity>
        <TextInput 
            placeholder="Choose account/card"
            style={styles.input}
            keyboardType='email-address'
            
          
        />
        <TextInput 
            placeholder="Enter amount to deposit"
            style={styles.input2}
            keyboardType='email-address'
            
          
        />
        <Text style={{margin:10}}> Choose Amount</Text>
       <View style={{marginBottom:20}}>
       <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity style={styles.transactions}> 
            
            <Text style={{textAlign:'center', marginTop:10}}> $50</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transactions}> 
        
        <Text style={{textAlign:'center', marginTop:10}}> $100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transactions}> 
        
        <Text style={{textAlign:'center', marginTop:10}}> $200</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity style={styles.transactions}> 
            
            <Text style={{textAlign:'center', marginTop:10}}> $300</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transactions}> 
        
        <Text style={{textAlign:'center', marginTop:10}}> $500</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transactions}> 
        
        <Text style={{textAlign:'center', marginTop:10}}> $1000</Text>
            </TouchableOpacity>
        </View>

       </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    card:{
        width:327,
        height:48,
        borderWidth:1,
        borderColor:colors.primColor,
        alignSelf:'center',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        
        
    },
    input:{
        height:45,
        width:320,
        borderWidth:1,
        marginHorizontal:15,
        alignSelf:'center',
        padding:10,
        borderRadius:8,
        marginBottom:10,
        marginTop:40
    },
    input2:{
        height:45,
        width:320,
        borderWidth:1,
        marginHorizontal:15,
        alignSelf:'center',
        padding:10,
        borderRadius:8,
        marginBottom:10,
        marginTop:10
    },
    transactions:{
        width:96,
        height:50,
        backgroundColor:colors.lightPurple,
        borderRadius:15,
        marginTop:15,
        alignItems:'center',
        justifyContent:'center',
        
      },
})