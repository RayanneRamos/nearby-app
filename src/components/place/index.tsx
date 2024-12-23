import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";

export interface PlaceProps {
  id: string;
  name: string;
  description: string;
  coupons: string;
  cover: string;
  address: string;
}

interface Props extends TouchableOpacityProps {
  data: PlaceProps;
}

export function Place() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>RocketBurger</Text>
        <Text style={styles.description}>
          Na compra de um combo SuperRocket, leve outro combo.
        </Text>
        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}>3 cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
