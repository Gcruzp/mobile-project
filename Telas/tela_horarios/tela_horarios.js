import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';


function AvailableTimesScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [times, setTimes] = useState([
    { time: '09:00', selected: false },
    { time: '10:00', selected: false },
    { time: '11:00', selected: false },
    { time: '12:00', selected: false },
    { time: '13:00', selected: false },
    { time: '14:00', selected: false },
    { time: '15:00', selected: false },
    { time: '16:00', selected: false },
    { time: '17:00', selected: false },
    { time: '18:00', selected: false },
  ]);

  const handleTimePress = (index) => {
    const newTimes = [...times];
    newTimes.forEach((time, i) => {
      if (i === index) {
        time.selected = true;
      } else {
        time.selected = false;
      }
    });
    setTimes(newTimes);
  };

  const [showPicker, setShowPicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowPicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma data</Text>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.dateText}>
          {`${
            selectedDate.getDate().toString().padStart(2, '0')
          }/${
            (selectedDate.getMonth() + 1).toString().padStart(2, '0')
          }/${selectedDate.getFullYear()}`}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode={'date'}
          display="default"
          onChange={onChangeDate}
          maximumDate={new Date(2030, 11, 31)}
          minimumDate={new Date()}
        />
      )}
      <Text style={styles.title}>Horários disponíveis</Text>
      <View style={styles.timeContainer}>
        {times.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.timeButton, time.selected && styles.timeButtonSelected]}
            onPress={() => handleTimePress(index)}
            disabled={time.selected}
          >
            <Text style={[styles.timeButtonText, time.selected && styles.timeButtonTextSelected]}>{time.time}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    },
    timeButton: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    },
    timeButtonSelected: {
    backgroundColor: '#0A353B',
    },
    timeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    },
    timeButtonTextSelected: {
    color: '#FFFFFF',
    },
    confirmButton: {
    backgroundColor: '#0A353B',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    },
    confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    },
    });
    
    export default AvailableTimesScreen;
