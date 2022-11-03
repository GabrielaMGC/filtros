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
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
            logoUrl = {item.image}
          />
        )}
      />
    </SafeAreaView>