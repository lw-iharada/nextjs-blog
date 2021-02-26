import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Profile from '../../lib/profile'

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>

        <Profile id="1" />

        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    )
  }