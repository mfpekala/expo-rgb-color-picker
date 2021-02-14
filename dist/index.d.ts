import React from "react";
import { ViewStyle } from "react-native";
interface Props {
    containerStyle?: ViewStyle;
    previewStyle?: ViewStyle;
    barStyle?: ViewStyle;
    ballStyle?: ViewStyle;
    initialBaseSlider?: number;
    initialBase?: [number, number, number];
    onBaseSlider?: (slide: number) => void;
    onBase?: (base: [number, number, number]) => void;
    initialColorSlider?: number;
    initialColor?: [number, number, number];
    onColorSlider?: (slide: number) => void;
    onColor?: (color: [number, number, number]) => void;
}
declare const RgbColorPicker: React.FC<Props>;
export { RgbColorPicker };
