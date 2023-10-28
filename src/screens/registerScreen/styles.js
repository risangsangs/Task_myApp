import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
    container: {
        paddingTop: normalize(30, "height"),
        paddingHorizontal: normalize(25, "width"),
        backgroundColor: palettes.default.contentPrimary,
        flex: 1
    },
    headerLogoTs: {
        width: 50,
        height: 50,
    },
    HeaderFont: {
        marginVertical: normalize(25, "height"),
        ...fonts.lgHeader,
        color: palettes.default.text,
    },
    formStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: palettes.default.strokePrimary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: palettes.default.bgTextInput
     },
     extraStyle: {
        ...fonts.md2,
        color: palettes.default.textPlaceholder
     },
     inputPasswordContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: palettes.default.strokePrimary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: palettes.default.bgTextInput
     },
     footerContainer: {
        marginTop: 35,
        gap: 10,
     },
     btnLogin: {
        backgroundColor: palettes.default.btnPrimary,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
     },
     txtBtnLogin: {
        ...fonts.md3,
        color: palettes.default.textBtn
     },
     separatorStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        gap: 8
     },
     separatorFont: {
        ...fonts.md2,
        color: palettes.default.textTertiary
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
        borderColor: palettes.default.strokePrimary,
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
        marginTop: normalize(20, "height")
     },
     confirmStyle: {
        ...fonts.md3,
        color: palettes.default.text
     },
     subHeaderFont: {
        ...fonts.md3,
        color: palettes.default.textTertiary
     },
});

export default styles;