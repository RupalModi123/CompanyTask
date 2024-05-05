import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VerifyMobileNumber from './VerifyMobileNumber';
import MobileNumberScreen from './MobileNumberScreen';
import MainContent from './MainContent';
import Course from './Course';
import Search from './Search';
import Message from './Message';
import Account from './Account';


const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
    const data = [
        { id: '1', image: require('../assets/images/flatlistImg.png'), heading: 'Nike Air Max 95', status: 'Trending Now', price: ' 230.00' },
        { id: '2', image: require('../assets/images/flatlistImg.png'), heading: 'Nike Air Max 95', status: 'Trending Now', price: ' 230.00' },
    ];

    return (
        <View style={styles.container}>
            
            <Tab.Navigator initialRouteName="MainContent">
                <Tab.Screen name="Home" component={MainContent} options={{ headerShown: false }}/>
                <Tab.Screen name="Course" component={Course} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Message" component={Message} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    upperView: {
        paddingHorizontal: 15,
        paddingTop: 80,
        marginBottom: 20,
    },
    upperText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 120,
        borderRadius: 15,
        marginVertical: 20,
    },
});

export default MainScreen;