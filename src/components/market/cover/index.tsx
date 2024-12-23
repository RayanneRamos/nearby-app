import { Button } from "@/components/button";
import { ImageBackground, View } from "react-native";
import { styles } from "./styles";
import { IconArrowLeft } from "@tabler/icons-react-native";

interface CoverProps {
  uri: string;
}

export function Cover({ uri }: CoverProps) {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 40, height: 40 }}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
}
