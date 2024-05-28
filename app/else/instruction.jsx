import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Instruction() {
  return (
    <SafeAreaView className="bg-primary h-full py-12">
      <Text className="text-white text-xl px-5">
        На главной странице можно увидеть последние загруженные видео, а также
        использоватеть строку поиска, чтобы найти видео, интересующие вас
      </Text>
      <Text className="text-white text-xl px-5 mt-10">
        На странице добавление видео, вы можете загрузить свое видео. Для этого
        необходимо само видео, его обложка, заголовок, а также промпт, который
        был использован для его генерации. Все поля являются обязательными
      </Text>
      <Text className="text-white text-xl px-5 mt-10">
        На странице профиля вы можете выйти из аккаунта, а также увидеть все
        видео, которые загрузили именно вы
      </Text>
    </SafeAreaView>
  );
}

export default Instruction;
