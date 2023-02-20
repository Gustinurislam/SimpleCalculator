import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext)


  return (
    <Textfit max={70} mode='single' className='h-16 mb-16'>
      {calc.num ? calc.num : calc.res}
    </Textfit>
  )
}

export default Screen
