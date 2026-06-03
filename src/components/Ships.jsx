import { useState } from "react";
import ships from "../data/ships";

function Ships() {

  const [search,setSearch] =
  useState("");

  const filteredShips =
    ships.filter((ship)=>

      ship.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

      ||

      ship.crew
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );

  return (

    <section className="section">

      <h2>

        🚢 Ships

      </h2>

      <input

        className="search-input"

        placeholder=
        "Search Ship..."

        value={search}

        onChange={(e)=>

          setSearch(
            e.target.value
          )

        }

      />

      <p>

        Showing

        {" "}

        <strong>

          {
            filteredShips.length
          }

        </strong>

        ship(s)

      </p>

      <div className="timeline-grid">

        {

          filteredShips.map(
            (ship)=>(

              <div

                key={ship.id}

                className=
                "timeline-card"

              >

                <h3>

                  🚢 {ship.name}

                </h3>

                <p>

                  <strong>

                    Crew:

                  </strong>

                  {" "}

                  ⚔ {ship.crew}

                </p>

                <p>

                  <strong>

                    Captain:

                  </strong>

                  {" "}

                  👑 {ship.captain}

                </p>

                <p>

                  <strong>

                    Builder:

                  </strong>

                  {" "}

                  🔨 {ship.builder}

                </p>

                <p>

                  <strong>

                    Debut:

                  </strong>

                  {" "}

                  📖 {ship.debut}

                </p>

                <p>

                  <strong>

                    Status:

                  </strong>

                  {" "}

                  <span
                    className=
                    "crew-status"
                  >

                    {ship.status}

                  </span>

                </p>

                <p>

                  {ship.description}

                </p>

              </div>

            )
          )

        }

      </div>

    </section>

  );

}

export default Ships;