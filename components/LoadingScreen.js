import { StyleSheet, View, Text } from 'react-native';
import { Image, Icon, Dialog } from '@rneui/themed';
import { useState } from 'react';

export default function LoadingScreen({setPostRequestLoading}){
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.body}>
            <View style={styles.return}>
                <Icon
                        name='chevron-left'
                        type='feather'
                        size={40}
                        color={'#2d2a2a'}
                        onPress={() => setModalVisible(true)}></Icon>
            </View>
            <Image
                source={require('../assets/loading.gif')}
                style={styles.loading}
            >
            </Image>
            <Text style={styles.text}>We are now processing your request.</Text>
            <Text style={styles.text}>This may take a while, so here's a cat.</Text>
            <View style={styles.catBranch}>
                <Image
                    source={require('../assets/cat.png')}
                    style={styles.cat}
                ></Image>
            </View>
            <Dialog
                isVisible={modalVisible}
                onBackdropPress={()=>setModalVisible(false)}
            >
                <Dialog.Title title="Are you sure you want to go back?"/>
                <Text>Your image is still being generated! You will lose your progress if you go back!</Text>
                <Dialog.Actions>
                    <Dialog.Button title="I want to go back!" onPress={() => setPostRequestLoading(false)}/>
                    <Dialog.Button title="Nevermind!" onPress={()=>setModalVisible(false)}/>
                </Dialog.Actions>
                </Dialog>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#f2f3f3'
    },
    loading: {
        height: 250,
        width: 250,
    },
    cat: {
        height: 65,
        width: 65,
    },
    catBranch: {
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    text: {
        fontFamily: 'NotoSansDisplay-Light',
        fontSize: 20,
        color: '#2D2A2A',
        position: 'relative',
    },
    return: {
        display: 'contents',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        // forgive me rajkumar
        position: 'absolute',
        top: 55,
    },
})
