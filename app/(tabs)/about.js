import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

//otra manera de manejar el estado de los botones cuando los presionas es utilizar:
const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView className="pt-24 bg-black">
        <Link asChild href="/">
          <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link>
        {/*EJEMPLO UTILIZANDO styled <Link asChild href="/">
                <StyledPressable className={`active:opacity-20`}><HomeIcon/></StyledPressable>
            </Link> */}
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </ScrollView>
    </Screen>
  );
}
