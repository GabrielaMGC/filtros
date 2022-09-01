import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = () => {
  return (
    <TouchableOpacity>
        <View style={StyleSheet.itemWrapper}>
            <View style={style.leftWrapper}>
                <Image source={{uri: logoUrl}} style={styles.image}/>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}> Etherium </Text>
                        <Text style={styles.subtitle}> ETH </Text>
                    </View>
                    </View>
                    <View style={styles.rightWrapper}>
                        <Text style={styles.title}> Etherium </Text>
                        <Text style={[styles.subtitle,{color: 'red'}]}> ETH </Text>
                    </View>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    itemWrapper:{
        paddingHorizontal:16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    leftWrapper:{
        flexDirection: 'row',
        alingItems: 'center',
    },
    rightWrapper:{
        alignItems: 'flex-end',
    },
    image:{},
    titlesWrapper:{},
    title:{},
    subtitle:{},
})
export default ListItem