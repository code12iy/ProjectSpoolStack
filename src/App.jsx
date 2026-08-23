import './App.css'

function App() {
  return (
    <main>
      <header>
        <h1>SpoolStack</h1>
        <p>A workspace for 3D printing makers.</p>
      </header>

      <section>
        <h2>Dashboard</h2>

        <div className="card">
          <h3>Filament</h3>
          <p>Track your filament inventory.</p>
        </div>

        <div className="card">
          <h3>Print Jobs</h3>
          <p>Keep track of current and completed prints.</p>
        </div>

        <div className="card">
          <h3>Costs</h3>
          <p>See how much your prints cost to make.</p>
        </div>

        <div className="card">
          <h3>Products</h3>
          <p>See all products in your catalog.</p>
        </div>
      </section>

      <div className="buttons">
        <button>Filament</button>
        <button>Print Jobs</button>
        <button>Costs</button>
        <button>Products</button>
      </div>
    </main>
  )
}

export default App