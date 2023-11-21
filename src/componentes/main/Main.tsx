import React, { useState, useEffect } from "react";
import Filme from "../filme/Filme.tsx";
import axios from 'axios';
import './Main.css';

type FilmesType = {
  id: number;
  sinopse: string;
  descricao: string;
  imagem: string;
};

//
const URL_API = "http://localhost:3000/filmes"; // Substitua pela URL real da sua API

export default function Main() {
  const [texto, setTexto] = useState("");
  const [filmes, setFilmes] = useState<FilmesType[]>([]);

  useEffect(() => {
    const buscarFilmes = async () => {
      try {
        const resposta = await axios.get<FilmesType[]>(URL_API);
        setFilmes(resposta.data);
      } catch (error) {
        console.log('Erro ao buscar os dados:');
      }
    };

    buscarFilmes();
  }, []);
//

  function muda_txt(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }

  
  return (
    <>
      <div className="pesquisa">
        <p>Buscar Filme</p>
        <input className="barrapesquisa" type="text" onChange={muda_txt}></input>
        <div>
          <p className="txt_digitado">Pesquisa: {texto}</p>
        </div>
      </div>

      <main className="content_main">
        {filmes
          .filter((filme) =>
            filme.sinopse.toLowerCase().includes(texto.toLowerCase())
          )
          .map((filme) => (
            <Filme
              key={filme.id}
              descricao={filme.descricao}
              sinopse={filme.sinopse}
              imagem={filme.imagem}
            />
          ))}
      </main>
    </>
  );
}