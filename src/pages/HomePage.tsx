import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Button from "../components/Button"
import { Meal } from "../types"
import useChefsRecommendationFetching from "../hooks/useChefsRecommendationFetching"
import MealsCarrousel from "../components/MealsCarrousel"
import ErrorMessage from "../components/ErrorMessage"
import { useApp } from "../contexts/AppContext"

function SectionChefsRecommendation({ meals }: { meals: Meal[] }) {
  return (
    <section className=''>
      <div>
        <h2 className="text-2xl lg:text-4xl text-gray-700 font-bold text-center italic">Recomendaciones del Chef</h2>
      </div>
      <div className="grid place-items-center">
        <img className="w-64" src="/chef.png" alt="" />
      </div>
      <div>
        <MealsCarrousel meals={meals} />
      </div>
      <div>
        <p className="text-2xl text-gray-700 text-center font-medium">Comida con postre y bebida gratis</p>
      </div>
    </section>
  )
}

function SectionDiscountsOfTheDay({ meals }: { meals: Meal[] }) {
  return (
    <section className=''>
      <div>
        <h2 className="text-2xl lg:text-4xl text-gray-700 font-bold text-center italic">Descuentos del dia</h2>
      </div>
      <div className="grid place-items-center">
        <img className="w-64" src="/chef.png" alt="" />
      </div>
      <div>
        <MealsCarrousel meals={meals} />
      </div>
    </section>
  )
}

function MenuOfTheDay({ meal }: { meal: Meal }) {
  return (
    <section>
      <div>
        <h2 className="text-2xl lg:text-4xl text-gray-700 font-bold text-center italic">Menu del dia</h2>
      </div>
      <div className="grid place-items-center">
        <img className="w-64" src="/chef.png" alt="" />
      </div>
      <div>
        <p>{meal.name}</p>
      </div>
    </section>
  )
}


function HomePage() {
  const { meals, error, isLoading } = useChefsRecommendationFetching()
  const { isAuthtenticated, user } = useApp()

  return (
    <Layout>
      <div className="py-16">
        {
          isAuthtenticated
            ? <div>
              <h1>Bienvenido {user?.username}!</h1>
            </div>
            : <></>
        }

        {
          error
            ? <ErrorMessage message="No se pudieron obtener los menus" />
            : <SectionChefsRecommendation meals={meals} />
        }
        {
          false
            ? <ErrorMessage message="No se pudieron obtener los menus" />
            : <SectionDiscountsOfTheDay meals={meals} />
        }
        {
          false
            ? <ErrorMessage message="No se pudieron obtener los menus" />
            : <MenuOfTheDay meal={{ id: 0, name: 'Sanduche', price: 120 }} />
        }
        <div className="grid place-items-center">
          <Link to='/reserve'>
            <Button>Hacer una reserva</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage