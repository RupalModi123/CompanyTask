import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import flatlistImg from '../assets/images/flatlistImg.png';
import processing from '../assets/images/processing.png';
import startingprocess from '../assets/images/startingprocess.png';

const MainContent = ({ navigation }) => {
    const data = [
        { id: '1', image: require('../assets/images/flatlistImg.png'), heading: 'Nike Air Max 95', status: 'Trending Now', price: ' 230.00' },
        { id: '2', image: require('../assets/images/flatlistImg.png'), heading: 'Nike Air Max 95', status: 'Trending Now', price: ' 230.00' },
    ];

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
        }}>
            <View style={{
                paddingHorizontal: 15,
                paddingTop: 80,
                marginBottom: 20
            }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Hi, Kristin</Text>
                <Text style={{ fontSize: 10, color: 'white' }}>Let's start learning</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10, position: 'relative', height: 45, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'grey', marginHorizontal: 15, marginVertical: 15, fontWeight: '200', fontSize: 12 }}>Learned today</Text>
                    <Text style={{ color: 'grey', marginHorizontal: 15, marginVertical: 15, fontWeight: '200', fontSize: 12 }}>My courses</Text></View>
            </View>

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16, marginLeft: 30 }}>46min</Text>
                    <Text style={{ color: 'grey', fontWeight: '200', fontSize: 10, top: 5 }}>/60min</Text>
                </View>
                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 14, marginHorizontal: 20, margin: 10 }}>What do you want to learn today?</Text>
                <View>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (

                            <TouchableOpacity onPress={() => handleProductItemClick(item)}>

                                <View style={styles.flatListItem}>

                                    <View style={{ alignItems: 'center' }}>
                                        <Image source={item.image} style={styles.image} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>


                <Text style={{ color: 'grey', fontWeight: '500', fontSize: 15, marginHorizontal: 20,marginTop:10 }}>Learning Plan</Text>

                <View style={{ paddingHorizontal: 30, shadowColor: 'grey', shadowOffset: 10, shadowOpacity: 30, shadowRadius: 10, borderRadius: 10, marginHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={processing} style={{ width: 20, height: 20 }} />
                            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15, left: 5 }}>Packaging Design</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'grey', fontWeight: '500', fontSize: 10, marginRight: 5 }}>40</Text>
                            <Text style={{ color: 'grey', fontWeight: '100', fontSize: 10 }}>/48</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={startingprocess} style={{ width: 20, height: 20 }} />
                            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15, left: 5 }}>Product Design</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#000000', fontWeight: '500', fontSize: 10, marginRight: 5 }}>6</Text>
                            <Text style={{ color: 'grey', fontWeight: '100', fontSize: 10 }}>/24</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, }}>
                    <Image source={flatlistImg} style={{ width: 300, height: 140, borderRadius: 10 }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 120,
        borderRadius: 15,
        marginLeft: 15,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    heartIcon: {
        height: 20,
        width: 20
    },
    headingText: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000000'
    },
});

export default MainContent;
