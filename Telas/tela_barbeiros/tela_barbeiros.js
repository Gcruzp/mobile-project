import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function BarberScreen() {
  const [selectedBarber, setSelectedBarber] = useState(null);

  const handleBarberPress = (barber) => {
    setSelectedBarber(barber);
  };

  const barbers = [
    { id: 1, name: 'João', selected: false },
    { id: 2, name: 'Pedro', selected: false },
    { id: 3, name: 'Lucas', selected: false },
    { id: 4, name: 'Fernando', selected: false },
  ];

  const handleNamePress = (barber) => {
    const updatedBarbers = barbers.map((b) =>
      b.id === barber.id ? { ...b, selected: true } : { ...b, selected: false }
    );
    setSelectedBarber(barber);
    barbers = updatedBarbers;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o barbeiro</Text>
      {barbers.map((barber) => (
        <TouchableOpacity
          key={barber.id}
          style={[styles.button, selectedBarber && selectedBarber.id === barber.id && styles.buttonSelected]}
          onPress={() => handleBarberPress(barber)}
        >
          <Text
            style={[styles.buttonText, barber.selected && styles.buttonTextSelected]}
            onPress={() => handleNamePress(barber)}
          >
            {barber.name}
          </Text>
        </TouchableOpacity>
      ))}
      {selectedBarber ? (
        <TouchableOpacity
          style={[styles.button, { marginTop: 65 }]}
          onPress={() => console.log(`Barbeiro selecionado: ${selectedBarber.name}`)}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      ) : null}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 120,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSelected: {
    backgroundColor: '#0A353B',
  },
  buttonTextSelected: {
    color: '#FFFFFF',
  },
});

export default BarberScreen;
