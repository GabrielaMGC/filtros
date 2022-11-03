import { SafeAreaView, FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import ListItem from './components/ListItem';
import { SAMPLE_DATA } from './assets/data/sampleData';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.titleWrapper}>
      <Text style={styles.text}> Markets</Text>
    </View>
    <View style={styles.divider}>

    </View>
      <FlatList
        keyExtractor={(item)=>item.id}
        data={SAMPLE_DATA}
        renderItem={({item})=>(
          <ListItem
          name = {item.name}
          symbol = {item.symbol}
          currentPrice = {item.current_price}
          priceChangePercentage7d = {item.price_change_percentage_7d_in_currency}
          logoUrl = {item.image}
          />
        )}
      />
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