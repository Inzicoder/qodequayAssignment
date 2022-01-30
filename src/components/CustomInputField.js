import React from 'react';
import {View, TextInput} from 'react-native';


const CustomInputField = props => {
  const ViewStyle = {
    height: 50,
    width: '70%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#4A274F',
  };

  const InputStyle = {
    width: '95%',
    height: 40,
    paddingLeft: 16,
    color: '#6D616F',
  };
  return (
    <View style={ViewStyle}>
      <TextInput
        value={props.value}
        style={InputStyle}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default CustomInputField;
