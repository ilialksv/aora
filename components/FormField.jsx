import { useState } from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";

import { icons } from "../constants";

export default function FormField({
  type,
  title,
  placeholder,
  value,
  wrapperClassName,
  handleChange,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${wrapperClassName}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full flex-row h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base w-full h-full"
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
