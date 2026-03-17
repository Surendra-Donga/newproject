

const Home = () => {
  return (
    <div className="card-body">
        <h1 className="h3 mb-3 text-primary">Home</h1>
        <p className="lead mb-4">Welcome to the home page! Here you can find the latest updates and news about our application.</p>
        <div className="list-group">
            <a href="/dashboard" className="list-group-item list-group-item-action border-0 shadow-sm mb-2 rounded">
                <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </a>
            <a href="/menu" className="list-group-item list-group-item-action border-0 shadow-sm mb-2 rounded">
                <i className="bi bi-list me-2"></i> Menu
            </a>
            <a href="/about" className="list-group-item list-group-item-action border-0 shadow-sm mb-2 rounded">
                <i className="bi bi-info-circle me-2"></i> About
            </a>
        </div>
    </div>
  )
};

export default Home;