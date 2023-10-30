// utils/clipboard.ts
export const copyToClipboard = (textToCopy: string) => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(textToCopy);
  }
};
