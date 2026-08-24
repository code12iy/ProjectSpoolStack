import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('dashboard')

  if (page === 'filament') {
    return (
      <main>
        <button onClick={() => setPage('dashboard')}>
          ← Back
        </button>

        <header>
          <h1>Filament</h1>
          <p>Track your filament spools and inventory.</p>
        </header>

        <section>
          <div className="card">
            <h3>No spools yet</h3>
            <p>
              Add your first filament spool to start tracking your
              3D printing inventory.
            </p>
          </div>
        </section>

        <button>Add Filament</button>
      </main>
    )
  }

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
        <button onClick={() => setPage('filament')}>
          Filament
        </button>

        <button>Print Jobs</button>
        <button>Costs</button>
        <button>Products</button>
      </div>
    </main>
  )
}

export default App