import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const { id } = useLocalSearchParams<{id: string}>();
  console.log("Listing with id:", id);
  return (
    <View>
      <Text>Page details</Text>
    </View>
  );
};

export default Page;
