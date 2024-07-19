import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"




export const UpdateProfile = () => {
    const {updateEmailAddress,currentUser} = useAuth()
    const navigate = useNavigate ()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState(currentUser.email)

    async function handleSubmit(element) {
        element.preventDefault()

        setLoading(true)

        if (email === currentUser.email) {
            setLoading(false)
            return navigate("/")
        }

        try {
            await updateEmailAddress(email)
            navigate("/")
        } catch (error) {
            console.log(error)
            alert("Ocorreu um erro ao tentar atualizar o usuario")
        }

        setLoading(false)
    }


    return (
        <div className="conteiner">
            <div className="header">
                <h1>Atualizar Perfil</h1>
            </div>

            <form onSubmit={handleSubmit}> 
                <label htmlFor="email">Email</label>
                <input type="email" value={email}
                onChange={(element) => setEmail(element.target.value)} />
                <button disabled={loading} className="button-block">Atualizar</button>
            </form>
        </div>
    )
}