import {useState, useEffect} from 'react'
import {Form, } from 'react-bootstrap'
import '../components/factura.css';
import swal from 'sweetalert'


const Factura = () => {

    const numRamdon =  ()  => {
     return Math.floor(Math.random()*54248)
    }
    

    const alerta = () => {
        swal({
            position: 'top-end',
            icon: 'success',
            title: 'Tu guia se ha generado con el # '+ numRamdon(),
                       
          })
    }
   
    const [datos, setDatos] = useState([])
    const [items, setItems] = useState([])
    const [peso, setPeso] = useState([])
    const [input, setInput] = useState('')
    
      
    const enviar = (event) => {
        obtenerData() 
        obtenerDataItems() 
        obtenerPeso()
    }
        
    const obtenerData = async () => {
        const data = await fetch('https://portal.lavital.co/logistica/v1test/factura.php?id='+input)
        const facturas = await data.json()
       
        const userData = {
            facturaid: facturas.bill,
            nombre: facturas.name_customer,
            cedula: facturas.id_customer,
            dane: facturas.dane,
            departamento: facturas.department,
            ciudad: facturas.city,
            barrio: facturas.neighbourhood,
            zona: facturas.zone,
            direccion: facturas.shipping_address,
            complemento: facturas.shipping_address_complement,
            campaña: facturas.campaign,
            lista_Precio: facturas.price_list,
            fecha: facturas.record_date,
            fecha_Inscripcion: facturas.enrollment_date,
            fecha_envio: facturas.shipping_date,
            catidad: facturas.num_items,
            peso: facturas.weight
   
        }

        setDatos(userData)
     }

     const obtenerDataItems = async () => {
         try {
            const dataItems = await fetch('https://www.lasantevital.com.co/logistica/v1test/items.php?id='+input)
            const itemsRecibidos = await dataItems.json()
                        
            setItems(itemsRecibidos)
    
         }catch (error){
             console.log(error)

         }
      
     }

   
    const obtenerPeso = async () => {
        try {
            const datoPeso = await fetch('https://www.lasantevital.com.co/logistica/v1test/peso.php?id='+input)
            const pesoRecibido = await datoPeso.json()
            
            setPeso(pesoRecibido)
   
        }catch (error){
            console.log(error)

        }
     
    }


      useEffect(() => {
        enviar()       
        
     }, [] )
      
    return (

        <>  
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Factura Digital</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
            </ul>
            <span className="navbar-text">
              
            </span>
          </div>
        </div>
      </nav>



        <div className="Contendor-principal ">
        
            <div className="mt-1"> 
                <h1>Consulta tu factura</h1>
            </div>
            <Form.Group className="mb-4  col-sm-6 col-xl-6 col-lg-6 col-8 offset-lg-3 offset-sm-3 offset-2" >
                <Form.Label>Consulta la factura</Form.Label>
                    <Form.Control value={input} onInput={e => setInput(e.target.value)} type="text" placeholder="Ingresa el Id de la factura" />
                     <button  onClick={enviar} type="button" className="btn btn-danger mt-2">Consultar</button>
            </Form.Group>     
      
         <h2>Informacion de la factura</h2>

            { datos.facturaid ? (

                <div className=" container-all col-xl-10 col-lg-10  col-md-10  col-sm-10 col-10  offset-xl-1 offset-md-1 offset-lg-1 offset-sm-1 offset-1 "> 
                <div className="row">
        
                    <div className="bloqueNegro col-xl-7 col-lg-7 col-sm-7 col-md-7 col-7">
                    </div>
    
                    <div className="bloqueBlanco col-xl-5 col-lg-5 col-sm-5 col-md-5 col-5">
                        <h1>FACTURA</h1>
                    </div>
                    
                    <div className="bloqueRojo col-xl-12 col-lg-12 col-sm-12 col-md-12 col-12">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-sm-7 col-md-7 col-7">
                                <h5><strong>Factura # </strong> {datos.facturaid} </h5> 
                            </div>
                            <div className="col-xl-5 col-lg-5 col-sm-5 col-md-5 col-5">
                                <h4> Fecha {datos.fecha}</h4>
                            </div>  
                        </div>
                    </div>
    
                    <div className="cuadroDato overflow-auto  col-xl-10 col-lg-10  col-md-10  col-sm-10 col-10  offset-xl-1 offset-md-1 offset-lg-1 offset-sm-1 offset-1">

                     { items.map(item => (
                        <div className="col columnas" key={item.id_item}> 
                            <div className="card">
                                <div className="card_image"> 
                                 <img src="https://image.freepik.com/foto-gratis/surtido-elementos-black-friday_23-2149074076.jpg" /> 
                                 </div>
                                   <div className="card_title title-white">
                                    <div className="cantidad">
                                   <p> X {item.num_items}</p>
                                  </div>
                                    <p>{item.item_name}</p>
                                </div>
                            </div>
                        </div>
                        )) 
                    }
                    
                        
                    </div>
                
                    <div className="bloqueInferior col-xl-12 col-lg-12 col-sm-12 col-md-12">
                  
                        <div className="col columnas">
                        <div className="linea"></div>
                            <h4>Factura a:  </h4>
                            <h5>{datos.nombre}</h5>
                            <p><strong>Departmento</strong> {datos.departamento}</p>
                            <p><strong>Ciudad:</strong> {datos.ciudad}</p>
                            <p><strong>Barrio</strong>: {datos.barrio}</p>
                            <p><strong>Direccion:</strong> {datos.direccion}</p>
                            <p><strong>Datos complementarios:</strong>  {datos.complemento}</p>
                            <p><strong>Peso total:</strong>  {peso.weight}</p>
                           
    
                        </div>
                        
                        <div className="col columnas mitad">
                        <div className="linea"></div>
                            <h3><strong>Gracias por su compra</strong></h3>
                            <h4>Informacion de pago:</h4>
                            <p>Cuenta # 1234 5678 9434 </p>
                            <p>Detalles del banco:   Banco </p>
                            
                        </div>
    
                        <div className="col columnas total">
                        <div className="linea"></div>
                            <h4>Sub total: $1.120.500</h4>
                            <h4>Total: <span>$1.200.500</span> </h4>
                           
                        </div>
    
                        
                    </div>
                    
                  
                    <section id="formulario" className="mb-4">

                        <form>
                            <div className="container mt-4 mb-4 ">
                                    <div className="row text-center">
                                        <div className="col-12 text-uppercase">
                                            <h4>Genera la guia del envio</h4>
                                            <small>Para generar la guia de envio debes ingresar los datos </small>
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-3">
                                        <div className="form-group col-12 col-sm-6 col-lg-4 offset-lg-2 ">
                                            <input type="text"className="form-control" placeholder="Nombre"  required/>
                                        </div>

                                        <div className="form-group col-12 col-sm-6 col-lg-4 ">
                                            <input type="email"className="form-control" placeholder="Correo Electronico"  required/>
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-3">
                                        <div className="form-group col-12 col-sm-6 col-lg-4 offset-lg-2 ">
                                            <input type="text"className="form-control" placeholder="Direccion"  required/>
                                        </div>

                                        <div className="form-group col-12 col-sm-6 col-lg-4 ">
                                            <input type="email"className="form-control" placeholder="Telefono"  required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="guia-div">
                                            <button  onClick={()=>alerta()} type="button" className="btn btn-success mt-2">Generar</button>
                                        </div>
                                    </div>
                            </div>
                        </form>
                    </section>
                </div>
                
            </div>
            
            

             ): 
                <div className="NoData">
                     <p>Digita el numero de factura y luego presiona el boton para buscar</p>
                </div>
            

            } 

      
        </div>
    </>
    )
}

export default Factura
