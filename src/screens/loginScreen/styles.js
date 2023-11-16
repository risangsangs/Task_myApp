import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
   container: {
      paddingTop: normalize(30, "height"),
      paddingHorizontal: normalize(25, "width"),
      backgroundColor: '#FFFFFF',
      flex: 1
   },
   logoTs: {
      width: 50,
      height: 50,
   },
   headerTitle: {
      marginVertical: normalize(25, "height"),
   },
   headerFont: {
      fontSize: 30,
      fontFamily: "Urbanist_600SemiBold",
      color: '#000000',
   },
   formStyle: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#E8ECF4',
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#F7F8F9'
   },
   extraStyle: {
      fontSize: 14,
      fontFamily: "Urbanist_500Medium",
      color: '#8391A1'
   },
   inputPasswordContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#E8ECF4',
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#F7F8F9'
   },
   subHeaderFont: {
      fontSize: 14,
      fontFamily: "Urbanist_600SemiBold",
      color: '#6A707C'
   },
   footerContainer: {
      marginTop: 35,
      gap: 10,
   },
   btnLogin: {
      backgroundColor: '#1E232C',
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
   },
   txtBtnLogin: {
      fontSize: 14,
      fontFamily: "Urbanist_600SemiBold",
      color: '#FFFFFF'
   },
   separatorStyle: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 15,
      gap: 8
   },
   separatorFont: {
      fontSize: 14,
      fontFamily: "Urbanist_500Medium",
      color: '#6A707C'
   },
   btnSecondaryContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 5,
   },
   btnSecondary: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#E8ECF4',
      width: 75,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
   },
   btnSecondaryImage: {
      width: 24,
      height: 24,
   },
   confirmContainer: {
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      marginTop: normalize(75, "height")
   },
   confirmStyle: {
      fontSize: 14,
      fontFamily: "Urbanist_600SemiBold",
      color: '#000000'
   }
});

export default styles;