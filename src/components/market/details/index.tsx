import { Text, View } from "react-native";
import { Info } from "../info";
import { IconMapPin, IconPhone, IconTicket } from "@tabler/icons-react-native";
import { styles } from "./styles";

export interface DetailsProps {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
}

interface Props {
  data: DetailsProps;
}

export function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome</Text>
      <Text style={styles.description}>Descrição</Text>
      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>
        <Info icon={IconTicket} description="3 cupons disponíveis" />
        <Info icon={IconMapPin} description="Rua abc 10" />
        <Info icon={IconPhone} description="999999999" />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Regulamento</Text>
        <Text style={styles.rule}>Descrição</Text>
      </View>
    </View>
  );
}
