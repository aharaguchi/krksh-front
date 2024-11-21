'use client'
import { extendTheme } from "@chakra-ui/react";

const autumnTheme = extendTheme({
    colors: {
        autumnBlue: {
            100: "#F2F8FF",
            200: "#BBDDFF",
            300: "#84C7FE",
            400: "#4DB8FD",
            500: "#16AEFA",
            600: "#0791C5",
            700: "#027190",
            800: "#004D5B",
            900: "#002226",
        },
        autumnOrange: {
            100: "#FFF9F2",
            200: "#FFE4C8",
            300: "#FBC79C",
            400: "#F2A26E",
            500: "#E07641",
            600: "#B2471F",
            700: "#83280F",
            800: "#551408",
            900: "#260703",
        },
        autumnGrey: {
            100: "#FAFBFC",
            200: "#E4E7EA",
            300: "#CFD3D7",
            400: "#BAC0C5",
            500: "#A6AEB3",
            600: "#848C8F",
            700: "#636A6C",
            800: "#434849",
            900: "#222626",
        },
    }

})

export default autumnTheme;