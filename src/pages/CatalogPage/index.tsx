import { useEffect } from 'react'
import { Flex } from 'antd'
import { AutoCard } from 'components/AutoCard'
import { PageTemplate } from 'pages'
import { cars } from 'utils/constants'

export const CatalogPage = () => {
  useEffect(() => {
    document.title = 'Автовышкин - Автовышки'
  }, [])

  return (
    <PageTemplate title="НАШИ АВТОВЫШКИ">
      <div>
        <Flex wrap="wrap" gap={10}>
          {cars.map((el) => (
            <AutoCard key={el.height} item={el} />
          ))}
        </Flex>
      </div>
    </PageTemplate>
  )
}
