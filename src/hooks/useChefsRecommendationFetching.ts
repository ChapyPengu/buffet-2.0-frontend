import { useState, useEffect } from "react";
import { Meal } from "../types";
import Service from "../services/service";

function useChefsRecommendationFetching() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    Service.getChefsRecommendation()
      .then(res => {
        setMeals(res.data)
      })
      .catch(res => {
        setError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { meals, error, isLoading }
}

export default useChefsRecommendationFetching