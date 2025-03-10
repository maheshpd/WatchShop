import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {iconSize} from '../constants/dimensons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

//AntDesign
const Header = () => {
  const navigaition = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigaition.goBack();
        }}>
        <Ionicons name={'arrow-back'} size={iconSize.md} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name={'hearto'} size={iconSize.md} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
