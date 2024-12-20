import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { NavigationProp, NavigationState, ParamListRoute, useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { URL_BASE } from "../../utils/utils";

export default function Login() {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation<any>();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });


    const onSubmit = async (_data: any) => {
        try {
            const { email, password } = _data;
            const { status, data } = await axios.post(`${URL_BASE}/auth/login`, {
                email,
                password
            });

            if (status === 200 || status === 201) {
                navigation.navigate('home', { user: data });
            }

        } catch (error) {
            Alert.alert('Credenciais inválidas', 'Ainda não tem conta? Clique abaixo para criar uma.', [
                {
                    text: 'OK',
                }
            ])
        }

    }



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
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (<View>
                        <Text style={style.titleInput}>E-MAIL</Text>
                        <View style={style.BoxInput}>
                            <TextInput
                                style={style.input}
                                onChangeText={onChange}
                                value={value}
                            />
                            <MaterialIcons
                                name='email'
                                size={20}
                                color={themas.colors.gray}
                            />
                        </View>
                    </View>
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (<View>
                        <Text style={style.titleInput}>SENHA</Text>
                        <View style={style.BoxInput}>
                            <TextInput
                                style={style.input}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={visible}
                            />
                            <Octicons
                                name={visible ? 'eye' : 'eye-closed'}
                                size={20}
                                color={themas.colors.gray}
                                onPress={toggleVisible}
                            />
                        </View>
                    </View>)}
                />

            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity onPress={handleSubmit(onSubmit)} style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
                <View style={style.accountLink}>
                    <Text style={style.textBottom}>
                        Não tem conta?
                    </Text>
                    <Text onPress={() => navigation.navigate('register')} style={[{ color: themas.colors.primary }, { ...style.textLinkButton }]}>
                        Crie agora!
                    </Text>
                </View>
            </View>
        </View>
    )

}