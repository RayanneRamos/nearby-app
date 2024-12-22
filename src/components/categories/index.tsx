import { FlatList, Text } from "react-native";

export interface CategoriesProps {
  id: string;
  name: string;
}
[];

interface Props {
  data: CategoriesProps;
  selected?: string;
  onSelect: (id: string) => void;
}

export function Categories() {
  return <FlatList />;
}
