import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';

import Header from '../components/Header';
import ProductCarsoul from '../components/ProductCarsoul';
import {fontSize, iconSize, spacing} from '../constants/dimensons';
import {Colors} from '../constants/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontFamily} from '../constants/fonts';
import CartButton from '../components/CartButton';

const colorsData = [
  {
    colorName: 'Silver',
    colorValue: '#F0F2F2',
  },
  {
    colorName: 'Bright Orange',
    colorValue: '#F25745',
  },
  {
    colorName: 'Starlight',
    colorValue: '#FAF6F2',
  },
];

const ProductDetailsScreen = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTab, setSelectedTab] = useState('');
  const item = useRoute().params.item;
  console.log('item: ', item);
  return (
    <View style={styles.container}>
      <ScrollView style= {styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
      >
      <Header />
      <ProductCarsoul images={item.images} />
      {/* content stuff */}
      <View style={styles.titleContainer}>
        {/* title wrapper */}
        <View style={styles.titleWrapper}>
          <Text style={styles.productTitle}>{item.name}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>
        {/* rating wrapper */}
        <View style={styles.ratingWrapper}>
          <AntDesign name={'star'} color={Colors.yellow} size={iconSize.sm} />
          <Text style={styles.ratingValue}>4.8</Text>
        </View>
      </View>
      {/* color container */}
      <View style={styles.colorContainer}>
        <Text style={styles.colorHeading}>Colors</Text>

        <FlatList
          data={colorsData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.selectColorContainer,
                item.colorValue === selectedColor && {
                  borderColor: Colors.purple,
                },
              ]}
              onPress={() => {
                setSelectedColor(item.colorValue);
              }}>
              <View
                style={[
                  styles.circleColor,
                  {
                    backgroundColor: Colors.colorValue,
                  },
                ]}
              />
              <Text style={styles.colorText}>{item.colorName}</Text>
            </TouchableOpacity>
          )}
          horizontal
          ItemSeparatorComponent={() => <View style={spacing.sm} />}
        />
      </View>

      {/* details and review */}
      <View style={styles.detailsReviewTabs}>
        <TouchableOpacity onPress={() => setSelectedTab("Details")}>
          <Text
            style={[
              styles.tabText,
              selectedTab == 'Details' && {color: Colors.purple},
            ]}>
            Details
          </Text>
          {selectedTab === 'Details' && <View style={styles.underline} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab("Review")}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Review' && {color: Colors.purple},
            ]}>
            Review
          </Text>
          {selectedTab === 'Review' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>

      {/* content view */}
      {/* {
        selectedTab === "Details" && 
          <Text>
            {item.details}
          </Text>
        
      } */}
      <Text style={styles.detailsContent}>{selectedTab === "Details" ? item.details : item.review}</Text>
    </ScrollView>
    {/* add to cart button */}
    <CartButton/>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: Colors.background,
    flex: 1
  },
  scrollViewContainer: {
    padding: spacing.md,
    
  },
  titleContainer: {
    flexDirection: 'row',
  },
  titleWrapper: {
    flex: 1,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: Colors.lavendar,
    borderRadius: spacing.md,
    padding: spacing.sm,
    height: 50,
    marginTop: spacing.md,
  },
  productTitle: {
    fontFamily: fontFamily.Bold,
    color: Colors.black,
    fontSize: fontSize.lg,
  },
  brand: {
    fontFamily: fontFamily.Medium,
    color: Colors.gray,
    fontSize: fontSize.sm,
    paddingVertical: spacing.sm,
  },
  ratingValue: {
    color: Colors.gray,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.md,
  },
  colorContainer: {},
  colorHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: Colors.black,
    paddingBottom: spacing.md,
  },
  selectColorContainer: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: Colors.purple,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    color: Colors.black,
  },
  detailsReviewTabs: {
    flexDirection: 'row',
    paddingTop: spacing.lg,
    gap: spacing.lg,
  },
  tabText: {
    fonstSize: fontSize.md,
    fontFamily: fontFamily.Medium,
    color: Colors.gray,
  },
  underline: {
    borderBottomColor: Colors.purple,
    borderBottomWidth: 2,
    width: '50%',
    marginTop: spacing.xs,
  },
  detailsContent: {
    color: Colors.gray,
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.md,
    paddingVertical: spacing.xs,
    paddingBottom: 200
  }
});
