import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  couponContainer: {
    backgroundColor: colors.red.light,
    padding: 8,
    borderRadius: 8,
    marginBottom: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  couponNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  couponQuantity: {
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
  },

  couponName: {
    fontSize: 14,
    color: colors.gray[600],
  },
});
