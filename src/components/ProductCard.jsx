import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'
import { fontSize, spacing } from '../constants/dimensons'
import { fontFamily } from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';

const imageUrl =
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694711060/Croma%20Assets/Communication/Wearable%20Devices/Images/301048_0_x1euf9.png";

const ProductCard = ({item}) => {
   const navigation = useNavigation();
   const handleProductDetailsScreen = () => {
    navigation.navigate("PRODUCT_DETAILS", { item })
   };
  return (
    <TouchableOpacity style={styles.container} onPress={handleProductDetailsScreen}>
      <View style={styles.imageWrapper}>
        <Image source= {{uri:item.image}} style={styles.productImage}/>
      </View>
      <View style={styles.contentContainer}>
           <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
           <Text style={styles.brand}>{item.brand}</Text>
           <Text style={styles.price}>${item.price}</Text> 
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width: "48%",
        elevation: 5,
        backgroundColor: Colors.background,
        borderRadius: 12,
        marginVertical: spacing.md
    },
    imageWrapper:{
        borderRadius: 12,
        backgroundColor:"#FFC8B7",
        margin: spacing.sm

    },
    productImage:{
        height: 120,
        width: "100%",
        // borderTopLeftRadius: 12,
        // borderTopRightRadius: 12,
        resizeMode: "center"
    },
    contentContainer: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md
    },
    name: {
        color: Colors.black,
        fontSize: fontSize.md,
        fontFamily: fontFamily.SemiBold
    },
    brand: {
        color: Colors.gray,
        fontSize: fontSize.sm,
        fontFamily: fontFamily.Medium,
        paddingVertical: spacing.xs
    },
    price: {
        color: Colors.purple,
        fontSize: fontSize.md,
        fontFamily: fontFamily.Medium
    }
})