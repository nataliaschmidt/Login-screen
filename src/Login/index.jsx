import { useState } from "react"
import './Login.css'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

const handleClick = () => {
  setIsLoading(true);
setTimeout(() => {
setIsLoading(false)
}, 2000)
}

  return (
    <form>
       <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="email"
              data-testid="email-input"
              name="email"
              // value={ }
              // onChange={ }
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </p>
        </div>

          <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              data-testid="password-input"
              name="password"
              // value={ }
              // onChange={ }
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>

          <button
            className={ isLoading
              ? 'button is-link is-loading is-responsive is-rounded'
              : 'button is-link is-rounded' }
            type="button"
            data-testid="btn-play"
            // disabled={ }
            onClick={ handleClick }
          >
            Entrar

          </button>
    </form>
  )
}
