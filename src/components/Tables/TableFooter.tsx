import Paragraph from 'antd/es/typography/Paragraph'

export const PriceTableFooter = ({ priceShort, priceLong }: { priceShort: string; priceLong: string }) => (
  <div>
    <Paragraph>
      Выезд Автовышек высотой до 30 м. за пределы города {priceShort} копеек за километр в каждую сторону.
    </Paragraph>
    <Paragraph>
      Выезд Автовышек высотой от 30 м. за пределы города {priceLong} копеек за километр в каждую сторону.
    </Paragraph>
    <Paragraph>Заказ Автовышек высотой до 30 м. минимум на 2 (два) часа.</Paragraph>
    <Paragraph>Заказ Автовышек высотой от 30 м. минимум на 3 (три) часа.</Paragraph>
    <Paragraph>Гибкая скидочная система!</Paragraph>
  </div>
)
