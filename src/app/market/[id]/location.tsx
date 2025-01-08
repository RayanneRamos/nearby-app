import { Button } from "@/components/button";
import { colors } from "@/styles/colors";
import {
  IconArrowLeft,
  IconMapPin,
  IconPhone,
  IconTicket,
  IconToolsKitchen,
} from "@tabler/icons-react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { api } from "@/services/api";
import { MarketIdProps } from "../[id]";

interface LocationProps {
  latitude: number;
  longitude: number;
}

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
};

export default function Location() {
  const params = useLocalSearchParams<{ id: string }>();
  const [data, setData] = useState<MarketIdProps>();

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`);
      setData(data);
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível encontrar a localização do estabelecimento.",
        [{ text: "Ok", onPress: () => router.back() }]
      );
    }
  }

  useEffect(() => {
    fetchMarket();
  }, [params.id]);

  return (
    <View style={styles.container}>
      <View>
        <Button style={styles.backButton} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("@/assets/pin.png")}
        />
      </MapView>
      <View style={styles.infoBox}>
        <View style={styles.infoHeader}>
          <View style={styles.infoContent}>
            <Text style={styles.infoName}>{data?.name}</Text>
            <IconToolsKitchen size={24} color={colors.green.light} />
          </View>

          <View style={styles.infoTicket}>
            <IconTicket size={20} color={colors.red.base} />
            <Text style={styles.infoTicketQuantity}>{data?.coupons}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoAddress}>
            <IconMapPin size={16} color={colors.gray[500]} />
            <Text style={styles.address}>{data?.address}</Text>
          </View>
          <View style={styles.infoPhone}>
            <IconPhone size={16} color={colors.gray[500]} />
            <Text style={styles.phone}>+55 {data?.phone}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cecece",
  },

  backButton: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 12,
  },

  mapView: {
    flex: 1,
  },

  infoBox: {
    position: "absolute",
    bottom: 28,
    left: 12,
    right: 12,
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    gap: 8,
    paddingBottom: 20,
  },

  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  infoName: {
    fontSize: 20,
    color: colors.gray[600],
    fontWeight: 600,
  },

  infoTicket: {
    flexDirection: "row",
    alignItems: "center",
    width: 52,
    height: 34,
    backgroundColor: colors.red.light,
    padding: 6,
    borderRadius: 8,
    gap: 4,
  },

  infoTicketQuantity: {
    color: colors.gray[600],
    fontSize: 16,
  },

  info: {
    paddingTop: 12,
    gap: 8,
  },

  infoAddress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  address: {
    color: colors.gray[500],
    fontSize: 14,
  },

  infoPhone: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  phone: {
    color: colors.gray[500],
    fontSize: 14,
  },
});
