import { useState } from "react";

import characters from "../data/characters";
import timeline from "../data/timeline";
import islands from "../data/islands";
import devilFruits from "../data/devilFruits";
import crews from "../data/crews";
import ships from "../data/ships";
import worldMap from "../data/worldMap";

function EncyclopediaSearch() {

  const [query,setQuery] =
  useState("");

  const searchTerm =
    query.toLowerCase();

  const characterResults =
    characters.filter(
      item =>
        item.name
          .toLowerCase()
          .includes(searchTerm)
    );

  const islandResults =
    islands.filter(
      item =>
        item.name
          .toLowerCase()
          .includes(searchTerm)
    );

  const fruitResults =
    devilFruits.filter(
      item =>
        item.name
          .toLowerCase()
          .includes(searchTerm)
    );

  const crewResults =
    crews.filter(
      item =>
        item.name
          .toLowerCase()
          .includes(searchTerm)
    );

  const shipResults =
    ships.filter(
      item =>
        item.name
          .toLowerCase()
          .includes(searchTerm)
    );

  const timelineResults =
    timeline.filter(
      item =>
        item.arc
          .toLowerCase()
          .includes(searchTerm)
    );

  const regionResults =
    worldMap.filter(
      item =>
        item.region
          .toLowerCase()
          .includes(searchTerm)
    );

  return (

    <section className="section">

      <h2>

        🔍 Encyclopedia Search

      </h2>

      <input

        className="search-input"

        placeholder=
        "Search Anything..."

        value={query}

        onChange={(e)=>

          setQuery(
            e.target.value
          )

        }

      />

      {

        query && (

          <>

            <SearchGroup
              title="👤 Characters"
              data={characterResults}
              field="name"
            />

            <SearchGroup
              title="🏝 Islands"
              data={islandResults}
              field="name"
            />

            <SearchGroup
              title="🍈 Devil Fruits"
              data={fruitResults}
              field="name"
            />

            <SearchGroup
              title="⚔ Crews"
              data={crewResults}
              field="name"
            />

            <SearchGroup
              title="🚢 Ships"
              data={shipResults}
              field="name"
            />

            <SearchGroup
              title="📜 Timeline"
              data={timelineResults}
              field="arc"
            />

            <SearchGroup
              title="🗺 Regions"
              data={regionResults}
              field="region"
            />

          </>

        )

      }

    </section>

  );

}

function SearchGroup({

title,

data,

field

}) {

  if (data.length === 0)
    return null;

  return (

    <div
      className=
      "search-group"
    >

      <h3>

        {title}

      </h3>

      {

        data.map(
          item => (

            <div

              key={item.id}

              className=
              "search-result"

            >

              {
                item[field]
              }

            </div>

          )
        )

      }

    </div>

  );

}

export default EncyclopediaSearch;