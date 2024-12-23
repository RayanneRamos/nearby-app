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

export function Details({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>
        <Info
          icon={IconTicket}
          description={`${data.coupons} cupons disponíveis`}
        />
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Regulamento</Text>
        {data.rules.map((item) => {
          return (
            <Text
              key={item.id}
              style={styles.rule}
            >{`\u2022 ${item.description}`}</Text>
          );
        })}
      </View>
    </View>
  );
}
