import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const ButtonFilled = props => {
  const buttonFilledStyle = {
    // flex: 1,
    borderRadius: 5,
    height: 50,
    width: '65%',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#041562',
  };
  const buttonTextStyle = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  };

  return (
    <>
      <TouchableOpacity
        style={buttonFilledStyle}
        onPress={props.onPress}>
        <Text style={buttonTextStyle}>{props.name}</Text>
      </TouchableOpacity>
    </>
  );
};
export default ButtonFilled;
