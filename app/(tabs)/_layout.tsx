import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon-semi",
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='travel-explore' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='wishlist'
        options={{
          tabBarLabel: "Wishlist",
          tabBarIcon: ({ color, size }) => (
            <Octicons name='heart' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='trips'
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name='paper-plane' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='inbox'
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='all-inbox' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Octicons name='person' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;
