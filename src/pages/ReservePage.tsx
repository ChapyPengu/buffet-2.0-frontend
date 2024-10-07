import Layout from "../components/Layout"
import ReserveForm from "../components/ReserveForm"

function ReservePage() {

  return (
    <Layout>
      <div className="py-16">
        <div className="grid place-items-center">
          <ReserveForm />
        </div>
      </div>
    </Layout>
  )
}

export default ReservePage