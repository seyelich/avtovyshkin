import type { TabsProps } from 'antd'
import { Flex, Tabs } from 'antd'
import Title from 'antd/es/typography/Title'
import { OrderForm } from 'components/Forms/OrderForm'
import { PriceForm } from 'components/Forms/PriceForm'
import { PriceTable } from 'components/Tables/PriceTable'
import { useLocation } from 'react-router-dom'

const items: TabsProps['items'] = [
  {
    key: 'noTax',
    label: 'Без НДС',
    children: <PriceTable />,
  },
  {
    key: 'tax',
    label: 'С НДС',
    children: <PriceTable tax />,
  },
  {
    key: 'calculate',
    label: 'Рассчитать цену',
    children: (
      <Flex justify="center">
        <PriceForm />
      </Flex>
    ),
  },
  {
    key: 'order',
    label: 'Заказать',
    children: (
      <Flex justify="center">
        <OrderForm />
      </Flex>
    ),
  },
]

export const PricePage = () => {
  const { state } = useLocation()

  return (
    <div style={{ margin: '0 50px' }}>
      <Title>Прайс-лист</Title>
      <Tabs
        defaultActiveKey={state?.action === 'calc' ? 'calculate' : state?.action ? 'order' : undefined}
        items={items}
      />
    </div>
  )
}
