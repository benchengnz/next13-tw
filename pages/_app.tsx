import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UsernameProvider } from "@/contexts/UsernameContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UsernameProvider>
      <Component {...pageProps} />
    </UsernameProvider>
  );
}
