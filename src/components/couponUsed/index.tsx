import { Text } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

export function CouponUsed() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cupons usados</Text>
      <View style={styles.infoContainer}>
        <View style={styles.containerContent}>
          <IconTicket size={16} color={colors.green.light} />
          <Text style={styles.couponInfo}>26/09/24 às 21:32</Text>
        </View>
        <View style={styles.containerContent}>
          <IconTicket size={16} color={colors.green.light} />
          <Text style={styles.couponInfo}>14/08/24 às 20:56</Text>
        </View>
      </View>
    </View>
  );
}
