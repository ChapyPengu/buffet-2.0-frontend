
function ErrorMessage({ message }: { message: string }) {
  return (
    <p className='text-lg block text-gray-700 text-center font-bold'>
      {message}
    </p>
  )
}

export default ErrorMessage