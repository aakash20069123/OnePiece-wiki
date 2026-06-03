import AIBuilder from "./components/AIBuilder";
import AIAssistant from "./components/AIAssistant.jsx";
import EncyclopediaSearch from "./components/EncyclopediaSearch";
import WorldMap from "./components/WorldMap";
import Ships from "./components/Ships";
import Crews from "./components/Crews";
import DevilFruits from "./components/DevilFruits";
import Islands from "./components/Islands";
import Timeline from "./components/Timeline";
import { useState, useEffect } from "react";

import characters from "./data/characters";

import CharacterModal from "./components/CharacterModal.jsx";

function App() {

  const [theme, setTheme] = useState("dark");

  const [search, setSearch] = useState("");
  const [selectedCharacter,
  setSelectedCharacter] =
  useState(null);

  const [favorites, setFavorites] = useState(() => {

    const saved =
      localStorage.getItem("favorites");

    return saved
      ? JSON.parse(saved)
      : [];

  });

const [customCharacters,
  setCustomCharacters] =
  useState([]);
    const favoriteCharacters =
  characters.filter(
    (character) =>
      favorites.includes(
        Number(character.id)
      )
  );

  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);
  useEffect(() => {

  const saved =
    localStorage.getItem(
      "customCharacters"
    );

  if(saved){

    setCustomCharacters(
      JSON.parse(saved)
    );

  }

}, []);

  function toggleTheme() {

    if (theme === "dark") {

      setTheme("light");

      document.body.classList.add(
        "light"
      );

    } else {

      setTheme("dark");

      document.body.classList.remove(
        "light"
      );

    }

  }

  function toggleFavorite(id) {

    const numericId =
      Number(id);

    if (
      favorites.includes(
        numericId
      )
    ) {

      setFavorites(

        favorites.filter(
          fav =>
            fav !== numericId
        )

      );

    } else {

      setFavorites([
        ...favorites,
        numericId
      ]);

    }

  }
  const allCharacters = [

  ...characters,

  ...customCharacters

];

  return (

    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo">
          🏴‍☠️ One Search
        </div>

        <nav className="menu">

          <a href="#">
            Dashboard
          </a>

          <a href="#">
            Characters
          </a>

          <a href="#">
            Crews
          </a>

          <a href="#">
            Islands
          </a>

          <a href="#">
            Fruits
          </a>

          <a href="#">
            Timeline
          </a>

          <a href="#">
            Map
          </a>

          <a href="#">
            AI
          </a>

        </nav>

      </aside>

      {/* MAIN */}

      <main className="main">

        {/* TOPBAR */}

        <div className="topbar">

          <input

            className="search-input"

            type="text"

            placeholder="Search Character..."

            value={search}

            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }

          />

          <button

            className="theme-btn"

            onClick={
              toggleTheme
            }

          >

            {
              theme === "dark"
                ? "☀️ Light"
                : "🌙 Dark"
            }

          </button>

        </div>

        {/* TITLE */}

        <h1>
          Dashboard
        </h1>

        {/* STATS */}

        <div className="stats-grid">

          <div className="stat-card">
            <h2>1190+</h2>
            <p>Characters</p>
          </div>

          <div className="stat-card">
            <h2>100+</h2>
            <p>Crews</p>
          </div>

          <div className="stat-card">
            <h2>150+</h2>
            <p>Islands</p>
          </div>

          <div className="stat-card">
            <h2>200+</h2>
            <p>Fruits</p>
          </div>
          <div className="stat-card">

  <h2>
    {favorites.length}
  </h2>

  <p>
    Favorites
  </p>

</div>

        </div>

        {/* RECENT UPDATES */}

        <div className="section">

          <h2>
            Recent Updates
          </h2>

          <p>
            Welcome to One Search
            Ultimate V5.
          </p>

        </div>

        {/* CHARACTERS */}

        <div className="section">

          <h2>
            Character Gallery
          </h2>

          <div className="characters-grid">

            {

              allCharacters

                .filter(
                  (character) =>
                    character.name
                      .toLowerCase()
                      .includes(
                        search.toLowerCase()
                      )
                )

                .map(
                  (character) => (

                    <div

                      key={
                        character.id
                      }

                      className="character-card"

                      onClick={() =>
                        setSelectedCharacter(
                          character
                        )
                      }

                    >
{
favorites.includes(
Number(character.id)
)
&&

<div
className="favorite-badge"
>

⭐

</div>

}
                      <img

                        src={
                          character.image
                        }

                        alt={
                          character.name
                        }

                      />

                      <div
                        className="character-content"
                      >

                        <h3>
                          {
                            character.name
                          }
                        </h3>

                        <p>
                          Role:
                          {" "}
                          {
                            character.role
                          }
                        </p>

                        <p>
                          Crew:
                          {" "}
                          {
                            character.crew
                          }
                        </p>

                        <p>
                          Bounty:
                          {" "}
                          {
                            character.bounty
                          }
                        </p>

                        <p>
                          Fruit:
                          {" "}
                          {
                            character.devilFruit
                          }
                        </p>

                        <button

                          className="theme-btn"

                          style={{
                            width: "100%",
                            marginTop: "10px"
                          }}

                          onClick={(e) => {

                            e.stopPropagation();

                            toggleFavorite(
                              character.id
                            );

                          }}

                        >

                          {

                            favorites.includes(
                              Number(
                                character.id
                              )
                            )

                              ?

                              "❤️ Remove Favorite"

                              :

                              "🤍 Add Favorite"

                          }

                        </button>

                      </div>

                    </div>

                  )
                )

            }

          </div>

        </div>
<div className="section">

  <h2>
    ⭐ Favorites
  </h2>

  {

    favoriteCharacters.length === 0

      ?

      (

       <div
className="empty-state"
>

⭐

<h3>

No Favorites Yet

</h3>

<p>

Add characters to favorites.

</p>

</div>
      )

      :

      (

        <div className="characters-grid">

          {

            favoriteCharacters.map(
              (character) => (

                <div

                  key={character.id}

                  className="character-card"

                  onClick={() =>
                    setSelectedCharacter(
                      character
                    )
                  }

                >

                  <img
                    src={character.image}
                    alt={character.name}
                  />

                  <div className="character-content">

                    <h3>
                      {character.name}
                    </h3>

                    <p>
                      {character.role}
                    </p>

                  </div>

                </div>

              )
            )

          }

        </div>

      )

  }

</div>
<EncyclopediaSearch />
<Timeline />
<Islands />
<DevilFruits />
<Crews />
<Ships />
<WorldMap />
<AIAssistant />
<AIBuilder />
      </main>

      {/* MODAL */}

      <CharacterModal

        character={
          selectedCharacter
        }

        onClose={() =>
          setSelectedCharacter(
            null
          )
        }

        favorites={
          favorites
        }

        toggleFavorite={
          toggleFavorite
        }

      />

    </div>

  );

}

export default App;