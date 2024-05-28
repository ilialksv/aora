import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

function Info() {
  return (
    <SafeAreaView className="bg-primary h-full py-12">
      <Link href="/else/instruction" className="text-white text-2xl underline">
        Инструкция
      </Link>
      <Link href="/else/author" className="text-white text-2xl underline">
        Об авторе
      </Link>
      <Link href="/else/about" className="text-white text-2xl underline">
        О приложении
      </Link>
    </SafeAreaView>
  );
}

export default Info;
