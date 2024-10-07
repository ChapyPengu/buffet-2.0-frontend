import { Meal } from "../types"

type Props = {
  meal: Meal
}
function MealCard({ meal }: Props) {
  return (
    <div>
      {meal.name}
    </div>
  )
}

export default MealCard