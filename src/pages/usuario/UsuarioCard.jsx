import './usuarioCard.css'
import Button from '@mui/material/Button'
import Swal from 'sweetalert2'



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


var descripcion = '';
var valor = 0;

  const Calificacion = () => {
    Swal.fire
      (
        {
          input: 'textarea',
          title: "Calificaciones",
          inputPlaceholder: 'Describa su calificacion',
          showCancelButton: true,
        

          },
        
      ).then((result) => {
      
        if (result.value != '') {
          descripcion = result.value
          Swal.fire({
            title: 'Selecciona una estrella',
            input: 'select',
            inputOptions:{
                1: '★',
                2:'★★',
                3:'★★★',
                4:'★★★★',
                5:'★★★★★',
                
            },
          
          }
          
          ).then((result) =>{

            valor =parseInt(result.value);
            console.log(descripcion)
            console.log(valor)

            Swal.fire({
              title: 'Completado',
              text: 'Tu calificacion ha sido enviada correctamente',
              icon: 'success',
            })
          })
        }else{
          Swal.fire({
            title: 'Error',
            text: 'Debes escribir algo...',
            icon: 'error',
          })
        }
      })
  }

  return (

    <div className="card border-0">

      <div className="card-body">
        <div className="mb-3">
          <a className="card-cargo text-primary read-more" >Cargo: {
            Cargo.nombrecargo !== null ?
              Cargo.nombreCargo : <b>No tiene cargo asignado</b>
          }</a>
        </div>
        <h5 className="card-title"><b>Nombre del empleado: {nombre + ' ' + apellido}</b></h5>
        <p className="card-title"><b>Correo: {email}</b></p>
      </div>
      <div class="card-footer">
        <div class="media align-items-center">
          <div class="footerright">
            <div class="media-body">
              <Button variant="contained" color="primary" onClick={Calificacion}>
                Calificar
              </Button>

            </div>
            <div class="tnlink3"><i class="fas fa-heart" aria-hidden="true"></i></div>
            <div class="tnlink3"><i class="fas fa-share-nodes" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>

  )
}