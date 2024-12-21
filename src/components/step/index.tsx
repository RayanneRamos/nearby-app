import { colors } from "@/styles/colors";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function Step() {
  return (
    <View>
      <View style={styles.container}>
        <IconMapPin size={32} color={colors.red.base} />
        <View style={styles.details}>
          <Text style={styles.title}>Encontre estabelecimentos</Text>
          <Text style={styles.description}>
            Veja os locais perto de você que são parceiros Nearby
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <IconQrcode size={32} color={colors.red.base} />
        <View style={styles.details}>
          <Text style={styles.title}>Ative o cupom com QR Code</Text>
          <Text style={styles.description}>
            Escaneie o código no estabelecimento para usar o benefício
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <IconTicket size={32} color={colors.red.base} />
        <View style={styles.details}>
          <Text style={styles.title}>Garanta as vantagens perto de você</Text>
          <Text style={styles.description}>
            Ative cupons onde estiver, em diferentes tipos de estabelecimento
          </Text>
        </View>
      </View>
    </View>
  );
}
