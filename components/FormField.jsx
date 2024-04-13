import { useState } from "react";
import { Text, TextInput, View } from "react-native";

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
      <Text className="text-base text-gray-100 font-pmedium">Form field</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base w-full h-full"
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#7b7b8b"
          onChange={handleChange}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
      </View>
    </View>
  );
}
