import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewMainOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999'
  },
  titleOrder: {
    fontWeight: '600',
    fontSize: 16
  },
  priceOrder: {
    opacity: 0.7,
    fontSize: 16
  }
})