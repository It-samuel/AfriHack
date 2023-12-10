import { StyleSheet, Text, View,  ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { colors } from './colors'


export default function CreateCircle() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity>
      <View style={styles.box}>
        <View style={{flexDirection:'row',padding:15}}>
          <View style={{width:200,height:80}}>
            <Text style={{fontWeight:'bold'}}>School fees</Text>
            <Text>Save together and pay for your children’s educational stability on time.</Text>
          </View>
          <Image 
              source={require('../Screens/Images/p1.jpg')}  
              style = {{ height: 60, width: 70, resizeMode: 'contain' ,  }}
              
              
          />
        </View>

      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.box}>
        <View style={{flexDirection:'row',padding:15,}}>
          <View style={{width:200,height:80}}>
            <Text style={{fontWeight:'bold'}}>House Rent</Text>
            <Text >Zero issues with your house agent because you pay your rent on time.</Text>
          </View>
          <Image 
              source={require('../Screens/Images/p2.jpg')}  
              style = {{ height: 60, width: 70, resizeMode: 'contain' ,  }}
              
              
          />
        </View>

      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.box}>
        <View style={{flexDirection:'row',padding:15}}>
          <View style={{width:200,height:80}}>
            <Text style={{fontWeight:'bold'}}>Living Expenses</Text>
            <Text>Save to purchase food items and other expenses without breaking a sweat. </Text>
          </View>
          <Image 
              source={require('../Screens/Images/p1.jpg')}  
              style = {{ height: 60, width: 70, resizeMode: 'contain' ,  }}
              
              
          />
        </View>

      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.box}>
        <View style={{flexDirection:'row',padding:15}}>
          <View style={{width:200,height:80}}>
            <Text style={{fontWeight:'bold'}}>Women Empowerment</Text>
            <Text>Grow your business or career level. Invest in yourself for a better tomorrow.</Text>
          </View>
          <Image 
              source={require('../Screens/Images/p3.jpg')}  
              style = {{ height: 60, width: 70, resizeMode: 'contain' ,  }}
              
              
          />
        </View>

      </View>
      </TouchableOpacity>

      

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.grey
    },
    box:{
      width:327,
      height:110,
      backgroundColor:colors.white,
      alignSelf:'center',
      borderRadius:10,
      marginTop:15
    }
})