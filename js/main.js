let botaoEditar = document.getElementById("botao-editar");
let botaoCompradores = document.getElementById("botao-compradores");
let botaoDeletar = document.getElementById("botao-deletar");

if (botaoEditar) 
{
    botaoEditar.addEventListener("click", () => 
    {
        const id = prompt("Digite o ID do comprador a ser editado:");
        fetch(`https://fakeapi.platzi.com/api/v1/users/${id}`, 
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify
            ({
                name: "Novo Nome",
                email: "novo@email.com"
            })
        })
        .then(res => res.json())
        .then(data => 
        {
            alert(`Usuário ID ${id} atualizado com sucesso!\nNovo nome: ${data.name}`);
        })
        .catch(err => console.error("Erro no PUT:", err));
    });
}

if (botaoDeletar) 
{
    botaoDeletar.addEventListener("click", () => 
    {
        const id = prompt("Digite o ID do comprador a ser deletado:");
        fetch(`https://fakeapi.platzi.com/api/v1/users/${id}`, { method: "DELETE" })
        .then(res => 
        {
            if (res.ok) 
            {
                alert(`Comprador ID ${id} deletado com sucesso!`);
            } 
            
            else 
            {
                alert("Erro ao deletar.");
            }
        })
        .catch(err => console.error("Erro no DELETE:", err));
    });
}

if (botaoCompradores) 
{
    botaoCompradores.addEventListener("click", () => 
    {
        const apiBase = "https://api.escuelajs.co/api/v1";
        const tabela = document.getElementById("compradores-lista");
        tabela.innerHTML = "<tr><td colspan='5'>Carregando...</td></tr>";

        fetch(`${apiBase}/users`)
        .then(res => res.json())
        .then(data => 
        {
            tabela.innerHTML = ""; 

            if (data.length === 0) 
            {
                tabela.innerHTML = "<tr><td colspan='5'>Nenhum comprador encontrado.</td></tr>";
                return;
            }
            data.slice(0,10).forEach(user => 
            {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><img src="${user.avatar}" alt="avatar" width="40" height="40" style="border-radius:50%"></td>`;
                tabela.appendChild(tr);
            });
        })
        .catch(err => 
        {
            tabela.innerHTML = "<tr><td colspan='5'>Erro ao carregar compradores.</td></tr>";
            console.error(err);
        });
    });
}

function validarLogin()
{
    const formulario = document.getElementById("formulario-entrada");
    if (formulario) 
    {
        formulario.addEventListener("submit", (event) => 
        {
            event.preventDefault();
            const usuario = document.getElementById("nomeUsuario").value.trim();
            const senha = document.getElementById("senhaUsuario").value.trim();

            if (usuario === "seutiao123" && senha === "seutiao123") 
            {
                window.location.href = "paginaAdministracao.html";
            } 
            
            else 
            {
                alert("Credenciais incorretas.");
            }
        });
    }
}