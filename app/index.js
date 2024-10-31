import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Index = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
    />  
      
      <TextInput 
        style={styles.input}
        placeholder='Usuario'
      />
      
      <TextInput 
        style={styles.input}
        placeholder='Clave'
      />
      <Pressable style={styles.button}>Ingresar</Pressable>

    </SafeAreaView>
    </SafeAreaProvider> 
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#e3dfde"
    },
    image : {       
        flex:1, 
        width: '100%',        
        backgroundColor: '#0553',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
      },

})