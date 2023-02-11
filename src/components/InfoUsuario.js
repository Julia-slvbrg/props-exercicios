

export function InfoUsuario (props){
  const usuario = 'Fulano'
  const titulo = "Título do vídeo";

  function reproduzVideo(props) {
      alert("O vídeo está sendo reproduzido");
  }

  return(
      <div className="box-pagina-principal" onClick={reproduzVideo}>
          <img src={props.card.imagem} alt="" />
          <h3>{titulo}</h3>
          <h4>{props.card.usuario}</h4>
      </div>
  )
}