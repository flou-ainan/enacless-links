import Image from "next/image"

export default function LinkList({config}){
  return(
    <div className="app">
    <div className="cabeca shadow">
      <div className="bloco01 bloco"></div>
      <div className="bloco02 bloco"></div>
      <div className="bloco03 bloco"></div>
      <div className="bloco04 bloco"></div>
      <div className="bloco05 bloco"></div>
    </div>
    <div className="corpo">
      <div className="perfil">
        <img src={config.url_foto_perfil}
             className="shadow" />

        <span className="titulo t-shadow">{config.titulo}</span>
        <span className="sub-titulo t-shadow">{config.subtitulo}</span>
      </div>
      <div className="links-section flex-col-center">
        <ul className="link-list flex-col-center">
          {config.links.map((link, index) => {
            return <ListButton 
            text={link.texto } 
            url={link.url}
            key={index}/>
          })
        }
        </ul>
      </div>
    </div>
    <div className="rodape">
      <img className="img-rodape" src="agulha-rodape.svg" />
    </div>
  </div>
  )
}

function ListButton({text, url}){
  return(
    <a className="li" href={url}>
      {text}
    </a>
  )
}