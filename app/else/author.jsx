import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Author() {
  return (
    <SafeAreaView className="bg-primary h-full py-12">
      <Text className="text-white text-xl px-5">
        Автором даннго приложения является студент группы ИКБО-26-21, Илья
        Алексеев
      </Text>
    </SafeAreaView>
  );
}

export default Author;
