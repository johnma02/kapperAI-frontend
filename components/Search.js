import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

export default function Search({inSearch, setInSearch, setNewHairstyle}) {
    return(
        <View style={styles.body}>
            <Button onPress={()=>setInSearch(false)}>Back</Button>
            <Text>Search</Text>
        </View>

    )
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    height:'90%',
    padding: 35,
  },
});
