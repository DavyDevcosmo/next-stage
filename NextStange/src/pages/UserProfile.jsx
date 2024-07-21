import { useNavigate, Link } from "react-router-dom"

//import { useState } from "react"
import { useAuth } from "../context/authContext"


export const UseProfile = () => {
    const {currentUser, logOut} = useAuth();
    
   
    const navigate = useNavigate()

    async function handleLogout() {
        try{
            await logOut()
            navigate("/login")
        } catch (error){
            alert("ocorreu um erro ao efetuar o login ")
            console.log("email")
        }
    }
    
    return(
        <div className="conteiner">
            <h1>Configurações da conta</h1>

            <button onClick={handleLogout}>Sair</button>

            <button onClick={handleLogout}>Deletar conta</button>


            <table>
                <thead>
                    <tr>
                        <th>Email</th> 
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{currentUser.email}</td>
                            
                        
                        <td>
                            <Link to="/update-profile">Atualizar perfil de usuario</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
       
        </div>
    )
}