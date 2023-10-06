import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [dadosPaciente, setDadosPaciente] = useState({});
  const [telaAtual, setTelaAtual] = useState('Início');
  const [pacientesAgendados, setPacientesAgendados] = useState([]);

  const handleAgendamento = () => {
    console.log('Dados do paciente agendado:', dadosPaciente);
    setPacientesAgendados([...pacientesAgendados, dadosPaciente]);
    setTelaAtual('Pacientes');
  };

  return (
    <View style={styles.container}>
      {telaAtual === 'Início' && (
        <View>
          <Text style={styles.titulo}>Área de trabalho (Início)</Text>
          <Button title="Ir para Agendamento" onPress={() => setTelaAtual('Agendamento')} />
        </View>
      )}

      {telaAtual === 'Agendamento' && (
        <View>
          <Text style={styles.titulo}>Rotina de agendamento de consultas</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            onChangeText={(text) => setDadosPaciente({ ...dadosPaciente, nome: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            onChangeText={(text) => setDadosPaciente({ ...dadosPaciente, cpf: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            onChangeText={(text) => setDadosPaciente({ ...dadosPaciente, dataNascimento: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Endereço"
            onChangeText={(text) => setDadosPaciente({ ...dadosPaciente, endereco: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Tipo de Consulta"
            onChangeText={(text) => setDadosPaciente({ ...dadosPaciente, tipoConsulta: text })}
          />
          <Button title="Agendar consulta" onPress={handleAgendamento} />
        </View>
      )}

      {telaAtual === 'Pacientes' && (
        <View>
          <Text style={styles.titulo}>Consulta de pacientes agendados</Text>
          <FlatList
            data={pacientesAgendados}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartaoPaciente} key={item.id}>
                <Text>Paciente: {item.nome}</Text>
                <Text>Data: {item.dataNascimento}</Text>
                <Text>CPF: {item.cpf}</Text>
                <Text>Endereço: {item.endereco}</Text>
                <Text>Tipo de Consulta: {item.tipoConsulta}</Text>
              </View>
            )}
          />
          <Button title="Voltar para Início" onPress={() => setTelaAtual('Início')} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 200,
    justifyContent: 'center',

  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',

    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  cartaoPaciente: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
