import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
	const participants = [
		"Marquis",
		"santos",
		"Alexander",
		"Tonhão",
		"Rick",
		"Kaio",
		"Billy",
		"fred",
		"BR",
	];

	function handleParticipantAdd() {
		console.log("voce clicou no botão de adicionar");
	}

	function handleParticipantRemove(name: string) {
		console.log("remove", name);
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
			<FlatList
				data={participants}
				keyExtractor={item => item}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes na sua lista!</Text>
				)}
				renderItem={({item}) => (
					<Participant
						name={item}
						onRemove={() => handleParticipantRemove("marquis")}
					/>
				)}
			/>
		</View>
	);
}
