import TodoApp from './components/TodoApp'

function App() {

  return (
    <>
    <header className='title is-1 is-primary section is-flex is-justify-content-center'>
      <div>
        Todo App
      </div>
    </header>
    <main>
      <section className='section'>
        <div className='container is-flex is-justify-content-center'>
          <TodoApp></TodoApp>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
