import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
      <Head>
        <title>ScorePost</title>
        <Link rel="icon" href="public/favicon.ico"></Link>
      </Head>
      {/* HEADER */}
      <Header />
      {/* FEED */}
      {/* MODAL */}
    </main>
  )
}
