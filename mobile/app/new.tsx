import { Switch, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";

import NLWLogo from "../src/assets/nlw-spacetime-logo.svg";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <View
      className="flex-1 px-8"
      style={{
        paddingBottom: bottom,
        paddingTop: top,
      }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <NLWLogo />

        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch />
        </View>
      </View>
    </View>
  );
}