import * as React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import {ProgressBar,MD3Colors, Text} from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export const Testing = () => (
  <Card>
    {/* <Card.Title left={LeftContent} />
    <Card.Content>
    </Card.Content> */}
  <View style={styles.imgContainer}>
    <Image />
    <Card.Cover source={require('../assets/myImage.jpg')} style={styles.imgContainer} />
  </View>

    <View style={styles.mainContainer}>
     <Text style={styles.name}>RichardSon, TX</Text>
      <Text style={styles.text}>Victims of police brutality...</Text>
      <Text style={styles.IntroText}>This is Dr.Nasrullah Khan, I am a cadiologist in Dallas,TX as you all you....</Text>
      <View style={styles.divider}>
      <Text style={styles.donations}>Last donation 2m ago</Text>
      <ProgressBar progress={0.9} color={MD3Colors.error60} />
      <Text style={styles.cash}>$509,333 Raised $500,000</Text>
      </View>
      </View>
  </Card>
);

const styles = StyleSheet.create({
  mainContainer:{
    marginLeft:20
  },
  name:{
    color:'green',
    fontSize:30,
    marginTop:-100

  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10
  },
  IntroText:{
    fontSize:20,
    fontWeight:'800'
  },
  divider:{
    marginTop:20
  },
  donations:{
    fontSize:20,
    marginBottom:10

  },
  cash:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:30,
    marginTop:10,
    color:'green'

  },
  imgContainer:{
    marginTop:10,
    resizeMode:'contain',
    height:'70%',
    width:'100%',
    borderRadius:10 
  }

})
