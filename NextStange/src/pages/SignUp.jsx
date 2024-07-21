

import {  useState } from "react"
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom";


export const SignUp = () => {
    const {signUp} = useAuth();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmPassword,setComfirmPassword] = useState("");
   
    const [loading, setLoading] = useState(false)

    async function handleSubmit(element) {
        element.preventDefault()
        setLoading(true)


        if(password.length < 6){
            alert("Senha deve ter no minimo 6 caracteres")
            setLoading(false)
            return;
        }
        if(password !== comfirmPassword){
            alert("senhas não conferem")
            setLoading(false)
            return
        }
        
       
        try {
            await signUp(email, password)
        } catch (error) {
            alert("Ocorreu um erro ao tentar criar o usuario")
            console.log(error)
        }
        setLoading(false)
    }

   
    return (
        <div className="conteiner">
            <h2>Cadastro</h2>
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

                <label htmlFor="comfirmPassword">Comfirmação de senha</label>
                <input type="Password"
                value={comfirmPassword} 
                onChange={(element) => setComfirmPassword (element.target.value)}
                />

                <button disabled={loading} type="submit">CADASTRAR</button>
            </form>

            <div className="center">
                <div>
                    <p>
                        já possui uma conta ? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}