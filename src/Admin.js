import {Navigate} from 'react-router-dom'

const Admin = () =>{
    const isAdmin = Math.random() < 0.5;
    return(
        isAdmin? <h1>Welcom Admin</h1> : <Navigate to="/"/>
    )
}

export default Admin;