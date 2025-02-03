import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSize, iconSize, spacing} from '../constants/dimensons';
import { fontFamily } from '../constants/fonts';
import { Colors } from '../constants/colors';
const CartButton = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8743FF', '#4136F1']}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
            x:1,
            y:0
        }}
        style= {styles.addToCartButton}
        >
        <MaterialCommunityIcons
          name={'cart-outline'}
          color={Colors.background}
          size={iconSize.md}
        />
        <Text style={styles.addToCartText}>Add to Cart | $349.99</Text>
      </LinearGradient>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
    container: {
       justifyContent: "center",
       alignItems: "center",
       paddingVertical: spacing.md 
    },
    addToCartButton: {
        width: "90%",
        padding: spacing.md,
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "row",
        borderRadius: spacing.md,
        gap: spacing.sm
    },
    addToCartText: {
        color: Colors.background,
        fontFamily: fontFamily.Bold,
        fontSize: fontSize.md
    }
});
