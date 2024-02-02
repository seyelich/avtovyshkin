import { Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import { AutoCard } from 'components/Cards/AutoCard'
import { cars } from 'utils/constants'

export const CatalogPage = () => (
  <div style={{ margin: '0 50px' }}>
    <Title>Наши автовышки</Title>
    <div>
      <Flex wrap="wrap" gap={10}>
        {cars.map((el) => (
          <AutoCard key={el.height} item={el} />
        ))}
      </Flex>
    </div>
  </div>
)
