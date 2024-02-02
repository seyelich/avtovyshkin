import { ArrowUpOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Button, Card, Flex } from 'antd'
import { OrderButton } from 'components/Buttons/OrderButton'
import { PriceButton } from 'components/Buttons/PriceButton'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import type { TCar } from 'utils/constants'

export const AutoCard = ({ item, grid }: { item: TCar; grid?: boolean }) => {
  const navigate = useNavigate()
  const height = item.height.toString()
  const lastNum = height[height.length - 1]

  const blocks = [
    <Link style={{ width: 180 }} to={`/catalog/${item.height}`}>
      <img src={item.img} alt={height} style={{ width: '100%', objectFit: 'contain' }} />
    </Link>,
    <>
      <Flex vertical gap={5}>
        <Flex>
          <ArrowUpOutlined />
          <p>
            {lastNum === '2' || lastNum === '3' || lastNum === '4'
              ? height + ' метра'
              : lastNum === '1'
                ? height + ' метр'
                : height + ' метров'}
          </p>
        </Flex>
        <Flex>
          <InfoCircleOutlined />
          <p>{item.type}</p>
        </Flex>
        <Flex>
          <p>до {item.power} кг</p>
        </Flex>
        <Flex>
          <p>от {item.price} руб./час</p>
        </Flex>
      </Flex>
      <Flex vertical gap={5}>
        <Button onClick={() => navigate(`/catalog/${item.height}`)}>Подробнее</Button>
        <PriceButton height={item.height} />
        <OrderButton height={item.height} />
      </Flex>
    </>,
  ]

  return (
    <Card
      style={{
        margin: '0 15px',
      }}
      bordered
    >
      {blocks.map((el) => (grid ? <Card.Grid style={{ width: '50%' }}>{el}</Card.Grid> : <Flex vertical>{el}</Flex>))}
    </Card>
  )
}
