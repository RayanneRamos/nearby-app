import { IconTicket } from "@tabler/icons-react-native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

interface CouponProps {
  code: string;
}

export function Coupon({ code }: CouponProps) {
  async function handleCopyCouponToClipboard() {
    await Clipboard.setStringAsync(code);
    Alert.alert("Sucesso", "Cupom copiado para a àrea de transferência.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilize esse cupom</Text>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={handleCopyCouponToClipboard}
          activeOpacity={0.8}
          style={styles.buttonClipboard}
        >
          <IconTicket size={24} color={colors.green.light} />
          <Text style={styles.code}>{code}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
