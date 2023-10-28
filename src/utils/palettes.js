import { Platform } from "react-native";

export const palettes = {
    default: {
        text: "#000000",
        textSecondary: "#020001",
        textTertiary: "#6A707C",
        textBtn: "#FFFFFF",
        textPlaceholder: "#8391A1",
        contentPrimary: "#FFFFFF",
        contentSecondary: "#E0DFDD",
        strokePrimary: "#E8ECF4",
        btnPrimary: "#1E232C",
        bgTextInput: "#F7F8F9"
    },
};

const selectedPalettes = Platform.select({
    ios: palettes.default,
    android: palettes.default,
    default: palettes.default,
});

export default selectedPalettes;