// types/react-native-appearance.d.ts
declare module "react-native-appearance" {
  import { ColorSchemeName } from "react-native";

  export interface AppearancePreferences {
    colorScheme: ColorSchemeName;
  }

  export class Appearance {
    static getColorScheme(): ColorSchemeName;
    static addChangeListener(
      listener: (preferences: AppearancePreferences) => void
    ): { remove: () => void };
    static removeChangeListener(
      listener: (preferences: AppearancePreferences) => void
    ): void;
  }

  export const AppearanceProvider: React.ComponentType;
}
