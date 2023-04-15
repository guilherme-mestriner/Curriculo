import { React } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Curriculo = ({ navigation }) => {
    return (
        <View>
            <Text>Meu Curriculo</Text>

            <Button 
                title="Sobre mim"
                onPress={ () => navigation.navigate('Formacao') }
            />

            <Button 
                title="Objetivo"
                onPress={ () => navigation.navigate('Objetivo') }
            />
        </View>
    );
}

const estilos = StyleSheet.create({

});

export default Curriculo;
