import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FormField from "../../components/FormField";
import { images } from "../../constants";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6 h-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10">
            Log in to Aora
          </Text>
          <FormField
            type="email"
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            wrapperClassName="mt-7"
            handleChange={(e) =>
              setForm({ ...form, email: e.currentTarget.value })
            }
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            wrapperClassName="mt-7"
            handleChange={(e) =>
              setForm({ ...form, password: e.currentTarget.value })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
