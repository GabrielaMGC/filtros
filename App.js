import { SafeAreaView, FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import ListItem from './components/ListItem';
import { SAMPLE_DATA } from './assets/data/sampleData';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
     
        <Text style={styles.text}> Markers </Text>
     
      <View style={styles.divider}>

      </View>
      <ListItem/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color: '#A6702E',
    fontSize: '22px',
  },

  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#021526",
    marginHorizontal: 16,
    marginTop: 16,
  }
});