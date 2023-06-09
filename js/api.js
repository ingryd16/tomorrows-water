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

export const excluirProduto = async (produtoId) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir o produto?');

    if (!confirmacao) {
        return; // Se o usuário cancelar a exclusão, a função é interrompida
    }

    const url = `http://localhost:8080/v1/tomorrows-water/produto/${produtoId}`;
    const options = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Produto excluído com sucesso!');
        } else {
            console.error('Erro ao excluir o produto.');
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição DELETE:', error);
    }
};



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

export const excluirProjeto = async (projetoId) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir o projeto?');

    if (!confirmacao) {
        return; // Se o usuário cancelar a exclusão, a função é interrompida
    }

    const url = `http://localhost:8080/v1/tomorrows-water/projeto/${projetoId}`;
    const options = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Produto excluído com sucesso!');
        } else {
            console.error('Erro ao excluir o produto.');
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição DELETE:', error);
    }
};

export const patrocinadores = async () => {
   
    const url = `http://localhost:8080/v1/tomorrows-water/patrocinador`
    const response = await fetch(url)
    const data = await response.json()
    const { patrocinadores } = data;
    console.log(patrocinadores)
    return {
        ...data
    }   
}

export const voluntarios = async () => {
   
    const url = `http://localhost:8080/v1/tomorrows-water/voluntario`
    const response = await fetch(url)
    const data = await response.json()
    const { voluntarios } = data;
    console.log(voluntarios)
    return {
        ...data
    }   
}

export const recados = async () => {
   
    const url = `http://localhost:8080/v1/tomorrows-water/recado`
    const response = await fetch(url)
    const data = await response.json()
    const { recados } = data;
    console.log(recados)
    return {
        ...data
    }   
}

export const doacoes = async () => {
   
    const url = `http://localhost:8080/v1/tomorrows-water/doacao`
    const response = await fetch(url)
    const data = await response.json()
    const { doacoes } = data;
    console.log(doacoes)
    return {
        ...data
    }   
}
