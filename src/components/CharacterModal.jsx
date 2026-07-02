import { useState } from "react";

function CharacterModal({
  character,
  onClose,
  favorites,
  toggleFavorite,
}) {
  const [activeTab, setActiveTab] = useState("bio");

  if (!character) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✖
        </button>

        <img
          src={character.image}
          alt={character.name}
          className="modal-image"
        />

        <h2>{character.name}</h2>
        <div className="stats-row">

  <div>

    Age

    <br />

    {character.age}

  </div>

  <div>

    Bounty

    <br />

    {character.bounty}

  </div>

  <div>

    Status

    <br />

    {character.status}

  </div>

</div>

        <div className="tabs">
          <button
            className={
              activeTab === "bio"
                ? "tab active-tab"
                : "tab"
            }
            onClick={() =>
              setActiveTab("bio")
            }
          >
            Biography
          </button>

          <button
            className={
              activeTab === "powers"
                ? "tab active-tab"
                : "tab"
            }
            onClick={() =>
              setActiveTab("powers")
            }
          >
            Powers
          </button>

          <button
            className={
              activeTab === "relations"
                ? "tab active-tab"
                : "tab"
            }
            onClick={() =>
              setActiveTab("relations")
            }
          >
            Relations
          </button>

          <button
            className={
              activeTab === "gallery"
                ? "tab active-tab"
                : "tab"
            }
            onClick={() =>
              setActiveTab("gallery")
            }
          >
            Gallery
          </button>
        </div>

        {/* BIO */}
        {activeTab === "bio" && (
          <div>
            <p>
              <strong>Role:</strong>{" "}
              {character.role}
            </p>

            <p>
              <strong>Crew:</strong>{" "}
              {character.crew}
            </p>

            <p>
              <strong>Age:</strong>{" "}
              {character.age}
            </p>

            <p>
              <strong>Birthday:</strong>{" "}
              {character.birthday}
            </p>

            <p>
              <strong>Height:</strong>{" "}
              {character.height}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {character.status}
            </p>

            <p>
              <strong>Origin:</strong>{" "}
              {character.origin}
            </p>

            <p>
              <strong>Description:</strong>{" "}
              {character.description}
            </p>
          </div>
        )}

        {/* POWERS */}
        {activeTab === "powers" && (
          <div>
            <p>
              <strong>Bounty:</strong>{" "}
              {character.bounty}
            </p>

            <p>
              <strong>Devil Fruit:</strong>{" "}
              {character.devilFruit}
            </p>

            <p>
              <strong>Fruit Type:</strong>{" "}
              {character.fruitType}
            </p>

            <p>
              <strong>Haki:</strong>{" "}
              {Array.isArray(character.haki)
  ? character.haki.join(", ")
  : character.haki}
            </p>

            <p>
              <strong>Abilities:</strong>{" "}
              {Array.isArray(character.powers)
  ? character.powers.join(", ")
  : character.powers} 
            </p>
          </div>
        )}

        {/* RELATIONS */}
        {activeTab === "relations" && (
          <div>
            <p>
              <strong>Family:</strong>{" "}
              {Array.isArray(character.family)
  ? character.family.join(", ")
  : JSON.stringify(character.family)}
            </p>

            <p>
              <strong>Relationships:</strong>{" "}
              {Array.isArray(character.relationships)
  ? character.relationships.join(", ")
  : JSON.stringify(character.relationships)}
            </p>

            <p>
              <strong>Enemies:</strong>{" "}
              {Array.isArray(character.enemies)
  ? character.enemies.join(", ")
  : character.enemies}
            </p>
          </div>
        )}

        {/* GALLERY */}
        {activeTab === "gallery" && (
          <div className="gallery-grid">
            {character.gallery?.map(
              (img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${character.name}-${index}`}
                  className="gallery-image"
                />
              )
            )}
          </div>
        )}

        <button
          className="theme-btn"
          onClick={() =>
            toggleFavorite(
              character.id
            )
          }
        >
          {favorites.includes(
            Number(character.id)
          )
            ? "❤️ Remove Favorite"
            : "🤍 Add Favorite"}
        </button>
      </div>
    </div>
  );
}

export default CharacterModal;