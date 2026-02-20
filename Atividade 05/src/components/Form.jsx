import { useState } from "react";
import Button from "./Button";
import "./Form.css";

function Form() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pais, setPais] = useState("");
  const [bio, setBio] = useState("");
  const [funcao, setFuncao] = useState("");
  const [senha, setSenha] = useState("");
  const [termos, setTermos] = useState(false);

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (!nome.trim()) {
      setErro("O nome é obrigatório.");
      return;
    }

    if (!email.trim()) {
      setErro("O email é obrigatório.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (!termos) {
      setErro("Você deve aceitar os termos.");
      return;
    }

    setSucesso("Cadastro realizado com sucesso!");

    // Limpar formulário
    setNome("");
    setSobrenome("");
    setEmail("");
    setIdade("");
    setTelefone("");
    setPais("");
    setBio("");
    setFuncao("");
    setSenha("");
    setTermos(false);
  };

  return (
    <div className="form-container">
      <h2>Formulário de Cadastro</h2>

      {erro && <p className="erro">{erro}</p>}
      {sucesso && <p className="sucesso">{sucesso}</p>}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="text" placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
        <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        <input type="text" placeholder="País" value={pais} onChange={(e) => setPais(e.target.value)} />
        <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        <input type="text" placeholder="Função no sistema" value={funcao} onChange={(e) => setFuncao(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <label className="checkbox">
          <input
            type="checkbox"
            checked={termos}
            onChange={(e) => setTermos(e.target.checked)}
          />
          Aceitar termos
        </label>

        <Button
          text="Cadastrar"
          type="submit"
          disabled={!termos}
        />
      </form>
    </div>
  );
}

export default Form;