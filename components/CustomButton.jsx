import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  title,
  containerClassName,
  textStyles,
  isLoading,
  handlePress,
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerClassName} ${isLoading ? "opacity-50" : ""}`}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
