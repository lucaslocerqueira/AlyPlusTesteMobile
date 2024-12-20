import React from "react";
import { Alert, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../global/themes";

export default function CardButton({ color, title, onClick, icon }) {

    return (
        <TouchableOpacity style={{
            marginBottom: 40
        }} onPress={() => {
            Alert.alert('EM DESENVOLVIMENTO', 'Aguarde novas atualizações', [
                {
                    text: 'OK',
                }
            ])
        }}>
            <View style={{
                height: 50,
                flexDirection: 'row',
                width: '100%',
                padding: 10,
            }} >
                <MaterialIcons
                    style={{ width: 30 }}
                    name={icon}
                    size={20}
                    color={themas.colors.gray}
                />
                <Text> {title} </Text>

            </View>

            <View style={{
                width: '100%',
                borderWidth: 1,
                borderBottomColor: color,
            }}>
            </View>

        </TouchableOpacity>
    );

}