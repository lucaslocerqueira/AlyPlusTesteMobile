import React from "react";
import { Text } from "react-native";

export default function Title({ text }) {
    return (
        <Text
            style={{
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: 1,
                marginVertical: 30
            }}
        > {text} </Text>
    );
}