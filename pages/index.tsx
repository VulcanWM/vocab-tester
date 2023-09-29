import Layout from '@/components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div id="content">
        <Link href="/german">German</Link><br/>
        <Link href="/latin">Latin</Link>
      </div>
    </Layout>
  )
}