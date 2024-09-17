import React from 'react';

export default function Item({nome, descricao, preco, imagem, categoria, status}) {
    return (
        <li>
            <strong>Nome: </strong>
            <p>{nome}</p>
            <strong>Descrição: </strong>
            <p>{descricao}</p>
            <strong>Preço: </strong>
            <p>{preco}</p>
            <strong>Status: </strong>
            <p>{status}</p>
            <strong>Categoria: </strong>
            <p>{categoria}</p>
            <strong>Imagam: </strong>
            <img src={imagem} alt={nome} style={{width: '100px', height: '100px'}}/>
        </li>
    );
}