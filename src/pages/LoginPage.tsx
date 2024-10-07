import Layout from "../components/Layout"
import LoginForm from "../components/LoginForm"

function LoginPage() {
  return (
    <Layout>
      <div className="grid place-items-center py-32">
        <LoginForm />
      </div>
    </Layout>
  )
}

export default LoginPage