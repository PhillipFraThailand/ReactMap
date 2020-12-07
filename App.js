import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import NotesList from './Components/NotesList'
import {PinProvider} from './Providers/PinProvider'

export default function App() {
	return (
		<PinProvider>
			<View style={styles.container}>
				<NotesList/>
			</View>
		</PinProvider>
	)
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'space-evenly'
	}
});
