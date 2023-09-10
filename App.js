import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import Landing from './components/Landing';
import UserPhotoInput from './components/UserPhotoInput';
import ConfirmSubmission from './components/ConfirmSubmission';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [inSearch, setInSearch] = useState(false);
  const [newHairstyle, setNewHairstyle] = useState(null);
  const [userCurrentHairstyle, setUserCurrentHairstyle] = useState(null);
  const [postRequestLoading, setPostRequestLoading] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'NotoSerif-Regular': require('./assets/fonts/NotoSerif-Regular.ttf'),
        'Spectral-LightItalic': require('./assets/fonts/Spectral-LightItalic.ttf'),
        'NotoSerif-Bold': require('./assets/fonts/NotoSerif-Bold.ttf'),
        'NotoSerif_SemiCondensed-Bold': require('./assets/fonts/NotoSerif_SemiCondensed-Bold.ttf'),
        'NotoSansDisplay-Bold': require('./assets/fonts/NotoSansDisplay-Bold.ttf'),
        'NotoSansDisplay-Light': require('./assets/fonts/NotoSansDisplay-Light.ttf'),
        'NotoSerif-Light': require('./assets/fonts/NotoSerif-Light.ttf'),
        'FiraCode-Medium': require('./assets/fonts/FiraCode-Medium.ttf'),
    
      });
      setFontLoaded(true);
    }

    loadFont();
  }, []);

  return !fontLoaded ? null : (
    <View style={styles.container}>
      { !newHairstyle && 
          <Landing 
            inSearch={inSearch} 
            setInSearch={setInSearch} 
            setNewHairstyle={setNewHairstyle}/>
            }
      { newHairstyle && !userCurrentHairstyle && 
          <UserPhotoInput 
            newHairstyle={newHairstyle} 
            setNewHairstyle={setNewHairstyle} 
            setUserCurrentHairstyle={setUserCurrentHairstyle}/>
            }
      { newHairstyle && userCurrentHairstyle && !postRequestLoading &&
          <ConfirmSubmission 
            setUserCurrentHairstyle={setUserCurrentHairstyle}
            newHairstyle={newHairstyle}
            userCurrentHairstyle={userCurrentHairstyle}
            setPostRequestLoading={setPostRequestLoading}
            />
          }
      { postRequestLoading && 
        <LoadingScreen 
        setPostRequestLoading={setPostRequestLoading}
        />
      }
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
    backgroundColor: '#f2f3f3'
  },
});
