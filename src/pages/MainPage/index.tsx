import { Tabs } from 'antd'
import { useSize } from 'hooks/useSize'
import { AutoCard } from 'components/AutoCard'
import { PageTemplate } from 'pages'
import { cars } from 'utils/constants'

export const MainPage = () => {
  const { width } = useSize()

  return (
    <PageTemplate title="Выберите высоту автовышки">
      <Tabs
        items={cars.map((el) => ({
          key: el.height.toString(),
          children: <AutoCard key={el.height} item={el} grid={width > 600} />,
          label: el.height,
        }))}
      />
    </PageTemplate>
  )
}
