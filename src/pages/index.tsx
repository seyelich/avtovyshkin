import Title from 'antd/es/typography/Title'
import type { FC, PropsWithChildren } from 'react'
import styles from './index.module.css'

type TPageTemplateProps = {
  title: string
}

export const PageTemplate: FC<PropsWithChildren<TPageTemplateProps>> = ({ title, children }) => (
  <div className={styles.container}>
    <Title className={styles.title}>{title}</Title>
    {children}
  </div>
)
