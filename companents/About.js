import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pacifico_400Regular} from "@expo-google-fonts/pacifico"

 export const About = () => {
  return (
    <SafeAreaView style={{}}>
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Charity App</Text>
      <Text style={styles.donateText}>Donate to a worthy course</Text>
      <View style={styles.aboutText}>
        <Text style={styles.textbody}>The Charity App foundation mission 
        unchange since 1913----
        is to promote the well-being of humanity---
        throughout the world.
        Today the foundation advance new frontiers
        of science, policy, data, policy and innovation
        to solve global challenges related to health,food power
        and economic mobility.
        </Text>
      </View>
      <Text style={styles.donation}>Make a Donation</Text>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    alignItems:'center',
    marginTop:Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  
  },
  header:{
    marginBottom:20,
    color:"darkblue",
    fontStyle:'italic',
    fontSize:40,
    fontFamily:''

  },
  aboutText: {
    paddingRight:10,
    paddingLeft:10,
    backgroundColor:'darkblue',
    marginTop:10,
    marginRight:20,
    marginLeft:20,
    borderRadius:10
  },
  donateText:{
    marginBottom:20,
    fontWeight:'bold',
    fontSize:25
  },
  textbody:{
    fontSize:25,
    color:'white',
    padding:20,
    fontWeight:'normal'
  },
  donation:{
    marginTop:40,
    marginBottom:10,
    backgroundColor:'darkblue',
    fontSize:30,
    paddingLeft:70,
    paddingRight:70,
    paddingBottom:20,
    paddingTop:20,
    borderRadius:10,
    color:'white'
  }

  
});