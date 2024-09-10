function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesuisa for uma string sem nada...
    if (!campoPesquisa) {
      section.innerHTML = "<p> Game nenhum encontrado ;-; </p>"  
      return 
   }

   campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados formatados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags  = "";
   
  
    // Itera sobre cada jogo na lista de jogos.
    for (let game of games) {

      // deixa tudo minusculo
      titulo = game.titulo.toLowerCase()
      descricao = game.descricao.toLowerCase()
      tags = game.tags.toLowerCase()
      

      // se titulo includes campoPesquisa
      if(
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
        ) {

         // Constrói o HTML para cada item da pesquisa, formatando o título, descrição e link.
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${game.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${game.descricao}
          </p>
          <a href="${game.link}" target="_blank">
            Veja mais sobre o jogo pesquisado.
          </a>
          <p>
           <a href="${game.dowload}" target="_blank">
            baixe o jogo pesquisado.
          </a>
          </p>
        </div>
      `;
      }
 
    }

    if (!resultados) {
        resultados = " <p> Sem Games adicionados com esse atributo ;-; </p>"
      }
  
    // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }