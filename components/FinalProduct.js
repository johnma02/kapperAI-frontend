import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { Image, Icon } from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

export default function FinalProduct({
    setUserCurrentHairstyle, 
    setNewHairstyle,
    setPostRequestSuccess,
    blendedImage,
    setBlendedImage,
}) {
    return(
        <View style={styles.body}>
            <View style={styles.return}>
                <Icon
                    name='chevron-left'
                    type='feather'
                    size={40}
                    color={'#2D2A2A'}
                    onPress={() => setNewHairstyle(null)}></Icon>
                <Icon
                    name='refresh-cw'
                    type='feather'
                    size={35}
                    color={'#2D2A2A'}
                    onPress={() => setNewHairstyle(null)}></Icon>
            </View>
            <Image source={
                require('../assets/jan-ahmed-prg.png') 
                }
                containerStyle={styles.photo}
                placeholderStyle={{padding: 10}}>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.8)']}
                    style={styles.gradient}>
                        <Text style={styles.headerText}>The Brand New You</Text>
                </LinearGradient>
            </Image>
            <View style={styles.actions}>
                <View style={styles.home}>
                    <Icon
                        name='home'
                        type='octicon'
                        size={35}
                        color={'#2D2A2A'}
                        onPress={() => setNewHairstyle(null)}></Icon>
                </View>
                <Text style={styles.titleHeader}>kapper</Text>
                <View style={styles.shareDownload}>
                    <Icon
                        name='download'
                        type='feather'
                        size={35}
                        color={'#2D2A2A'}
                        onPress={() => (null)}></Icon>
                    <Icon></Icon>
                    <Icon
                        name='share'
                        type='feather'
                        size={35}
                        color={'#2D2A2A'}
                        onPress={() => setNewHairstyle(null)}></Icon>
                    <Icon></Icon>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      gap: 10,
      height: '100%',
      width: '100%',
      backgroundColor: '#f2f3f3',
      alignItems: 'center',
    },
    photo: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        height: '75%',
        borderRadius: 10,
        marginBottom: 35,
    },
    gradient: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        height: 65,
        padding: 10
    },
    headerText: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 36,
        color: '#f2f3f3',
        textAlign: 'left',
        paddingLeft: 15,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4, 
        textShadowColor: '#000000c0',
    },
    titleHeader: {
        fontSize: 42,
        fontFamily: 'Spectral-LightItalic',
        color: '#2D2A2A',
    },
    return: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 27.5,
        marginTop: 55,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 35,
    },
    shareDownload: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
        width: 100
    },
    home: {
        display: 'flex',
        width: 100
    }
  });