import { StyleSheet, View } from 'react-native';
export default function CarouselDots({index}){
    return(
        <View style={styles.dots}>
            <View style={index === 0 ? styles.dot : styles.dotInactive}></View>
            <View style={index === 1 ? styles.dot : styles.dotInactive}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'lightblue',
        margin: 5,
    },
    dotInactive: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'grey',
        margin: 5,
    },
    dots: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        height: 20,
        backgroundColor: 'transparent',
        marginTop: -50 // lord please forgive me.
    }
})

