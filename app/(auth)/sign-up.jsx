import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { images } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";
import { createUser } from "../../lib/appwrite";

export default function SignUp() {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (!form.email || !form.password || !form.username) {
      Alert.alert("Ошибка", "Пожалуйста, заполните все поля");
    } else {
      setIsSubmitting(true);

      try {
        const result = await createUser(
          form.email,
          form.password,
          form.username,
        );

        setUser(result);
        setIsLoggedIn(true);

        router.replace("/home");
      } catch (error) {
        Alert.alert("Ошибка", error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

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
            Регистрация в Aora
          </Text>
          <FormField
            title="Имя пользователя"
            placeholder="Введите имя пользователя"
            value={form.username}
            wrapperClassName="mt-10"
            handleChange={(value) => setForm({ ...form, username: value })}
          />
          <FormField
            type="email"
            title="Email"
            placeholder="Введите вашу почту"
            value={form.email}
            wrapperClassName="mt-7"
            keyboardType="email-address"
            handleChange={(value) => setForm({ ...form, email: value })}
          />
          <FormField
            title="Пароль"
            placeholder="Введите ваш пароль"
            value={form.password}
            wrapperClassName="mt-7"
            handleChange={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Зарегистрироваться"
            containerClassName="mt-7"
            isLoading={isSubmitting}
            handlePress={onSubmit}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Уже есть аккаунт?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary-100"
            >
              Войти
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
