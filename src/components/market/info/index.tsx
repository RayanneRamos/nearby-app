import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

interface InfoProps {
  description: string;
  icon: React.ComponentType<IconProps>;
}

export function Info({ description, icon: Icon }: InfoProps) {
  return (
    <View style={styles.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}
