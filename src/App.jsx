import React from 'react'
import MyPage from './Components/MyPage'
import MyPageContext from './Components_Context/MyPageContext'
import Api from './CRUD/Api'
import {CrudProvider} from './CRUD/context/CrudContext'
import './styles.css'

function App() {
  return (
    <div>
      <CrudProvider>
      <Api/>
      </CrudProvider>
      <MyPage/>
      <MyPageContext/>
    </div>
  )
}

export default App