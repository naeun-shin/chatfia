import "@/styles/globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import type { AppProps } from "next/app";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-notosanskr",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <main className={notoSansKr.variable}>
        <Head>
          <title>Chatfia | 챗피아</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <Toaster />
      </main>
    </QueryClientProvider>
  );
}
