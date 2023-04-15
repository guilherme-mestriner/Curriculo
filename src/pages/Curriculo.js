import { React } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Pagina Inicial</Text>

            <Button 
                title="Formação"
                onPress={ () => navigation.navigate('Formacao') }
            />
        </View>
    );
}

const estilos = StyleSheet.create({

});

export default Curriculo;
