// ATALHO PARA CRIAR O PROJETO: RAFCE
const nome = "Clara";

// Sempre que ver data e dados!
const dados = {
    idade: 16,
    trabalho: "estudante"
}
// Array de String
const skills = ["react", "C#", "JS", "HTML"];

const projects = [
    { name: "Portfólio", tech: "React + CSS", status: "finalizado" },
    { name: "lista de tarefas", tech: "javascript", status: "em andamento" },
]

const TemplateExpression = () => {
    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Seu nome é: {nome}</h3>
            <p>
                sua idade é {dados.idade} anos e voce é um {dados.trabalho}
            </p>
            {/*usando o length que informa quantos itens tem*/}
            <p>você tem {skills.length} habilidades</p>
            <h4>habilidades</h4>
            <ul>
                {skills.map((skill) => (
                    <li>{skill}</li>
                )
                )}
            </ul>

            <h4>Projetos</h4>
            <ul>
                {projects.map((project) => (
                    <li key={project.name}>
                        {project.name} - {project.tech} - {(project.status)}
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default TemplateExpression