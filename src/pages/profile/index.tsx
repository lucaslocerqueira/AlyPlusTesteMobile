import React from "react";
import { ScrollView, Text, View } from "react-native";
import CardButton from "../../components/card-button";
import Title from "../../components/title";
import { themas } from "../../global/themes";

export default function Profile() {
    return (
        <ScrollView style={{
            padding: 20,
            height: '100%',
            paddingBottom: 100,
        }}>
            <View style={{
                width: '100%',
                alignItems: 'center',
                marginBottom: 50,
            }}>

                <View style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    borderRadius: '50%',
                    backgroundColor: 'grey',
                    marginBottom: 15
                }}></View>
                <Text>Fulano de Tal</Text>
            </View>

            <View>

                <Title text='Minha Conta' />

                <CardButton
                    color={themas.colors.secondary}
                    title={'Alterar dados cadastrais'}
                    onClick={() => console.log('clicou')}
                    icon={'person'}
                />
                <CardButton
                    color={themas.colors.secondary}
                    title={'Meus dispositivos'}
                    onClick={() => console.log('clicou')}
                    icon={'smartphone'}

                />
                <CardButton
                    color={themas.colors.secondary}
                    title={'Central de notificações'}
                    onClick={() => console.log('clicou')}
                    icon={'notifications'}

                />

                <Title text='Dados de acesso' />

                <CardButton
                    color={themas.colors.secondary}
                    title={'Alterar senha'}
                    onClick={() => console.log('clicou')}
                    icon={'key'}

                />

                <CardButton
                    color={themas.colors.secondary}
                    title={'Termos de uso'}
                    onClick={() => console.log('clicou')}
                    icon={'feed'}

                />
            </View>


        </ScrollView>
    );
}