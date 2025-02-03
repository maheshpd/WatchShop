import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import {fontSize, iconSize, spacing} from '../constants/dimensons';
import {fontFamily} from '../constants/fonts';
import {Colors} from '../constants/colors';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import {smartWatch} from '../data/smartwatch';
import { headphones } from '../data/headphones';

const HomeScreen = () => {
  const [data, setData] = useState(smartWatch)
  const [selectedCategory, setSelectedCategory] = useState("Smart Watch");

  const handleUpdateCategory = (newCategory) => {
    if(newCategory === "Smart Watch") {
      setSelectedCategory("Smart Watch");
      setData(smartWatch)
    } else if(newCategory === "Headphones") {
      setSelectedCategory("Headphones");
      setData(headphones)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable watch now.</Text>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.mainInputContainer}>
              <View style={styles.inputWrapper}>
                {/* icon */}
                <Image
                  source={require('../assets/Search.png')}
                  style={styles.logo}
                />
                {/* input container */}
                <TextInput
                  style={styles.textInput}
                  placeholder="Search Product"
                  placeholderTextColor={Colors.placeholder}
                />
              </View>
              {/* category container */}
              <View style={styles.categoryContainer}>
                <Image
                  source={require('../assets/category.png')}
                  style={styles.logo}
                />
              </View>
            </View>
            <Category selectedCategory = {selectedCategory} handleUpdateCategory={handleUpdateCategory} />
          </>
        }
        data={data}
        renderItem={({item, index}) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingBottom: 200,
          padding: spacing.md,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    
  },

  headline: {
    fontSize: fontSize.xxl,
    color: Colors.black,
    fontFamily: fontFamily.Bold,
  },

  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.md,
  },

  inputWrapper: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.placeholder,
    borderRadius: 44,
    paddingHorizontal: spacing.md,
  },

  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    color: Colors.black,
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
});
