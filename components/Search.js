import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Button, Input } from '@rneui/themed';

export default function Search({inSearch, setInSearch, setNewHairstyle}) {
  const [items, setItems] = useState([]);
  const [userInput, setUserInput] = useState('');
  
  const handleSubmit = async () => {
    fetch()

  }
    return(
        <View style={styles.body}>
            <Button style={{marginTop: 20}}onPress={()=>setInSearch(false)}>Back</Button>
            <Text>Search</Text>
            <Input
            placeholder='Search Hairstyles...'
            onChangeText={(text)=>setUserInput(text)}
            onSubmitEditing={handleSubmit}
            />
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
