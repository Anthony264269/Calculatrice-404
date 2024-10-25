import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import TabLayout from './(tabs)/_layout';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
     <Drawer screenOptions={{ drawerPosition: 'right' }}>
        <Drawer.Screen
          name="index" 
          options={{
            drawerLabel: 'Garage404',
            title: 'Garage404',
          }}
        />
        <Drawer.Screen
          name="explore" 
          options={{
            drawerLabel: 'Calculatrice',
            title: 'Calculatrice',
          }}
        />
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerItemStyle: { display: 'none' },
          }}
        />
        <Drawer.Screen
          name="+not-found"
          options={{
            drawerItemStyle: { display: 'none' },
          }}
          />
      </Drawer>
    </GestureHandlerRootView>
  );
}
