import { instance } from "@/api/instance";
import { useState } from "react";

export default function Teste() {
    const [nome, setNome] = useState("");
      const [email, setEmail] = useState("");
      const [senha, setSenha] = useState("");

      async function handleSubmit(e){
        e.preventDefault();
          try {
            const resposta = await instance.post('/users', {
              name: nome,
              email: email,
              password: senha,
            })
            const data = await resposta.data;
            if(data){
              alert("Usuário cadastrado com sucesso!");
            }
          } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
            
          }
        }
  return (
    <div>
        {/*Esta página é um teste que o Davi fez para aprender a usar o Next.js e o Axios.*/}

         <h1>Teste</h1>
      <p>Esta é a página de teste.</p> 
      <form action="" onSubmit={(e) => handleSubmit(e)}> 
        <label htmlFor="name">Nome:</label>
        <input onChange={(e) => setNome(e.target.value)} type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
        <br />
        <label htmlFor="senha">Senha</label>
        <input onChange={(e) => setSenha(e.target.value)} type="password" id="senha" name="senha" />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}