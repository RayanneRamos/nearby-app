import { Text, View } from "react-native";
import { styles } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";
import { DetailsProps } from "../market/details";

interface CouponProps {
  data: DetailsProps;
}

export function CouponAvailable({ data }: CouponProps) {
  return (
    <View style={styles.couponContainer}>
      <IconTicket size={24} color={colors.red.base} />
      <View style={styles.couponNameContainer}>
        <Text style={styles.couponQuantity}>{data.coupons}</Text>
        <Text style={styles.couponName}>cupons disponíveis</Text>
      </View>
    </View>
  );
}
