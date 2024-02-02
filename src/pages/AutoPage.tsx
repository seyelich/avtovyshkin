import { Flex, Image } from 'antd'
import Title from 'antd/es/typography/Title'
import { AutoDescription } from 'components/AutoDescription'
import { OrderButton } from 'components/Buttons/OrderButton'
import { PriceButton } from 'components/Buttons/PriceButton'
import { useParams } from 'react-router-dom'
import { cars } from 'utils/constants'

export const AutoPage = () => {
  const { id } = useParams()
  const car = cars.find((el) => el.height === Number(id))!
  return (
    <>
      <Title>Автовышка {car.height} м.</Title>
      <Flex>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Image src={car.img} />
          <PriceButton height={car.height} />
          <OrderButton height={car.height} />
        </div>
        <AutoDescription item={car} />
      </Flex>
    </>
  )
}
