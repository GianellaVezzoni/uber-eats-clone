import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalCheckoutContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    height: 850,
    borderWidth: 1,
    top: '20%'
  },
  restaurantNameText: { 
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    marginBottom: 10
  },
  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10
  },
  checkoutButtonView:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  touchableOpacityCheckout:{
    marginTop: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position:'relative'
  },
  checkoutTextButton:{
    color: '#FFF',
    fontSize: 20
  },
  priceCheckoutButton:{
    position: 'absolute',
    right: 20,
    color: '#FFF',
    fontSize: 15,
    top: 17
  },
  viewMainContainerViewCart:{
    flex: 1, 
    alignItems: 'center', 
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 80, 
    zIndex: 999
  },
  viewSubContainerViewCart:{
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  touchableButtonOpacityViewCart: {
    marginTop: 20, 
    backgroundColor: '#000', 
    alignItems: 'center', 
    padding: 13,
    borderRadius: 30,
    width: 300, 
    position: 'absolute'
  },
  viewLottieContainer:{
    backgroundColor: '#000',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
})