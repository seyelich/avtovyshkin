import auto1 from 'assets/images/17.png'
import auto2 from 'assets/images/20.png'
import auto3 from 'assets/images/22.png'
import auto4 from 'assets/images/26.png'
import auto5 from 'assets/images/30.png'
import auto6 from 'assets/images/34.png'
import auto7 from 'assets/images/37.png'

export type TCar = {
  img: string
  height: number
  type: string
  power: number
  price: number
  description: string
  brand: string
  machine: string
  sizeTs: string[]
  width: string
  mass: string
  sizeCradle: string[] | string[][]
  special: string
}

export const cars: TCar[] = [
  {
    img: auto1,
    height: 17,
    type: 'телескопическая',
    power: 800,
    price: 1900,
    description: 'Платформа 2х4, съемные борта, грузоподъемность до 800 кг',
    brand: 'MITSUBISHI CANTER, ISUZU ELF',
    machine: 'AICHI, TADANO',
    sizeTs: ['6.40', '2.00', '3.60'],
    width: '4.30',
    mass: '7.50',
    sizeCradle: ['4.00', '1.90'],
    special: 'люлька «балкон», съемные борта',
  },
  {
    img: auto2,
    height: 20,
    type: 'телескопическая',
    power: 800,
    price: 2000,
    description: 'Платформа 2х4, съемные борта, грузоподъемность до 800 кг',
    brand: 'MITSUBISHI FUSO FIGHTER, ISUZU FORWARD',
    machine: 'TADANO',
    sizeTs: ['6.90', '2.10', '3.40'],
    width: '5.00',
    mass: '8.00',
    sizeCradle: [
      ['3.00', '2.00'],
      ['4.00', '2.00'],
    ],
    special: 'люлька «балкон», съемные борта',
  },
  {
    img: auto3,
    height: 22,
    type: 'телескопическая',
    power: 800,
    price: 2300,
    description: 'Платформа 2х4, съемные борта, грузоподъемность до 800 кг',
    brand: 'ISUZU ELF',
    machine: 'TADANO',
    sizeTs: ['7.20', '2.20', '3.60'],
    width: '4.60',
    mass: '8.50',
    sizeCradle: ['4.00', '1.90'],
    special: 'люлька «балкон», съемные борта',
  },
  {
    img: auto4,
    height: 26,
    type: 'телескопическая',
    power: 200,
    price: 2500,
    description:
      'Люлька 1х1,5, раскладывается до размеров 1х3 возможно управление сверху (из люльки), грузоподъемность до 200 кг',
    brand: 'ISUZU FORWARD',
    machine: 'AICHI',
    sizeTs: ['7.00', '2.00', '3.50'],
    width: '4.40',
    mass: '8.50',
    sizeCradle: [
      ['1.50', '0.80'],
      ['3.00', '1.00'],
    ],
    special: 'люлька поворотная, раскладывается',
  },
  {
    img: auto5,
    height: 30,
    type: 'телескопическая',
    power: 300,
    price: 3000,
    description:
      'Есть лебедка грузоподъемностью 1тн, люлька раскладывается до размеров 1х3, грузоподъемность до 300 кг',
    brand: 'MITSUBISHI FUSO CANTER',
    machine: 'TADANO',
    sizeTs: ['9.70', '2.20', '3.60'],
    width: '5.50',
    mass: '9.00',
    sizeCradle: ['1.00', '0.07'],
    special: 'люлька «балкон», съемные борта',
  },
  {
    img: auto6,
    height: 34,
    type: 'телескоп + колено',
    power: 300,
    price: 3600,
    description:
      'Телескоп с коленом, может подавать на высоту: -5 м, поворотная люлька 1х1,5, возможно управление сверху, грузоподъемность до 300 кг',
    brand: 'КАМАЗ-53215',
    machine: 'ПСС-141.32',
    sizeTs: ['9.00', '2.50', '3.40'],
    width: '5.70',
    mass: '19.00',
    sizeCradle: ['1.60', '1.00'],
    special: 'телескоп с коленом, может подавать на высоту: -5 м, возможно управление сверху (из люльки)',
  },
  {
    img: auto7,
    height: 37,
    type: 'телескоп + колено',
    power: 300,
    price: 4000,
    description:
      'Характеристики: Вездеход, телескоп с коленом, люлька 1х1,5, возможно управление сверху, грузоподъемность до 300 кг',
    brand: 'КАМАЗ-43118',
    machine: 'ПСС-141.32',
    sizeTs: ['9.00', '2.50', '3.70'],
    width: '5.70',
    mass: '19.50',
    sizeCradle: ['1.60', '1.00'],
    special: 'вездеход, телескоп с коленом, может подавать на высоту: -5 м, возможно управление сверху (из люльки)',
  },
]

export const taxCoef = 1.2
