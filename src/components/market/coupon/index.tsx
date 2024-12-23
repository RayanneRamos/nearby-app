import { IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function Coupon() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilize esse cupom</Text>
      <View style={styles.content}>
        <IconTicket size={24} color={colors.green.light} />
        <Text style={styles.code}>Código</Text>
      </View>
    </View>
  );
}
