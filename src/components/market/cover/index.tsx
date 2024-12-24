import { Button } from "@/components/button";
import { ImageBackground, View } from "react-native";
import { styles } from "./styles";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";

interface CoverProps {
  uri: string;
}

export function Cover({ uri }: CoverProps) {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={styles.button} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
}
