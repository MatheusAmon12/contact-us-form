import './App.css'
import BackgroundContainer from './components/background-container'
import Form from './components/form'

function App() {

  return (
    <div className='pb-20'>
      <BackgroundContainer />
      <Form>
        <h1 className='pb-6 text-3xl font-sans font-bold text-primary'>Formulário de Contato</h1>
      </Form>
    </div>
  )
}

export default App
