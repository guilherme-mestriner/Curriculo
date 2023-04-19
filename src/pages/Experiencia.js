import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Experiencia = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Minhas experiências:</Text>
            <Text style={styles.title}>Desenho, Pintura e Artes Marciais</Text>
            <Button
                title="Voltar"
                onPress={ () => navigation.navigate('Experiencia') } 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
    },
    titulo: {
      backgroundColor: "purple",
      padding:  10,
      borderRaddius: 5
    }
  });

  export default Experiencia;