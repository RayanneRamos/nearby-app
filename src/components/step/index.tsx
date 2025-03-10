import { colors } from "@/styles/colors";
import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface StepProps {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
}

export function Step({ title, description, icon: Icon }: StepProps) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
