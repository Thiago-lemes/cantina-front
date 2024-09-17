import React, { useState, useEffect } from 'react';
import './produto.css'
import Item from './produto';

export default function ProdutoList() {
    const [produtos, setProdutos] = useState([]);
    const [page, setPage] = useState(0);
    const [size] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchProdutos(page, size);
    }, [page, size]);

    const fetchProdutos = (page, size) => {
        fetch(`http://localhost:8080/produtos/find-all?page=${page}&size=${size}`)
            .then(response => response.json())
            .then(data => {
                setProdutos(data.content);
                setTotalPages(data.totalPages);
            })
            .catch(error => {
                console.error('Erro ao buscar os produtos:', error);
            });
    };

    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="produto-container">
            <ul>
                {produtos.map(produto => (
                    <Item
                        key={produto.id}
                        nome={produto.nome}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        imagem={produto.imagem}
                        categoria={produto.categoria.nome}
                    />
                ))}
            </ul>

            <div>
                <button onClick={handlePreviousPage} disabled={page === 0}>
                    Anterior
                </button>
                <button onClick={handleNextPage} disabled={page >= totalPages - 1}>
                    Próxima
                </button>
            </div>
        </div>
    );
}
