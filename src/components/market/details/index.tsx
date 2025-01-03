import { Text, View } from "react-native";
import { Info } from "../info";
import {
  IconMapPin,
  IconPhone,
  IconTicket,
  IconToolsKitchen2,
} from "@tabler/icons-react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Coupon } from "@/components/coupon";

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
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <IconToolsKitchen2 size={24} color={colors.green.light} />
      </View>
      <Text style={styles.description}>{data.description}</Text>
      <Coupon data={data} />
      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={`+55 ${data.phone}`} />
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
