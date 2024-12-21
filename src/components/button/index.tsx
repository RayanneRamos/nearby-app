import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Children, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}
