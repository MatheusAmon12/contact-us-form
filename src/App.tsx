import Form from './components/form'

function App() {

  return (
    <div className='flex items-center justify-center h-[100vh] bg-computer-sm md:pl-[15vw] md:justify-start md:bg-computer bg-cover bg-center'>
      <Form>
        <h1 className='pb-6 text-3xl font-sans font-bold text-primary text-center xl:text-4xl'>
          Formulário de Contato
        </h1>
      </Form>
    </div>
  )
}

export default App
