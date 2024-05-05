import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Header from './Header';
import ProductView from './ProductView';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTab,setSelectedTab] = useState('Shoes')

const handleTabPress = (tabIndex) => {
  setSelectedTab(tabIndex === 1 ? 'Shoes' : 'All');
  setActiveTab(tabIndex);
};

  return (
    <ScrollView style={{flex:1,backgroundColor:'#eeeee4'}}>
      <Header/>
      <View><Text style={{fontSize:20,fontWeight:'bold',color:'#000000',margin:10}}><Text>Categories</Text></Text></View>
    <View style={styles.container}>

      <TouchableOpacity
        style={[styles.tab, activeTab === 0 && styles.activeTab]}
        onPress={() => handleTabPress(0)}
      >
        <Text style={styles.tabText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 1 && styles.activeTab]}
        // onPress={() => [handleTabPress(1), console.log( handleTabPress(0),'handletab onclick......')]}
        onPress={() => handleTabPress(1)}
      >
        <Text style={[styles.tabText,{color:selectedTab}]}>Shoes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 2 && styles.activeTab]}
        onPress={() => handleTabPress(2)}
      >
        <Text style={styles.tabText}>Clothes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 3 && styles.activeTab]}
        onPress={() => handleTabPress(3)}
      >
        <Text style={styles.tabText}>Watches</Text>
      </TouchableOpacity>


    </View>
    <View style={{flex:1}}>
    {selectedTab === 'Shoes' && <ProductView />}

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: 'orange',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Home;