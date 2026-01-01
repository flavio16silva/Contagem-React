import { useState } from "react"

const App = () => {
    const state = useState(0) //criando estado com useState()

  return <p>oi</p>
}

export { App }



/*
const App = () => {
  const increment = () => {
    counter = counter + 1
    console.log("counter:", counter)
  }

  return (
    <div>
      <h1>Contagem: {counter}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}
*/

/*
1) Fundamentos do React
7. M1#A07 - Introdução a estado no React
*/

/* O que é estado?
Segundo o google, estado é o conjunto de caracteristicas com que as coisas
se apresentam em determinado momento.

Como se traduz para o contexto do react?
No react quando preciso mudar um valor em tela é necessário usar um 
estado do react

- estado do react: é um mecanismo que usamos para falar com o react
que em determinado valor na tela precisa mudar.

Forma intuitiva e errada de mudar um estado no react:
let counter = 0 => não reconhece como estado

const App = () => {
  const increment = () => (counter = counter + 1)

    return (
    <div>
      <h1>Contagem: {counter}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export { App }

Fazer efeito colateral, atribuição, reatribuição, mutação é má pratica 
no react.
React = tradução reagir
- React é uma biblioteca responsavel por fazer a interface da aplicação 
reagir a alterações de estado. 
- Como o react reage?
renderizando o componente novamente. O componente que contem o estado 
é re-renderizado e nessa re-renderização o valor do estado na tela esta
atualizado, modificado. 

Qual o jeito certo de mudar um estado no react?
1. criar um estado no react, com a função useState, ou seja, use estado
2. no topo do componente declara const state= useState()
3. sempre vai receber como argumento o valor inicial do estado que quero
criar
4. useState(), sempre retorna um array com dois itens:
- valor no qual o estado foi iniciado
- função que deve ser usada para alterar o estado do primeiro item
*/
