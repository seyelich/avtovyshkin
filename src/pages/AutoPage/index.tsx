import { useParams } from 'react-router-dom'
import { Image } from 'antd'
import { AutoDescription } from 'components/AutoDescription'
import { OrderButton } from 'components/Buttons/OrderButton'
import { PriceButton } from 'components/Buttons/PriceButton'
import { PageTemplate } from 'pages'
import { cars } from 'utils/constants'
import styles from './index.module.css'

export const AutoPage = () => {
  const { id } = useParams()
  const car = cars.find((el) => el.height === Number(id))!
  return (
    <PageTemplate title={`Автовышка ${car.height} м.`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image src={car.img} />
          <div className={styles.btns}>
            <PriceButton height={car.height} />
            <OrderButton height={car.height} />
          </div>
        </div>
        {/* @TODO: fix mobile screen */}
        <AutoDescription item={car} />
      </div>
    </PageTemplate>
  )
}
