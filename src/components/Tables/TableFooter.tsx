import Paragraph from 'antd/es/typography/Paragraph'
import Text from 'antd/es/typography/Text'
import type { ReactNode } from 'react'

type TPriceTableFooterProps = {
  priceShort: ReactNode | string
  priceLong: ReactNode | string
}

export const PriceTableFooter = ({ priceShort, priceLong }: TPriceTableFooterProps) => (
  <div>
    <Paragraph>
      Выезд Автовышек высотой до 30 м. за пределы города {priceShort} копеек за километр в каждую сторону.
    </Paragraph>
    <Paragraph>
      Выезд Автовышек высотой от 30 м. за пределы города {priceLong} копеек за километр в каждую сторону.
    </Paragraph>
    <Paragraph>Заказ Автовышек высотой до 30 м. минимум на 2 (два) часа.</Paragraph>
    <Paragraph>Заказ Автовышек высотой от 30 м. минимум на 3 (три) часа.</Paragraph>
    <Text strong>Гибкая скидочная система!</Text>
  </div>
)
