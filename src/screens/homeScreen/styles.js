import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
    container: {
        paddingTop: normalize(50, "height"),
        paddingHorizontal: normalize(30, "width"),
        backgroundColor: palettes.default.contentSecondary,
        flex: 1,
    },
    headerTitle: {
        ...fonts.lgGiantTitle,
        color: palettes.default.text,
        marginTop: 25
    },
    headerProfile: {
        width: 300,
        height: 100,
    },
    headerAboutGroup: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginTop: 25
    },
    headerAboutPurpose: {
        width: 125,
        ...fonts.cst01,
        color: palettes.default.text,
    },
    headerAboutName: {
        ...fonts.lgSubGiant,
        textAlign: "right"
    },
    scrollNotif: {
        flexDirection: "row",
        marginTop: 25,
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between"
    },
    scrollNotifImg: {
        width: 65,
        height: 65,
        backgroundColor: palettes.default.contentPrimary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollNotifText: {
        ...fonts.cst01,
        width: 150,
        textAlign: "right"
    },
    projectTitleContainer: {
        marginTop: 25,
        ...fonts.lgSubTitle,
        color: palettes.default.text
    },
    projectContainer: {
        paddingVertical: 20,
    },
    projectImage: {
        width: "100%",
        height: 175,
    },
    descContainer: {
        marginTop: 10,
        gap: 3,
    },
    titleProject: {
        ...fonts.md4,
        color: palettes.default.text
    },
    descProject: {
        ...fonts.md2,
        color: palettes.default.text
    },
    projectBtn: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    projectBtnText: {
        ...fonts.md3,
        textDecorationLine: 'underline',
    },
    footerContainer: {
        flexDirection: "row",
        paddingBottom: 25,
        justifyContent: "space-between",
        alignItems: "center",
    },
    footer: {
        borderWidth: 1,
        borderColor: palettes.default.contentPrimary,
        width: 75,
        height: 35,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        ...fonts.md3,
        color: palettes.default.text,
    }
});

export default styles;