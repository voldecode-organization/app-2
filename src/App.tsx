import './App.css'
import Header from './components/Header/Header'
import Counter from './components/Counter/Counter'

function App() {
  return (
    <main>
      <Header />
      <section>
        <h2>It's new title in this section!</h2>
        <h3>I need to add a subtitle</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          aperiam, itaque ut saepe omnis tempore necessitatibus ex doloremque
          repudiandae maxime? Eveniet eius dicta temporibus voluptates est ut
          similique reiciendis harum!
        </p>
      </section>

      <Counter />
    </main>
  )
}

export default App
