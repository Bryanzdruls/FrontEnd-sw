import { Link } from "react-router-dom"
import StarIcon from '@mui/icons-material/Star';
import './usuarioCard.css'


export const UsuarioCard = ({
    Cargo,
    CargoId,
    apellido,
    email,
    id,
    estado,
    nombre,
    password,
    
}) => {

  //const charactersByHero = (<p>{characters}</p>);
  return (
    
    <div className="card border-0">

      <div className="card-body">
        <StarIcon/>
        <div className="mb-3"><a className="card-link text-primary read-more" href="javascript://">Cargo: {
        Cargo.nombrecargo !== null ?
        Cargo.nombreCargo : <b>No tiene cargo asignado</b>
        }</a></div>
        <h5 className="card-title"><b>Nombre del empleado: {nombre+' '+apellido}</b></h5>
        <p className="card-title"><b>Correo: {email}</b></p>
      </div>
      <div class="card-footer">
        <div class="media align-items-center">
          <div class="media-body"><a class="card-link text-uppercase" href="javascript://">Calificar</a></div>
          <div class="footerright">
            <div class="tnlink3"><i class="fas fa-heart" aria-hidden="true"></i></div>
            <div class="tnlink3"><i class="fas fa-share-nodes" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>
    
  )
}