/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Container from './src/ContainerComponent';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {


  return (
    <SafeAreaView>
      <ScrollView>
        <Container/>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
