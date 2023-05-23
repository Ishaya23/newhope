import { StyleSheet, Text, View , TextInput,Button, SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import {About} from './companents/About';
import { Testing} from './companents/TestingFunc'



const  App = () => {
  return(
    <View>
      {/* <About /> */}
      <Testing />
    </View>
  )
  
}

export default App

const styles = StyleSheet.create({
    body:{

    },
});