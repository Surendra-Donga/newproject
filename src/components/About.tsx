const About = () => {
  return (
    <div className="card-body">
        <h1 className="h3 mb-3 text-primary">About</h1>
        <p className="lead mb-4">Welcome to the about page! Here you can learn more about our application and its features.</p>
        <div className="btn-group w-100" role="group">
            <a href="/" className="btn btn-outline-secondary">Home</a>
            <a href="/dashboard" className="btn btn-outline-secondary">Dashboard</a>
            <a href="/menu" className="btn btn-outline-secondary">Menu</a>
        </div>
    </div>
  )
}

export default About;