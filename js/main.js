botaoDeletar = document.getElementById("botao-deletar");
botaoCompradores = document.getElementById("botao-compradores");
botaoEditar = document.getElementById("botao-editar");
botaoLogin = document.getElementById("botao-login");

function botaoEditar()
{

}

function botaoDeletar()
{
    
}

function botaoCompradores()
{
    
}

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-entrada");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // impede o reload da página

        const usuario = document.getElementById("nomeUsuario").value.trim();
        const senha = document.getElementById("senhaUsuario").value.trim();

        if (usuario === "Admin123!" && senha === "Admin123!") {
            // Redireciona para a página de administração
            window.location.href = "paginaAdministracao.html";
        } else {
            alert("A senha está incorreta! Volte caso queira entrar como usuário");
        }
    });
});

