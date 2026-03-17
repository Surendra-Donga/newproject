import itachiImg from '../assets/itachi.png';

interface DummyProps {
  title: string;
  description: string;
}

const Dummy = ({ title, description }: DummyProps) => {
  return (
    <div className="p-3 text-center">
        <h3 className="h5 mb-3 text-primary">{title}</h3>
        <p className="text-muted">{description}</p>
        <div className="mt-4">
          <img src={itachiImg} alt="itachi" className="img-thumbnail shadow-sm" style={{ maxWidth: '300px' }} />
        </div>
    </div>
  )
}

export default Dummy;