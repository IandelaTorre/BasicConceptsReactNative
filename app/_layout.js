import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { Logo } from "../components/Logo";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
