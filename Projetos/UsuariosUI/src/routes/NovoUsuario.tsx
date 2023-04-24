import { useState } from "react";
import axios from "axios";
import './NovoUsuario.css'

const NovoUsuario: React.FC = () =>
{
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> =>
    {
        event.preventDefault();

        try
        {
            const response = await axios.post("https://localhost:7099/api/v1/usuario", {
                nome,
                sobrenome,
                email,
            });
            console.log(typeof response.status);
            if (response.status === 201)
            {
                window.location.href = "http://localhost:5173/"; // redireciona para
            }
        } catch (error)
        {
            console.error(error);
        }
    }

    return (
        <div>
            <h2 className="novoUsuario">Inserir Novo Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control">
                    <label>Sobrenome</label>
                    <input
                        type="text"
                        name="sobrenome"
                        placeholder="Sobrenome"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Exemplo@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input className="btn" type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    );
};

export default NovoUsuario;