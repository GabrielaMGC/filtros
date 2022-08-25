import { SafeAreaView, FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      
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

  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#021526",
    marginHorizontal: 16,
    marginTop: 16,
  }
});