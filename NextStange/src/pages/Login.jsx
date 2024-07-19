import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

export  const Login = () =>  {
    const {signIn} = useAuth();
    const navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    async function handleSubmit(element) {
        element.preventDefault()

        setLoading(false)

        if (password.length < 6) {
            alert("password deve ter no minimo 6 caracteres")
            setLoading(false)
            return
        }

        try {
            await signIn(email, password)
            navigate("/userProfile")
        } catch (error) {
            alert("ocorreu unm erro ao fazer login")
        }
        setLoading(false)
    }
    

    return(
        <div className="conteiner">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}  >
            <label htmlFor="email">email</label>
            <input 
            type="email" 
            value={email}
            onChange={(element) => setEmail(element.target.value)}
            />

            <label htmlFor="password">Senha</label>
            <input 
            type="password" 
            value={password}
            onChange={(element) => setPassword(element.target.value)}
            />

            <button disabled={loading} type="submit">Login</button>
        </form>
        <div className="center"> 
            <div>
                <p>Esqueceu a senha? <Link to="/forgot-password">Resetar senha</Link></p>

                <p>Criar nova conta ? <Link to="/"> Cadastre-se</Link></p>

            
            </div>
        </div>

    </div>
    )
}