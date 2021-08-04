import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Text, Box, extendTheme, FlatList } from 'native-base';
import AppDrawer from './components/appDrawer';
import MainTabView from './components/tabView';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ]
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#312e81" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
      {/* <FlatList
      data={data}
      renderItem={({ item }) => (
        <Box px={5} py={2} rounded="md" my={2} bg="lightBlue.900">
          {item.title}
        </Box>
      )}
      keyExtractor={(item) => item.id}
    /> */}
      {/* <AppDrawer/> */}
      <MainTabView />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
