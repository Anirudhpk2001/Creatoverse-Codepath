import React from 'react';

function CreatorCard({ creator, onDelete }) {
  return (
    <article style={{ maxWidth: '400px', margin: '1rem auto' }}>
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} style={{ width: '100%', borderRadius: '0.5rem' }} />
      )}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a href={creator.url} target="_blank" rel="noopener noreferrer" role="button">
          Visit Channel
        </a>
        {onDelete && (
          <button className="contrast" onClick={() => onDelete(creator.name)}>
            Delete
          </button>
        )}
      </footer>
    </article>
  );
}

export default CreatorCard;
