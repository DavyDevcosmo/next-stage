import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

export const ForgotPassword = () => {
    const navigate = useNavigate()
    const { resetPassword } = useAuth()
    const [ email, setEmail] = useState("")
    const [ loading, setLoading] = useState(false)
    
    async function handleSubmit(element){
        element.preventDefault()

        setLoading(true)
  
        try {
            await resetPassword(email)
            alert("foi enviado um email para resetar sua senha")
            navigate("/login")
        } catch  {
            alert("Ocorreu um erro ao resetar sua senha")
        }
        setLoading(false)
    }
    return(
        <div className="container">
        <h1>Esqueci minha senha</h1>

        <form onSubmit={handleSubmit} >
            <label htmlFor="email">email</label>
            <input type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />

            <button className="button-block">Recuperar senha</button>
        </form>

        <div className="center"> 
            <div>
                <p>já tem uma conta ? <Link to="/auth/login">Entrar</Link></p>

                <p>Não tem uma conta ? <Link to="/auth/register"> Cadastre-se</Link></p>

            
            </div>

        </div>
        </div>
    )
}