import React, { useContext } from 'react'
import CrudForm from './components/CrudForm'
import CrudTable from './components/CrudTable'
import Loader from './components/Loader'
import Message from './components/Message'
import CrudContext from './context/CrudContext'
import './styles.css'

function Api() {
  const { db, error, loading} = useContext(CrudContext)

  return (
    <div>
      <article className='grid-1-2'>
        <CrudForm/>
        {/* Si loadding es verdadero, Loader se renderiza */}
        {loading&&<Loader />}
        
        {/* cuando error es verdadero, se renderizara mensaje */}
        {error&&<Message msg={`Error ${error.status}:${error.statusText}`} bgColor={"#dc3545"}/>}

        {/* si la db tiene contenido, la tabla se renderiza */}
        {db&&<CrudTable />
        }
        
        
      </article>
    </div>
  )
}

export default Api