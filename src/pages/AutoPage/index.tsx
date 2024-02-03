import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Image } from 'antd'
import { AutoDescription } from 'components/AutoDescription'
import { CustomButton } from 'components/CustomButton'
import { PageTemplate } from 'pages'
import { cars } from 'utils/constants'
import styles from './index.module.css'

export const AutoPage = () => {
  const { id } = useParams()
  const car = cars.find((el) => el.height === Number(id))!

  useEffect(() => {
    document.title = `Автовышкин - Автовышка ${car.height} м.`
  }, [car.height])

  return (
    <PageTemplate title={`АВТОВЫШКА ${car.height} М.`}>
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
