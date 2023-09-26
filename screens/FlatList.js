import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatList = () => {
  return (
    <View>
            <Text style={styles.headingText}>flatList</Text>
     <View style={styles.container}>
      <View style={[styles.card,styles.card1]}>
        <Text>
          Red
        </Text>
      </View>
      <View style={[styles.card,styles.card2]}>
        <Text>
          Yellow
        </Text>
      </View>
      <View style={[styles.card,styles.card3]}>
        <Text>
          Blue
        </Text>
      </View>
      <View style={[styles.card,styles.card4]}>
        <Text>
          plum
        </Text>
      </View>
     </View>
    </View>
  )
}

export default FlatList

const styles = StyleSheet.create({
  headingText: {
    paddingTop: 40,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex:1,
    flexDirection:'row'
  },

  card: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    height: 100,
    width: 100,
    borderRadius: 8,
    margin: 8,
  },
  card1: {
    backgroundColor: "red",
  },
  card2: {
    backgroundColor: "yellow",
  },
  card3: {
    backgroundColor: "dodgerblue",
  },
  card4: {
    backgroundColor: "plum",
  },
});
