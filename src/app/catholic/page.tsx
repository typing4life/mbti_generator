import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import TitleBox from '@/components/main/TitleBox'
import catholicData from '@/data/catholic/index.json';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <iframe
          src="https://ads-partners.coupang.com/widgets.html?id=647802&template=carousel&trackingCode=AF5306385&subId=&width=375&height=70"
          width="375"
          height="70"
          referrerPolicy="unsafe-url"
        />
      </div>

      <TitleBox
        title={catholicData.main.title}
        description={catholicData.main.description} />

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
