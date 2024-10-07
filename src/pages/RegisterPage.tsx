import Layout from '../components/Layout'
import RegisterForm from '../components/RegisterForm'

function RegisterPage() {
  return (
    <Layout>
      <div className="grid place-items-center py-32">
        <RegisterForm />
      </div>
    </Layout>
  )
}

export default RegisterPage