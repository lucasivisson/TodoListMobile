import { Image, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

export function Home() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/Logo.png')}></Image>
      </View>
      <View style={styles.footerContainer}></View>
    </View>
  );
}
