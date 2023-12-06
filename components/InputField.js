// InputField.js
import React from 'react';
import { TextInput, View, Text, Switch, StyleSheet } from 'react-native';

const InputField = ({
  label,
  value,
  onChangeText,
  isSwitchOn,
  onSwitchChange,
}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
      <Text>{isSwitchOn ? 'Square Meters' : 'Square Feet'}</Text>
      <Switch value={isSwitchOn} onValueChange={onSwitchChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 5,
  },
});

export default InputField;
