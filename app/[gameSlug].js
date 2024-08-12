import { useState } from "react";
import { Link, Stack } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { gameSlug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameSlug) {
        getGameDetails(gameSlug).then(setGameInfo);
    }
  }, [gameSlug]);
  return (
    <Screen>
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#ffee00'},
            headerTintColor: "black",
            headerLeft: () =>{},
            headerTitle: gameInfo === null ? "" : gameInfo.title,
            headerRight: () => {}
          }}/>
      <View>
        {
            gameInfo === null ? (
                <ActivityIndicator color={"#fff"} size={"large"} />
            ) : (
                <ScrollView>
                    <View className="justify-center items-center text-center">
                    <Image
                        className="mb-4 rounded"
                        source={{uri: gameInfo.img }}
                        style={{width: 214, height: 294 }} 
                    />
                    <Score score={gameInfo.score} maxScore={100} />
                    <Text className="text-white font-bold mb-8 text-2xl">
                        {gameInfo.title}
                    </Text>
                    <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                        {gameInfo.description}
                    </Text>
                    </View>
                </ScrollView>
            )
         }
      </View>
    </Screen>
  );
}
