// types/expo-document-picker.d.ts
declare module "expo-document-picker" {
  export interface DocumentResult {
    type: "cancel" | "success";
    name?: string;
    size?: number;
    uri?: string;
    mimeType?: string;
    // Add other properties if needed based on the Expo DocumentPicker documentation
  }

  export function getDocumentAsync(options?: {
    type?: string[];
    multiple?: boolean;
  }): Promise<DocumentResult>;
}
