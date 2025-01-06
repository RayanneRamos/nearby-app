import { Alert, Text } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

interface CouponUsedProps {
  id: string;
  usedAt: string;
}

export function CouponUsed() {
  const params = useLocalSearchParams<{ id: string }>();
  const [couponsAlreadyUsed, setCouponsAlreadyUsed] = useState<
    CouponUsedProps[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsedCoupons() {
    try {
      setIsLoading(true);

      const { data } = await api.get(`/coupons/${params.id}/used`);
      setCouponsAlreadyUsed(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro",
        "Não foi possível listar os cupons já utilizados nesse estabelecimento."
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUsedCoupons();
  }, [params.id]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cupons usados</Text>
      <View style={styles.infoContainer}>
        {couponsAlreadyUsed.length === 0 ? (
          <Text>Nenhum cupom usado ainda.</Text>
        ) : (
          couponsAlreadyUsed.map((coupon) => {
            const formattedDate = new Date(coupon.usedAt).toLocaleString(
              "pt-BR",
              {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }
            );
            const formattedTime = new Date(coupon.usedAt).toLocaleTimeString(
              "pt-BR",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            );

            const formattedDateTime = `${formattedDate} às ${formattedTime}`;
            return (
              <View key={coupon.id} style={styles.containerContent}>
                <IconTicket size={16} color={colors.green.light} />
                <Text style={styles.couponInfo}>{formattedDateTime}</Text>
              </View>
            );
          })
        )}
      </View>
    </View>
  );
}
