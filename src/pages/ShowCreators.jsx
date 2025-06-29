import { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*');

      if (error) console.error('Error fetching creators:', error);
      else setCreators(data);
    };

    fetchCreators();
  }, []);

  return (
    <div>
      <h1>All Creators</h1>
      {creators.map((creator) => (
        <CreatorCard key={creator.name} creator={creator} />
      ))}
    </div>
  );
}

export default ShowCreators;
