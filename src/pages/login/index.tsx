import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    function toggleVisible() {
        setVisible(!visible);
    }


    return (
        <View>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}></Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        secureTextEntry={visible}
                    />
                    <Octicons
                        name={visible ? 'eye' : 'eye-closed'}
                        size={20}
                        color={themas.colors.gray}
                        onPress={toggleVisible}
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity onPress={() => navigation.navigate('home')} style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>

                <View style={style.accountLink}>
                    <Text style={style.textBottom}>
                        Não tem conta?
                    </Text>
                    <Text onPress={() => navigation.navigate('register')} style={[{ color: themas.colors.primary }, {...style.textLinkButton}]}>
                        Crie agora!
                    </Text>
                </View>
            </View>
        </View>
    )

}