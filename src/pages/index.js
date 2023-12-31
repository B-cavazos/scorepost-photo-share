import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Feed from '@/components/Feed'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}, overflow-y-scroll scrollbar-hide`}
    >
      <Head>
        <title>ScorePost</title>
        <Link rel="icon" href="public/favicon.ico"></Link>
      </Head>
      {/* HEADER */}
      <Header />
      {/* FEED */}
      <Feed />
      {/* MODAL */}
      <Modal/>
    </main>
  )
}
