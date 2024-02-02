import { Button, Flex, Form, InputNumber, Radio, Select } from 'antd'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { cars, getPriceOfRoad, taxCoef } from 'utils/constants'
import styles from './index.module.css'

const radioOptions = [
  { label: 'Цена без НДС', value: false, checked: true },
  { label: 'Цена с НДС', value: true },
]

const selectOptions = cars.map((el) => ({ value: el.height, label: el.height }))

export const PriceForm = () => {
  const [price, setPrice] = useState(0)
  const { state } = useLocation()

  const calculate = (values) => {
    const { time, height, tax, length } = values
    const car = cars.find((el) => el.height === height)
    car && setPrice((time * car?.price + getPriceOfRoad(length)) * (tax ? taxCoef : 1))
  }

  return (
    <Flex style={{ width: '75%', maxWidth: 600 }} vertical>
      <Form layout="vertical" onFinish={calculate} onReset={() => setPrice(0)}>
        <Form.Item name="time" label="Время работы, ч" required initialValue={2}>
          <InputNumber style={{ width: '100%' }} min={2} />
        </Form.Item>
        <Form.Item name="height" label="Высота, м" initialValue={state?.height ?? state?.height} required>
          <Select options={selectOptions} />
        </Form.Item>
        <Form.Item name="tax" required initialValue={false}>
          <Radio.Group options={radioOptions} />
        </Form.Item>
        <Form.Item name="length" label="Дорога, км" initialValue={0} required>
          <InputNumber style={{ width: '100%' }} min={0} />
        </Form.Item>
        <Form.Item>
          <div className={styles.btnContainer}>
            <Button className={styles.btn} htmlType="submit">
              Рассчитать цену
            </Button>
            <Button className={styles.btn} htmlType="reset">
              Сбросить
            </Button>
          </div>
        </Form.Item>
      </Form>
      {price ? <p>Итого: {price} руб.</p> : null}
    </Flex>
  )
}
