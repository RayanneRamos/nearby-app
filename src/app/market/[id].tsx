import { Button } from "@/components/button";
import { Cover } from "@/components/market/cover";
import { Details, DetailsProps } from "@/components/market/details";
import { api } from "@/services/api";
import { CameraView } from "expo-camera";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

export interface MarketIdProps extends DetailsProps {
  cover: string;
}

export default function Market() {
  const [data, setData] = useState<MarketIdProps>();
  const [isLoading, setIsLoading] = useState(true);
  const params = useLocalSearchParams<{ id: string }>();

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro",
        "Não foi possível carregar os detalhes do estabelecimento.",
        [{ text: "Ok", onPress: () => router.back() }]
      );
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={""} />
        <Details data={[]} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>
      <Modal style={styles.modal}>
        <CameraView />
        <View>
          <Button>
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    padding: 32,
  },

  modal: {
    flex: 1,
  },
});
