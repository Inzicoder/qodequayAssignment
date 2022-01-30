import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Navbar() {

  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        name="chevron-left"
        style={styles.backIcon}
      />
      <MaterialIcons name="menu" style={styles.menuIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#041562',
    height: Dimensions.get('screen').height * 0.08,
    width:  Dimensions.get('screen').width ,
    justifyContent: 'center',
    alignContent: 'center',
  },
  backIcon: {
    color: '#FFF',
    fontSize: 20,
    borderRadius: 50,
    alignSelf: 'flex-start',
    // backgroundColor: '#FFF',
  },
  menuIcon: {
    alignSelf: 'flex-end',
    color: '#FFF',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
