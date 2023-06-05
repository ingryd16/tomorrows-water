'use strict'

export const produtos = async () => {
   
    const url = `http://localhost:8080/v1/tomorrows-water/produto`
    const response = await fetch(url)
    const data = await response.json()
    const { produtos } = data;
    console.log(produtos)
    return {
        ...data
    }
    
}

export const projetos = async () => {
   
    const url = `http://localhost:8080/v1/tomorrows-water/projeto`
    const response = await fetch(url)
    const data = await response.json()
    const { projetos } = data;
    console.log(projetos)
    return {
        ...data
    }
    
}