import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { useWindowDimensions } from "react-native";
import { styles } from "./styles";

export function Places() {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList />
    </BottomSheet>
  );
}
