import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import Landing from './components/Landing';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [inSearch, setInSearch] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'NotoSerif-Regular': require('./assets/fonts/NotoSerif-Regular.ttf'),
        'Spectral-LightItalic': require('./assets/fonts/Spectral-LightItalic.ttf'),
      });
      setFontLoaded(true);
    }

    loadFont();
  }, []);

  return !fontLoaded ? null : (
    <View style={styles.container}>
      <Landing setInSearch={setInSearch}/>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: 'NotoSerif-Regular',
    color: '#2D2A2A',
    textAlign: 'left',
  },
  titleHeader: {
    fontSize: 42,
    fontFamily: 'Spectral-LightItalic',
    color: '#2D2A2A',
    paddingTop: 65,
    paddingLeft: 40
  },
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
});
