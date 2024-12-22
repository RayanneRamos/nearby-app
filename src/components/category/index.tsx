import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/colors";

interface CategoryProps extends PressableProps {
  iconId: string;
  isSelected?: boolean;
  name: string;
}

export function Category({
  iconId,
  isSelected = false,
  name,
  ...props
}: CategoryProps) {
  const Icon = categoriesIcons[iconId];

  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...props}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>
        {name}
      </Text>
    </Pressable>
  );
}
