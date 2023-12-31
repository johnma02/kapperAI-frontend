import { StyleSheet, Text, View } from 'react-native';
import { Icon, Image } from '@rneui/themed';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Search from './Search';

export default function Landing({inSearch, setInSearch, setNewHairstyle}) {
    async function pickImage() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status === 'granted') {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
              });
          
              if (!result.canceled) {
                setNewHairstyle(result.assets.at(0).uri);
              }
         }
         else{
            Alert.alert('Media Permissions Required For This Action', 'kapper needs media permissions to use your images.', [
                {
                text: 'OK',
                style: 'cancel',
                },
            ]);
         }
    }
    return (
        <View>
        {inSearch ? <Search inSearch={inSearch} setInSearch={setInSearch} setNewHairstyle={setNewHairstyle}></Search>
        : <View style={styles.centeringContainer}>
            <View style={styles.body}>
                    <Text style={styles.titleHeader}>kapper</Text>

                    <Text style={styles.text}>Want to see how you'd look with a new hairstyle?</Text>
                    <Text style={styles.text}>Start your new look off by searching for or 
                    uploading a new hairstyle</Text>
                    <View style={styles.searchOrUpload}>
                    <Icon
                        name='search'
                        type='octicon'
                        size={40}
                        onPress={() => setInSearch(true)}
                        >
                    </Icon>
                    <Icon
                        name='cloud-upload'
                        type='material'
                        size={55}
                        onPress={pickImage}
                        >
                    </Icon>
                    </View>
                <Image
                    source={require('../assets/kapper.png')}
                    style={styles.kapper}
                />
                </View>
                <Text style={styles.text}>a pennapps production</Text>
            </View>
        }
        </View>
    )
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
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    height:'75%',
    padding: 35,
  },
  searchOrUpload: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 45,
    padding: 20,
  },
  centeringContainer: {
    alignItems: 'center',
  },
  kapper: {
    width: 400,
    height: 190,
    alignSelf: 'center',
  }
});
