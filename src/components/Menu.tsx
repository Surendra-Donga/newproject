const Menu = () => {
  return (
    <div className="card-body">
        <h1 className="h3 mb-3 text-primary">Menu</h1>
        <p className="lead mb-4">Welcome to the menu! Here you can find various options and settings for your application.</p>
        <div className="d-grid gap-3">
            <a href="/" className="btn btn-outline-primary btn-lg shadow-sm">Home</a>
            <a href="/dashboard" className="btn btn-outline-secondary btn-lg shadow-sm">Dashboard</a>
            <a href="/about" className="btn btn-outline-info btn-lg shadow-sm">About</a>
        </div>
    </div>
  )
};

export default Menu;