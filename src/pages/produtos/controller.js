import React, { useState, useEffect } from 'react';
import Item from './produto';

const ProdutoPage = () => {
    const [produto, setProduto] = useState(null);

    // Fazendo a requisição para buscar o produto
    useEffect(() => {
        fetch('URL_DO_SEU_BACKEND/api/produtos/3')
            .then(response => response.json())
            .then(data => {
                setProduto(data);
            })
            .catch(error => {
                console.error('Erro ao buscar o produto:', error);
            });
    }, []);

    // Exibir um estado de loading enquanto o produto não for carregado
    if (!produto) {
        return <p>Carregando...</p>;
    }

    return (
        <Item
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            status={produto.status}
            imagem={produto.imagem}
            categoria={produto.categoria.nome}
        />
    );
};

export default ProdutoPage;
