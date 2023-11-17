import TablaReclamos from "../components/TablaReclamos/TablaReclamos"

const Inicio = () => {
  return (
    <div className='contenido' style={{height: "100vh"}}>
      <div className="cabeceraReclamos">
        <h4>Reclamos</h4>
        <hr/>
      </div>
      <TablaReclamos/>
    </div>
  )
}

export default Inicio