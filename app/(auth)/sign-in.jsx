import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { images } from "../../constants";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6 min-h-[85vh]">
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
          <CustomButton
            title="Login"
            containerClassName="mt-7"
            isLoading={isSubmitting}
            handlePress={onSubmit}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don&apos;t have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary-100"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
