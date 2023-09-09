import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Image, Icon } from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient';

export default function UserPhotoInput({newHairstyle, setNewHairstyle}) {
    return(
        <ImageBackground
            source={{uri:newHairstyle}}
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
                        onPress={() => setNewHairstyle(null)}></Icon>
                </View>
                <Image source={{uri: newHairstyle}} containerStyle={styles.photo} placeholderStyle={{padding: 10}}>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.8)']}
                    style={styles.gradient}>
                        <Text style={styles.text}>Here's your desired hairstyle</Text>
                </LinearGradient>
                </Image>
                    <Text style={styles.headerText}>Next,{" "}
                        <Text style={styles.text}>snap or upload a photo of your current hairstyle</Text>
                    </Text>
                    <View style={styles.uploadOrSnap}>
                        <Icon
                            name='device-camera'
                            type='octicon'
                            color='white'
                            size={50}
                        ></Icon>
                        <Icon
                            name='cloud-upload'
                            type='material'
                            size={55}
                            color='white'
                            >
                        </Icon>
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
  photo: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 35,
  },
  photoBackground: {
    flex: 1,
    justifyContent: 'center',
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
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  return: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  gradient: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: 45,
    padding: 10
  },
  uploadOrSnap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  }
});