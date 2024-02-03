import { useParams } from 'react-router-dom'
import { Image } from 'antd'
import { AutoDescription } from 'components/AutoDescription'
import { CustomButton } from 'components/CustomButton'
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
            <CustomButton title="Рассчитать цену" path="/price" action="calc" height={car.height} />
            <CustomButton title="Заказать" path="/price" action="order" height={car.height} />
          </div>
        </div>
        <AutoDescription item={car} />
      </div>
    </PageTemplate>
  )
}
