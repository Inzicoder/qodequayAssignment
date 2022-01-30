/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    SafeAreaView,
    RefreshControl
} from 'react-native';
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import Navbar from '../components/Navbar';

export default function TaskScreen() {
    const [characterDetails, setCharacterDetails] = React.useState([]);
    const [loader, showLoader] = React.useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    React.useEffect(() => {
        FetchApi();
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
        setRefreshing(false)
        FetchApi()
    });
  }, []);

    async function FetchApi() {
        await Axios.get('https://gorest.co.in/public/v1/users')
            .then(result => {
                // console.log(result.data.data);
                showLoader(false);
                setCharacterDetails(result.data.data);
                setRefreshing(false)
                console.log(characterDetails, 'character---------------------------------------------------------');
            })
            .catch(error => {
                console.log(error)
                setRefreshing(false)
            });
    }

    console.log(characterDetails);

    return (
        <SafeAreaView style={{backgroundColor:'#FFFF'}}>
     
      
        <ScrollView 
         refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
             <Navbar />

             <View style={{margin:'5%'}}>
             <Text style={styles.idText}>
                Tasks
            </Text>
           
            <Text style={{color:'#CACACA'}}>
                Search Results
            </Text>
             </View>
           
            {loader ? (
                <ActivityIndicator />
            ) : (
                <ScrollView>
                    {characterDetails && characterDetails.map((item, index) => (
                        <TouchableOpacity
                            style={
                            styles.cards
                            }>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'100%' }}>
                                <Text style={styles.idText}>
                                    #{item.id}
                                </Text>
                                {item.status === 'active' ?  <Icon name="check" style={styles.checkIcon} /> :
                                <Icon name="close" style={styles.crossIcon} />
                                }
                               
                                
                            </View>

                            <Text style={styles.nameText}>
                                {item.name}
                            </Text>

                            <Text style={{color:'#072227'}}>
                                Email : {item.email}
                            </Text>

                            <Text style={{color:'#072227'}}>
                                Gender :{item.gender}
                            </Text>

                            <View style={{ alignSelf: 'flex-end',justifyContent:'space-between' }}>
                                
                                <Text style={{
                                    color: item.status === 'active' ? 'green' : 'red'
                                }}>
                                     {item.status}
                                </Text>
                            </View>
                        </TouchableOpacity>


                    ))}
                </ScrollView>
            )}
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cards: {
        flexDirection: 'column',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
        marginBottom: 10,
        borderRadius: 5,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#000',
        shadowRadius: 0.8,
        elevation: 10,
        shadowOpacity: 0.4,
        backgroundColor: '#F7F6F2',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000'
    },
    idText: {
        color: '#041562',
        fontSize: 18,
        fontWeight: 'bold',
    },
    statusText: {
        color: 'green'
    },
    checkIcon: {
        color: '#FFF',
        fontSize: 18,
          backgroundColor:'green',
        borderRadius: 50,
      
    },
    crossIcon: {
        color: '#FFF',
        fontSize: 18,
        backgroundColor:'red',
        borderRadius: 40,
      
    }
});
