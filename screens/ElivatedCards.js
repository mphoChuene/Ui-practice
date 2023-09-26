import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElivatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElivatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card,styles.CardElivated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.CardElivated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.CardElivated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card,styles.CardElivated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.CardElivated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card,styles.CardElivated]}>
            <Text>Your</Text>
        </View>
        <View style={[styles.card,styles.CardElivated]}>
        <Text>Destination...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElivatedCards

const styles = StyleSheet.create({
    headingText: {
        paddingTop: 40,
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: "bold",
      },
      card:{
        flex:1,
        height:100,
        width:100,
        alignItems:'center',
        borderRadius:4,
        justifyContent: 'center',
        margin:8,
      
      },
      CardElivated:{
        backgroundColor:'plum',
        elevation:10,
      },
      container:{
        // flex:1,
        padding:8,
      },
    
})