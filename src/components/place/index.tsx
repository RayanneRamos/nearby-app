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

export function Place({ data, ...props }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image style={styles.image} source={{ uri: data.cover }} />
      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {data.description}
        </Text>
        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
