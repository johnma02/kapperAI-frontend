import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import { Image, Icon } from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';


export default function ConfirmSubmission({setUserCurrentHairstyle, newHairstyle, userCurrentHairstyle}){
    const [index, setIndex] = useState(0);
    const images = [userCurrentHairstyle, newHairstyle];
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return(
        <ImageBackground
            source={{uri:images[index]}}
            resizeMode='cover'
            style={styles.photoBackground}
        >
            <View style={styles.body}>
                <View style={styles.return}>
                        <Icon
                            name='chevron-left'
                            type='feather'
                            size={40}
                            color={'white'}
                            onPress={() => setUserCurrentHairstyle(null)}></Icon>
                </View>
                <Carousel
                    loop
                    width={width}
                    style={styles.carousel}
                    height={height*.4765}
                    data={[newHairstyle, userCurrentHairstyle]}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => setIndex(index)}
                    renderItem={({ index }) => (
                    <Image source={{uri: images[index]}} containerStyle={styles.photo} placeholderStyle={{padding: 10}}>
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.8)']}
                            style={styles.gradient}>
                                <Text style={styles.text}>
                                    {
                                        index === 0 ? "Here's your current hairstyle" : 
                                                      "Here's your desired hairstyle"
                                    }
                               </Text>
                        </LinearGradient>
                    </Image>
                    )}
                />
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    body: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingTop: 55,
        gap: 10,
        height: '100%',
        width: '100%',
        backgroundColor: '#000000c0',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'NotoSansDisplay-Light',
        fontSize: 20,
        color: 'white',
        position: 'relative',
        left: 10,

    },
    return: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        paddingLeft: 10,
    },
    photo: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    photoBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    gradient: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        height: 45,
        padding: 10
  },
    carousel: {
        marginBottom: 35,
    }
});

