import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Flex, Tabs } from 'antd'
import { OrderForm } from 'components/Forms/OrderForm'
import { PriceForm } from 'components/Forms/PriceForm/index'
import { PriceTable } from 'components/Tables/PriceTable'
import { PageTemplate } from 'pages'
import type { TabsProps } from 'antd'

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

  useEffect(() => {
    document.title = 'Автовышкин - Прайс'
  }, [])

  return (
    <PageTemplate title="ПРАЙС-ЛИСТ">
      <Tabs
        defaultActiveKey={state?.action === 'calc' ? 'calculate' : state?.action ? 'order' : undefined}
        items={items}
      />
    </PageTemplate>
  )
}
