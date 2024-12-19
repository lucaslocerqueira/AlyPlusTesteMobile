import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
// import Profile from '../../assets/profile.jpg';


export default function Home() {

    const username: string = "Fulano";
    const balance: number = 10;

    return(
        <View>
           <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'red',
                padding: 20,

           }} >
                <View>
                    <Text>Olá, { username }!</Text>
                    <Text>R$ {balance} </Text>
                </View>

                <View style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    borderRadius: '50%',
                    backgroundColor: 'grey'
                }}></View>
           </View>

           <ScrollView style={{ padding: 10 }}>
                <Text>AQUI VEM O CONTEÚDO</Text>
           </ScrollView>

        </View>
    );
}