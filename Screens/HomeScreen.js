import { StyleSheet, Text, View, SafeAreaView,StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from './colors'

export default function HomeScreen({navigation}) {


  
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View style={styles.profile}>
      <Image 
              source={require('../Screens/Images/profile.png')}  
              style = {{ height: 45, width: 45, resizeMode: 'cover' ,  }}
              tintColor={colors.white}
          />
          <Text style={{color:colors.white, fontSize:20,marginLeft:10}}>Hello, User</Text>
      </View>
      <View style={styles.main}>
        <View style={{height:15}}></View>

        {/* scroll view */}
        <ScrollView >
          <View style={styles.info}>
            <Text>Upload a live picture of your face</Text>
            <Text style={{fontSize:18,fontWeight:'bold', marginVertical:5}}>Complete your verification</Text>
            <TouchableOpacity><Text style={{textDecorationLine:'underline'}}>Complete your verification</Text></TouchableOpacity>
          </View>
          <View style={styles.account}>
            <Text style={{fontWeight:'300', marginLeft:15}}>Current Balance</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:18, margin:10}}>NGN</Text>
              <Text style={{fontSize:25,fontStyle: 'italic'}}>85,767.64</Text>
              <TouchableOpacity style={{marginLeft:10}}>
              <Image 
              source={require('../Screens/Images/visible.png')}  
              style = {{ height: 25, width: 25, resizeMode: 'cover' ,  }}
              
          />
              </TouchableOpacity>

            </View>

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity style={styles.deposits}  onPress={() => navigation.navigate('Deposits')}>
            <Text style={{color:'white'}}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.withdraw}>
            <Text style={{color:colors.primColor}}>Withdraw</Text>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.transactions} onPress={() => navigation.navigate('Create a Circle')}> 
            <Image 
              source={require('../Screens/Images/add.png')}  
              style = {{ height: 25, width: 25, resizeMode: 'cover' , marginTop:10 }}
              
          />
          <Text style={{textAlign:'center', marginTop:10}}> Create a new Circle</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.transactions}> 
            <Image 
              source={require('../Screens/Images/multiple-users-silhouette.png')}  
              style = {{ height: 25, width: 25, resizeMode: 'cover' , marginTop:10 }}
              
          />
          <Text style={{textAlign:'center', marginTop:10}}> Join a Circle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transactions}> 
            <Image 
              source={require('../Screens/Images/profile.png')}  
              style = {{ height: 25, width: 25, resizeMode: 'cover' ,  marginTop:10}}
              tintColor='black'
              
          />
          <Text style={{textAlign:'center', marginTop:10}}> Circle Admin</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bar}>
            <Text style={{marginTop:5, marginLeft:15}}>Remitide Estate Children School Fees </Text>
            <Text style={{color:colors.primColor, fontStyle:'italic', fontSize:20,marginLeft:15}}>75% almost complete</Text>

          </View>
          <View style={styles.bar}>
            <Text style={{marginTop:5, marginLeft:15}}>Remitide Estate House Rent </Text>
            <Text style={{color:colors.primColor, fontStyle:'italic', fontSize:20,marginLeft:15}}>25% Keep pushing</Text>

          </View>
          <View style={styles.bar}>
            <Text style={{marginTop:5, marginLeft:15}}>Start A Business </Text>
            <Text style={{color:colors.primColor, fontStyle:'italic', fontSize:20,marginLeft:15}}>55% half way there</Text>

          </View>
          <View style={styles.bar}>
            <Text style={{marginTop:5, marginLeft:15}}> Emergency funds</Text>
            <Text style={{color:colors.primColor, fontStyle:'italic', fontSize:20,marginLeft:15}}>80% you can do it</Text>

          </View>
          
          
        </ScrollView>

      </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:StatusBar.currentHeight,
      backgroundColor:colors.primColor
    },
    profile:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:20,
      marginTop:20
    },
    main:{
      width:'100%',
        height:'90%',
        backgroundColor:colors.white,
        marginTop:10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingBottom:40
        
    },
    info:{
      backgroundColor:colors.milk,
      alignSelf:'center',
      padding:30,
      borderRadius:10,
      marginTop:10
    },
    account:{
      width:327,
      height:100,
      borderWidth:1,
      borderRadius:15,
      alignSelf:'center',
      marginTop:10,
    },
    deposits:{
      backgroundColor:colors.primColor,
      width:154,
      height:36,
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center',
      marginTop:20
    },
    withdraw:{
      backgroundColor:'white',
      width:154,
      height:36,
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center',
      marginTop:20,
      borderWidth:1,
      borderColor:colors.primColor
    },
    transactions:{
      width:96,
      height:100,
      backgroundColor:colors.lightPurple,
      borderRadius:15,
      marginTop:15,
      alignItems:'center',
    },
    bar:{
      width:328,
      height:80,
      borderWidth:1,
      borderRadius:10,
      marginTop:15,
      alignSelf:'center'
    }
})