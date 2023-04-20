import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  FlatList,
} from 'react-native';

function ServicesScreen() {
  const [services, setServices] = useState([
    { id: '1', name: 'Corte', selected: false },
    { id: '2', name: 'Corte à máquina', selected: false },
    { id: '3', name: 'Barba completa', selected: false },
    { id: '4', name: 'Barboterapia', selected: false },
    { id: '5', name: 'Cabelo e barba', selected: false },
    { id: '6', name: 'Acabamento', selected: false },
    { id: '7', name: '           Pintar cabelo            ', selected: false },
    { id: '8', name: 'Manicure', selected: false },
    { id: '9', name: 'Pedicure', selected: false },
    { id: '10', name: 'Sobrancelhas', selected: false },
    { id: '11', name: 'Pé + mão', selected: false },
  ]);
  const [confirmSelected, setConfirmSelected] = useState(false);

  const handleServicePress = (id) => {
    setServices((prevState) =>
      prevState.map((service) =>
        service.id === id ? { ...service, selected: !service.selected } : service
      )
    );
  };

  const handleConfirmPress = () => {
    setServices((prevState) => prevState.map((service) => ({ ...service, selected: false })));
    setConfirmSelected(true);
  };

  const renderItem = ({ item }) => (
    <TouchableHighlight
    style={[
      styles.button,
      item.selected && styles.buttonSelected,
      { height: 50, width: '130%' },
    ]}
      onPress={() => handleServicePress(item.id)}
    >
      <Text style={[styles.buttonText, item.selected && styles.buttonTextSelected]}>{item.name}</Text>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o serviço</Text>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.scrollView}
      />
      {services.some((service) => service.selected) && (
        <TouchableOpacity
          style={[styles.button, confirmSelected && styles.buttonSelected, { marginTop: 65 }]}
          onPress={handleConfirmPress}
        >
          <Text style={[styles.buttonText, confirmSelected && styles.buttonTextSelected]}>Confirmar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 120,
    marginTop: 80,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    alignSelf: 'center',
  },
  buttonSelected: {
    backgroundColor: '#0A353B',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  buttonTextSelected: {
    color: '#FFFFFF',
  },
  scrollView: {
    paddingBottom: 100,
  },
});

export default ServicesScreen;