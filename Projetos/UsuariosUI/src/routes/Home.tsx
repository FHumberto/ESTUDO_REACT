import { useEffect, useState } from "react";
import { Usuario } from "../types/Usuario";
import usuarioFetch from "../constants/Api";
import './Home.css'

const Home = () =>
{
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const getUsuarios = async () =>
    {
        try
        {
            const response = await usuarioFetch.get("/");
            const data = response.data;
            setUsuarios(data);
        } catch (error)
        {
            console.log(error);
        }
    };

    useEffect(() =>
    {
        getUsuarios();
    }, []);

    return (
        <div>
            {usuarios.length === 0 ? (
                <p>Carregando...</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Home;