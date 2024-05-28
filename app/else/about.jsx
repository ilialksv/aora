import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function About() {
  return (
    <SafeAreaView className="bg-primary h-full py-12">
      <Text className="text-white text-xl px-5">
        Главной целью данного приложения - дать пользователям возможность
        делиться сгенерированными с помощью ИИ.
      </Text>
      <Text className="text-white text-xl px-5 mt-10">
        Кто угодно может зарегистрироваться, загружать свои сгенерированные
        видео, информацию о них и просматривать видео, сгенерированные другими
        пользователями.
      </Text>
    </SafeAreaView>
  );
}

export default About;
