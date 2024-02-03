import { useEffect, useState } from 'react'
import { useSize } from 'hooks/useSize'
import { Flex, Tabs } from 'antd'
import Text from 'antd/es/typography/Text'
import { AutoCard } from 'components/AutoCard'
import { PageTemplate } from 'pages'
import { cars } from 'utils/constants'
import styles from './index.module.css'

export const MainPage = () => {
  const { width } = useSize()
  const [selectedEl, setSelectedEl] = useState(cars[0])

  useEffect(() => {
    document.title = 'Автовышкин - Главная'
  }, [])

  return (
    <PageTemplate title="ВЫБЕРИТЕ ВЫСОТУ АВТОВЫШКИ">
      {width > 600 ? (
        <>
          <Flex justify="center" style={{ width: '75%', margin: '0 auto 20px auto', position: 'relative' }}>
            {cars.map((el) => (
              <div onClick={() => setSelectedEl(el)} className={styles.container}>
                <p className={`${styles.circle} ${el.height === selectedEl.height && styles.circleActive}`}>
                  {el.height} м.
                </p>
              </div>
            ))}
          </Flex>
          <AutoCard key={selectedEl.height} item={selectedEl} grid={width > 600} />
        </>
      ) : (
        <Tabs
          centered
          items={cars.map((el) => ({
            key: el.height.toString(),
            children: <AutoCard key={el.height} item={el} grid={width > 600} />,
            label: (
              <div className={styles.label}>
                <Text strong>{el.height} м.</Text>
              </div>
            ),
          }))}
        />
      )}
    </PageTemplate>
  )
}
