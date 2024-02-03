import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export const PriceButton = ({ height }: { height: number }) => {
  const navigate = useNavigate()
  return (
    <Button size="large" onClick={() => navigate('/price', { state: { height, action: 'calc' } })}>
      Рассчитать цену
    </Button>
  )
}
