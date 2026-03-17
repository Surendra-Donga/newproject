const Dashboard = () => {
  return (
    <div className="card-body">
        <h1 className="h3 mb-3 text-primary">Dashboard</h1>
        <p className="lead mb-4">Welcome to the dashboard! Here you can find an overview of your tasks and activities.</p>
        <div className="row g-3">
            <div className="col-md-4">
              <a href="/" className="btn btn-primary w-100 p-3 shadow-sm">Home</a>
            </div>
            <div className="col-md-4">
              <a href="/menu" className="btn btn-secondary w-100 p-3 shadow-sm">Menu</a>
            </div>
            <div className="col-md-4">
              <a href="/about" className="btn btn-info w-100 p-3 text-white shadow-sm">About</a>
            </div>
        </div>
    </div>
  )
};

export default Dashboard;