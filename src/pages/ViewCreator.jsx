import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../client';

function ViewCreator() {
  const { name } = useParams();
  const [creator, setCreator] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('name', name)
        .single();

      if (error) setError('Creator not found.');
      else setCreator(data);
    };

    fetchCreator();
  }, [name]);

  if (error) return <p>{error}</p>;
  if (!creator) return <p>Loading...</p>;

  return (
    <main className="container" style={{ textAlign: 'center' ,padding:"20px"}} >
      <h2 >{creator.name}</h2>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} style={{ maxWidth: '400px' }} />}
      <p><strong>Description:</strong> {creator.description}</p>
      <p>
        <strong>URL:</strong>{' '}
        <a href={creator.url} target="_blank" rel="noopener noreferrer">
          Visit Channel
        </a>
      </p>
    </main>
  );
}

export default ViewCreator;
