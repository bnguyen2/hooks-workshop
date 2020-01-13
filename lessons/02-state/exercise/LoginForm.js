import React, { useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { FaSignInAlt } from "react-icons/fa"
import TabsButton from "app/TabsButton"
import { login } from "app/utils"

// import LoginFormFinal from './LoginForm.final'
// export default LoginFormFinal

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const [emailField, passwordField] = e.target.elements
    setLoading(true)

    try {
      await login(emailField.value, passwordField.value)
    } catch (err) {
      console.log(err.message)
      setErrors(err)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {errors && (
        <div style={{ color: "red" }}>
          <p>{errors.message}</p>
        </div>
      )}

      <VisuallyHidden>
        <label htmlFor="login:email">Email:</label>
      </VisuallyHidden>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
      />

      <VisuallyHidden>
        <label htmlFor="login:password">Password:</label>
      </VisuallyHidden>
      <input
        id="login:password"
        type={showPassword ? "text" : "password"}
        className="inputField"
        placeholder="Password"
      />

      <div>
        <label>
          <input
            onChange={() => setShowPassword(!showPassword)}
            className="passwordCheckbox"
            type="checkbox"
            defaultChecked={showPassword}
          />{" "}
          show password
        </label>
      </div>

      <TabsButton>
        <FaSignInAlt />
        <span>{loading ? "Loading..." : "Login"}</span>
      </TabsButton>
    </form>
  )
}
