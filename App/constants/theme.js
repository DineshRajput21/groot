import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#0094e6",
    success: '#00C851',
    background: "#f5faff",
    error: '#ff4444',
    black: "#000000",
    white: "#FFFFFF",
    lightBg: '#dddce6',
    gray: '#808080',
    dimGray: '#A9A9A9',
    slateGray: '#dfefff',
    grayBg: '#f3f3f3',
    headingColor: '#777777'
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h0: 35,
    h1: 30,
    h2: 25,
    h3: 20,
    h4: 16,
    h5: 14,
    h6: 12,
    h7: 10,
    h8: 8,
    h9: 6,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Poppins-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h0: { fontFamily: "Poppins-Black", fontSize: SIZES.h0, lineHeight: 50 },
    h1: { fontFamily: "Poppins-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 28 },
    h3: { fontFamily: "Poppins-Bold", fontSize: SIZES.h3, lineHeight: 26 },
    h4: { fontFamily: "Poppins-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-Bold", fontSize: SIZES.h5, lineHeight: 20 },
    h6: { fontFamily: "Poppins-Bold", fontSize: SIZES.h6, lineHeight: 18 },
    h7: { fontFamily: "Poppins-Bold", fontSize: SIZES.h7, lineHeight: 18 },
    
    med0: { fontFamily: "Poppins-Medium", fontSize: SIZES.h0, lineHeight: 50 },
    med1: { fontFamily: "Poppins-Medium", fontSize: SIZES.h1, lineHeight: 36 },
    med2: { fontFamily: "Poppins-Medium", fontSize: SIZES.h2, lineHeight: 28 },
    med3: { fontFamily: "Poppins-Medium", fontSize: SIZES.h3, lineHeight: 26 },
    med4: { fontFamily: "Poppins-Medium", fontSize: SIZES.h4, lineHeight: 22 },
    med5: { fontFamily: "Poppins-Medium", fontSize: SIZES.h5, lineHeight: 20 },
    med6: { fontFamily: "Poppins-Medium", fontSize: SIZES.h6, lineHeight: 18 },
    med7: { fontFamily: "Poppins-Medium", fontSize: SIZES.h7, lineHeight: 18 },

    body0: { fontFamily: "Poppins-Regular", fontSize: SIZES.h0, lineHeight: 36 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.h1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.h2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.h3, lineHeight: 28 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.h4, lineHeight: 26 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.h5, lineHeight: 24 },
    body6: { fontFamily: "Poppins-Regular", fontSize: SIZES.h6, lineHeight: 24 },
    body7: { fontFamily: "Poppins-Regular", fontSize: SIZES.h7, lineHeight: 20 },
};