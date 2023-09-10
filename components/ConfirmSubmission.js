import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import { Image, Icon, Button } from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import CarouselDots from './CarouselDots';

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
                    vertical={false}
                    width={width}
                    height={height*.4765}
                    mode="parallax"
                    data={[newHairstyle, userCurrentHairstyle]}
                    pagingEnabled={true}
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
                <CarouselDots index={index} length={images.length}/>
                <Text style={styles.headerText}>Ready to see your new look?</Text>
                <Text style={styles.text}>Hit the button below to see what you might look like with your new hairstyle</Text>

                <View style={styles.buttonFrame}>
                    <Button
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                            colors: ["#FF9800", "#F44336"],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        size={'lg'}
                    >
                        Let's go!{'  '}
                        <Icon
                            name='rocket'
                            type='octicon'
                            color='white'
                            >
                        </Icon>
                    </Button>
                </View>
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
    headerText: {
        fontFamily: 'NotoSansDisplay-Bold',
        fontSize: 28,
        color: 'white',
        position: 'relative'
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
    buttonFrame: {
        padding: 100
    }
});

