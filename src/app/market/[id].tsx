import { Button } from "@/components/button";
import { Cover } from "@/components/market/cover";
import { Details, DetailsProps } from "@/components/market/details";
import { CameraView } from "expo-camera";
import { Modal, ScrollView, StatusBar, StyleSheet, View } from "react-native";

export interface MarketIdProps extends DetailsProps {
  cover: string;
}

export default function Market() {
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
