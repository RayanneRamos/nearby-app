import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { Children, ReactNode } from "react";
import { colors } from "@/styles/colors";
import { TextProps } from "react-native-svg";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: false;
}

function Button({ children, style, isLoading = false, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[(styles.container, style)]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
