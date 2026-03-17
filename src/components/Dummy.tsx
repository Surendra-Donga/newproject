
import itachiImg from '../assets/itachi.png';

const Dummy = () => {
  return (
    <div className="p-3 text-center">
        <h3 className="h5 mb-3 text-primary">Dummy Component</h3>
        <p className="text-muted">This is a dummy component. It doesn't do much, but it's here to demonstrate how to create and use a simple React component.</p>
        <div className="mt-4">
          <img src={itachiImg} alt="itachi" className="img-thumbnail shadow-sm" style={{ maxWidth: '300px' }} />
        </div>
    </div>
  )
}

export default Dummy;