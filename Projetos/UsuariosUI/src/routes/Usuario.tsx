/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Usuario } from "../types/Usuario";
import { useParams } from "react-router-dom";


export const usuario = () =>
{
    const { id } = useParams(); // captura o id da rota
    const [user, setUser] = useState<Usuario>();

    const getUsuarios = async () =>
    {
        try
        {
            const response = await usuarioFetch.get(`/${id}`);
            const data = response.data;
            setUsuarios(data);
        } catch (error)
        {
            console.log(error);
        }
    };

    // return
    // <div>
    //     <h2 className="novoUsuario">Inserir Novo Usuário</h2>
    //     <form onSubmit={handleSubmit}>
    //         <div className="form-control">
    //             <label htmlFor="nome">Nome</label>
    //             <input
    //                 type="text"
    //                 name="nome"
    //                 placeholder="Nome"
    //                 value={nome}
    //                 onChange={(e) => setNome(e.target.value)}
    //                 required
    //             />
    //         </div>
    //         <div className="form-control">
    //             <label>Sobrenome</label>
    //             <input
    //                 type="text"
    //                 name="sobrenome"
    //                 placeholder="Sobrenome"
    //                 value={sobrenome}
    //                 onChange={(e) => setSobrenome(e.target.value)}
    //             />
    //         </div>
    //         <div className="form-control">
    //             <label>Email</label>
    //             <input
    //                 type="email"
    //                 name="email"
    //                 placeholder="Exemplo@email.com"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 required
    //             />
    //             <input className="btn" type="submit" value="Enviar" />
    //         </div>
    //     </form>
    // </div>
}