import { InfoCircleOutlined, UpCircleOutlined } from '@ant-design/icons'
import { Card, Flex } from 'antd'
import { CustomButton } from 'components/CustomButton'
import { Link } from 'react-router-dom'
import { getHeight } from 'utils'
import ruble from 'assets/images/roubleIcon.svg'
import weight from 'assets/images/iconWeight.svg'
import type { TCar } from 'utils/constants'
import styles from './index.module.css'

type TAutoCardProps = {
  item: TCar
  grid?: boolean
}

export const AutoCard = ({ item, grid }: TAutoCardProps) => {
  const blocks = [
    <Link
      style={{
        maxWidth: grid ? 400 : 230,
        margin: 'auto 0',
        height: grid ? 400 : 260,
        display: 'flex',
        alignItems: 'center',
      }}
      to={`/catalog/${item.height}`}
    >
      <img src={item.img} alt={item.height.toString()} style={{ width: '100%', objectFit: 'contain' }} />
    </Link>,
    <div
      style={{
        padding: 15,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Flex vertical gap={5} style={{ marginBottom: 20 }}>
        <Flex>
          <UpCircleOutlined style={{ fontSize: 34 }} />
          <p className={styles.par}>{getHeight(item.height)}</p>
        </Flex>
        <Flex>
          <InfoCircleOutlined style={{ fontSize: 34 }} />
          <p className={styles.par}>{item.type}</p>
        </Flex>
        <Flex>
          <img src={weight} width={34} />
          <p className={styles.par}>до {item.power} кг</p>
        </Flex>
        <Flex>
          <img src={ruble} width={34} />
          <p className={styles.par}>от {item.price} руб./час</p>
        </Flex>
      </Flex>
      <Flex vertical gap={5} style={{ marginTop: 'auto', width: '100%' }}>
        <CustomButton title="Подробнее" path={`/catalog/${item.height}`} />
        <CustomButton title="Рассчитать цену" path="/price" height={item.height} action="calc" />
        <CustomButton title="Заказать" path="/price" height={item.height} action="order" />
      </Flex>
    </div>,
  ]

  return (
    <Card
      style={{
        margin: '0 auto',
        display: grid ? 'block' : 'flex',
        justifyContent: 'center',
        background: 'none',
        border: '3px solid #336ea4',
      }}
      bordered
    >
      {blocks.map((el, i) =>
        grid ? (
          <Card.Grid
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              boxShadow: 'none',
            }}
            className={styles.cardGrid}
            key={i}
          >
            {el}
          </Card.Grid>
        ) : (
          <Flex vertical align="center" key={i}>
            {el}
          </Flex>
        ),
      )}
    </Card>
  )
}
