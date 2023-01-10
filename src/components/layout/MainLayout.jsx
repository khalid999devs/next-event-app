import Head from 'next/head'
import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Events app</title>
        <meta name='description' content='A simple event app for practice' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
