import * as React from 'react';
import {View, Text, StyleSheet, Dimensions,Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import ButtonFilled from '../components/ButtonFilled';
import CustomInputField from '../components/CustomInputField';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TaskScreen from './TaskScreen';
import qodequayLogo from '../assets/qodequayLogo.jpg'

export default function SignIn() {
  const [nextScreen, setNextScreen] = React.useState(false);

  return (
    <View style={styles.container}>
      {nextScreen ? (
        <TaskScreen />
      ) : (
        <>
    
          <Image source={qodequayLogo} style={styles.image}/>
          <Text style={styles.headerText}>Email Address</Text>
          <View style={styles.textInputContainer}>
            <MaterialIcons name="email" style={styles.icon} />
            <CustomInputField placeholder="Email" />
          </View>
          <Text style={{ color :'#072227'}}>Password</Text>
          <View style={styles.textInputContainer}>
            <Icon name="lock" style={styles.icon} />
            <CustomInputField placeholder="password" secureTextEntry={true} />
          </View>
          <Text  style={{ color :'#072227'}} >Forgot Password ?</Text>
          <ButtonFilled name="Login" onPress={() => setNextScreen(true)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    height:120,
    width:180,
   paddingVertical: 40,
   margin:'10%'
  },
  textInputContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // backgroundColor:'red',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color :'#072227'
  },
  icon: {
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
    // backgroundColor:'green',
    
  },
});
