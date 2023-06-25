/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import BgImage from "./src/assets/images/bg.jpg"
import Home from './src/Home';





function App(): JSX.Element {
  return (
    <ImageBackground  source={BgImage}>
    <SafeAreaView >
      <Home/>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
