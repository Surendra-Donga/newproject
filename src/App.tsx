import Dummy from "./components/Dummy";
import itachiImg from "./assets/itachi.png";
import viteLogo from "./assets/vite.svg";

const App = () => {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4 shadow-sm px-3">
        <a className="navbar-brand fw-bold" href="/">My App</a>
        <div className="navbar-nav ms-auto flex-row">
          <a className="nav-link px-3" href="/">Home</a>
          <a className="nav-link px-3" href="/dashboard">Dashboard</a>
          <a className="nav-link px-3" href="/menu">Menu</a>
          <a className="nav-link px-3" href="/about">About</a>
        </div>
      </nav>

      <div className="card shadow-sm mb-4">
        <div className="card-body text-center">
          <p className="lead text-muted mb-3">Welcome to our application! This is the main entry point of our React app.</p>
          <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
             <img src={viteLogo} alt="vite logo" className="img-fluid" style={{ height: '40px' }} />
             <img src={itachiImg} alt="itachi" className="img-fluid rounded shadow-sm" style={{ height: '40px' }} />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <Dummy title="My Custom Dummy" description="This is a description passed via props from App.tsx!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;