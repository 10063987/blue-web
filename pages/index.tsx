import React, { useState } from 'react'
import Layout from '../components/Layout'
import { formInputs } from '../utils/formInputs'

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const registerUser = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  // console.log(formInputs)
  // https://javascript.plainenglish.io/how-to-write-a-simple-test-for-your-next-js-app-7e7e83420d7a
  // https://blog.logrocket.com/testing-error-handling-patterns-next-js/


  return (
    <Layout>

      <div className='form-wrapper'>
        <form>
          {formInputs.map((input, index) => {
            return (
              <div key={index} className="form-group bg-red-300">
                <label>{input.label}</label>
                <input
                  className='m-2 p-2 text-xs'
                  name={input.name}
                  type={input.type}
                  aria-label={input.ariaLabel}
                  placeholder={input.placeholder}
                />
              </div>
            )
          })}

          <button className='bg-green-300 p-2 rounded-sm' onClick={registerUser}>
            {isLoading ? 'Loading...' : 'Create account'}
          </button>
        </form>
      </div>
    </Layout>
  )

}

export default RegisterPage