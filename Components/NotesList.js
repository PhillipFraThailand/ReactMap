import React, {useContext} from "react";
import { FlatList, StyleSheet, Text, SafeAreaView, Dimensions, Button, TouchableOpacity } from 'react-native';
import { PinContext } from "../Providers/PinProvider";

const Item = ({ name, id}) => (
    <TouchableOpacity>
        <Text>Name: {name} Id: {id}</Text>
    </TouchableOpacity>
);

const renderItem = ({ item }) => <Item name={item.name} id={item.id} />;

//would be cool to add pull to refresh.

// call notes.setPins which is providede from PinProvider to change the state
function NotesList() {
    // useContext allows us to access data from PinProvider. we can also set that data with this.
    const notes = useContext(PinContext);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={notes.pins} renderItem={renderItem} keyExtractor={item => item.id}/>
        </SafeAreaView>
    );
}

export default NotesList

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width
    }
});