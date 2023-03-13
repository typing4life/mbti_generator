import { Inter } from 'next/font/google'
import styles from './index.module.css'

const inter = Inter({ subsets: ['latin'] })

type TitleBoxProps = {
  title: string,
  description: string
}

export default function TitleBox({ title, description }: TitleBoxProps) {
  return (
    <div className={styles.center}>
      <div className={styles.card}>
        <h2 className={inter.className}>{title}</h2>
        <p className={inter.className}>{description}</p>
      </div>
    </div>
  )
}