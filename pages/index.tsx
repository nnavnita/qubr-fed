import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'
import Router from 'next/router'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qubr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" alt="logo" />

          <p style={{ width: "35%", textAlign: "justify", padding: "2rem 0" }}>
            Qubr provides a simple and intuitive interface to empower creators (just like you!) to create and publish NFT-backed digital assets with a single click.
          </p>

          <span style={{ width: "30%", display: "flex", justifyContent: "space-around" }}>
            <Button variant="contained" onClick={ () => Router.push('/app') }>Get Started</Button>
            <Button onClick={ () => Router.push('/about') }>Learn More</Button>
          </span>
      </main>
    </div>
  )
}

export default Home
