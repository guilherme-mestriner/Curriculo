import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Formacao = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Guilherme Henrique Mestriner Marques</Text>
            <Text style={styles.title}>Brasileiro, 17 anos </Text>
            <Text style={styles.title}>E-mail: gm5842039@gmail.com</Text>
            <Text style={styles.title}>Contato:(11) 972276750</Text>
            <Text style={styles.title}>Endereço: Rua Prudente de Moraes, 1933 - Guararapes/SP/Brasil </Text>

            <Button
                title="Voltar"
                onPress={ () => navigation.navigate('Curriculo') } 
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

  export default Formacao;
