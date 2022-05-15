# Challenge Oracle ONE / Alura 2022 

**Sprint 1 : Construa um decodificador de texto com Javascript**

**Objetivo:**
Desenvolver uma aplicação web que criptografa textos, assim será possível trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

**As "chaves" de criptografia que utilizaremos são:**
- `A letra "a" é convertida para "ai"`  
- `A letra "e" é convertida para "enter"`  
- `A letra "i" é convertida para "imes"`  
- `A letra "o" é convertida para "ober"`  
- `A letra "u" é convertida para "ufat"`  

**Requisitos:**
- Deve funcionar apenas com letras minúsculas;
- Não devem ser utilizados letras com acentos nem caracteres especiais;
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original;

    Por exemplo:
    `"gato" => "gaitober"`
    `gaitober" => "gato"`

- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opçõe;
- O resultado deve ser exibido na tela.

**Extra:**
- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do `ctrl+C` ou da opção "copiar" do menu dos aplicativos.

**Como utilizar:**
- Acesse <a href="https://tiagopereirasantos.github.io/Decodificador-JS/">o projeto aqui</a> e insira o texto no local indicado. Logo abaixo, clique no botão para executar a função que deseja realizar. O resultado irá aparecer na tela a direita. Se desejar, você pode copiá-lo clicando no botão `copiar` logo abaixo.

**Tecnologias utilizadas:**
- Neste projeto, as tecnologias utilizadas foram HTML, CSS e JavaScript. 

**Minha experiência com o projeto:**  
- A Alura apresentou o desafio de forma magnífica. O uso do Trello e do Figma foram ferramentas muito importantes para organização do trabalho. Isso foi fundamental para que eu pudesse pensar no problema, modelar a solução e planejar o passo a passo da execução para resolver o challenge. 
  
- A parte lógica em si considerei simples de ser pensada, porém durante o desenvolvimento percebi que alguns detalhes eram importantes, como a ordem de execução da criptografia e descriptografia dentro das funções; o cumprimento dos requisitos; e a necessidade de usar métodos ( como o .focus() ) e condições para orientar a interação do usuário, caso saísse do previsto.  

- O uso do método .replaceAll() e a parte funcional do código para copiar o resultado foram novidades pra mim e encontrei certa dificuldade no início. 
Além disso, tratando-se do CSS e HTML, tive muito trabalho para conseguir o resultado que obtive. Por mais simples que aparente estar, a construção do estilo se deu em várias tentativas que consumiram muito tempo. Numa oportunidade, pretendo melhorar o estilo e deixar as linhas de código do html mais "limpas". Também aprendi usar o Git e GitHub com esse projeto! 

**Observações**  
- O challenge faz parte da formação do programa ONE (Oracle Next Education) e foi proposto dentro de uma trilha de aprendizado. Portanto, seu foco baseia-se em fazer uso do que está sendo ensinado durante a trilha, instigar a busca por conteúdos extras necessários a resolução do desafio e também montar um portfólio de projetos. 
Desse modo, este projeto não deve ser considerado como uma última versão. A partir de novas habilidades aprendidas ele poderá ser melhorado.
