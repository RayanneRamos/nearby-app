import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginBottom: 8,
  },

  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[500],
  },

  infoContainer: {
    gap: 4,
  },

  containerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  couponInfo: {
    fontSize: 14,
    color: colors.gray[500],
  },
});
