import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const MyTextInput = ({defaultValue,placeholder}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.input,
        isFocused ? styles.focused : null,
      ]}
      defaultValue = {defaultValue}
      placeholder = {placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 20,
    marginTop: 15,
    marginBottom: 35,
    padding:10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  focused: {
    borderColor: 'green',
    borderWidth: 2
  },
});

export default MyTextInput;