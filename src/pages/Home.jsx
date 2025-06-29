import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import { Pencil } from "lucide-react"; // or any small edit icon SVG


function Home() {
  const navigate = useNavigate();
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select("*");
      if (!error) setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <main className="container">
      <h1 style={{ textAlign: 'center', padding: '20px' }}>Welcome to Creatorverse</h1>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <button onClick={() => navigate("/creators")}>Show All Creators</button>
        <button className="secondary" onClick={() => navigate("/add")}>
          Add a Creator
        </button>
      </div>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {creators.map((creator) => (
          <div
            key={creator.name}
            style={{
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() =>
              navigate(`/creator/${encodeURIComponent(creator.name)}`)
            }
          >
            {creator.imageURL && (
              <img
                src={creator.imageURL}
                alt={creator.name}
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "0.5rem",
                }}
              />
            )}
            <h3>{creator.name}</h3>
            <a
              href={creator.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} 
            >
              Visit Channel
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/edit/${encodeURIComponent(creator.name)}`);
              }}
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Edit"
            >
              <Pencil size={16} />
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
