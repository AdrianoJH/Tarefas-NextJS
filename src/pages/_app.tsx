import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Header } from '@/components/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
