import MealCard from './MealCard'
import { Meal } from '../types'

type Props = {
  meals: Meal[]
}

function MealsCarrousel({ meals }: Props) {
  return (
    <div className='grid grid-cols-4'>
      {
        meals.map((meal, index) => <MealCard key={index} meal={meal} />)
      }
    </div>
  )
}

export default MealsCarrousel