import { FlatList, Text } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

export interface CategoriesProps {
  id: string;
  name: string;
}

interface Props {
  data: CategoriesProps[];
  selected?: string;
  onSelect: (id: string) => void;
}

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  );
}
