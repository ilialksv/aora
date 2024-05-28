import { router } from "expo-router";
import { View, Text, Image } from "react-native";

import CustomButton from "./CustomButton";
import { images } from "../constants";

function EmptyState({ title, subtitle }) {
  return (
    <View className="flex justify-center w-full items-center px-4 pb-10">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[270px] h-[216px]"
      />

      <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {subtitle}
      </Text>

      <CustomButton
        title="Обратно"
        handlePress={() => router.push("/home")}
        containerClassName="w-full mt-5"
      />
    </View>
  );
}

export default EmptyState;
