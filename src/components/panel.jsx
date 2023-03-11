import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Panel = (props = {}) => {

  return <div className={styles.panel + ' ' + inter.className}>
    {props.children}
  </div>
}

export default Panel