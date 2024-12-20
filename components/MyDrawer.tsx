import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IndexScreen from '@/app/index'; // Assurez-vous que le chemin est correct.
import ExploreScreen from '@/app/explore'; // Assurez-vous que le chemin est correct.

// Création du Drawer Navigator
const Drawer = createDrawerNavigator();

// Composant MyDrawer
export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={IndexScreen} options={{ title: 'Home' }} />
      <Drawer.Screen name="Settings" component={ExploreScreen} options={{ title: 'Settings' }} />
    </Drawer.Navigator>
  );
}
