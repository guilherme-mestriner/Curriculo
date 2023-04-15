import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Objetivo = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Atuar na área da saúde como enfermeiro ou virar lutador</Text>

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

  export default Objetivo;
