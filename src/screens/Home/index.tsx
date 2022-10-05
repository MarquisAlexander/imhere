import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
	function handleParticipantAdd() {
		console.log("voce clicou no botão de adicionar");
	}

	function handleParticipantRemove(name: string) {
		console.log('remove', name)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do Evento</Text>
			<Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor="#6B6B6B"
				/>

				<TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<Participant name="Marquis" onRemove={() => handleParticipantRemove('marquis')} />
		</View>
	);
}
