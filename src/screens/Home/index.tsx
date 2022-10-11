import React, { useState } from "react";
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
	Alert,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
	const [participants, setParticipants] = useState<string[]>([]);
	const [participantName, setParticipantName] = useState("");

	function handleParticipantAdd() {
		if (participants.includes(participantName)) {
			return Alert.alert(
				"Participante Existe",
				"Já existe um participante na lista com esse nome.",
			);
		}

		setParticipants((prevState) => [...prevState, participantName]);
		setParticipantName("");
	}

	function handleParticipantRemove(name: string) {
		Alert.alert("Remover", `Remover o participante ${name}?`, [
			{
				text: "Sim",
				onPress: () =>
					setParticipants((prevState) =>
						prevState.filter((participant) => participant !== name),
					),
			},
			{
				text: "Não",
				style: "cancel",
			},
		]);
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
					onChangeText={setParticipantName}
					value={participantName}
				/>

				<TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={participants}
				keyExtractor={(item) => item}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>
						Ninguém chegou no evento ainda? Adicione participantes na sua lista!
					</Text>
				)}
				renderItem={({ item }) => (
					<Participant
						name={item}
						onRemove={() => handleParticipantRemove(item)}
					/>
				)}
			/>
		</View>
	);
}
