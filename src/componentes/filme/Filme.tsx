import './filme.css'
type  FilmeProps={
    sinopse:string,
    descricao:string,
    imagem:string

}
export default function Filme(props:FilmeProps){
    return(
        <div className="filme_container">
            <div className='foto-filme'>
              <img src={props.imagem} alt=""/>   
            </div>
            <div className="texto_foto">
                <h1>{props.sinopse}</h1>
                <p className="descricao">{props.descricao}</p>
            </div>
         </div>
    )
}