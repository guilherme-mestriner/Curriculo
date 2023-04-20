import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Botao from "../components/Botao";

const Curriculo = ({ navigation }) => {
    return (
        <View style={estilo.container}>
            <View style={estilo.imagemContainer}>
                <Image source={require('../images/eu.jpg')} style={{ width: 175, height: 175, borderRadius: 100 }} />
            </View>

            <View style={estilo.textoContainer}>
                <Text style={[estilo.texto, estilo.destaque]}>Olá,</Text>

                <Text style={estilo.texto}>
                    meu nome é <Text style={estilo.destaque}>Guilherme Mestriner</Text> e este é o meu currículo.
                </Text>
            </View>

            <View style={estilo.botoes}>
                <Botao titulo="Curriculo" acao={ () => navigation.navigate('Curriculo') } />
                <Botao titulo="Formação" acao={ () => navigation.navigate('Formacao') } />
                <Botao titulo="Objetivo" acao={ () => navigation.navigate('Objetivo') } />
                <Botao titulo="Experiências" acao={ () => navigation.navigate('Experiencia') } />
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        fontFamily: "Trebuchet MS",
    },
    textoContainer: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 2,
    },
    imagemContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
    },
    texto: {
        fontSize: "3em",
        fontFamily: 'inherit',
    },
    destaque: {
        color: "#00a",
        fontWeight: "bold",
    },
    botoes: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        flexGrow: 2,
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#00a",
        borderRadius: 3,
        gap: 1,
    },
});

export default Curriculo;