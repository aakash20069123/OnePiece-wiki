import { useState } from "react";
import worldMap from "../data/worldMap";

function WorldMap() {

  const [search,setSearch] =
  useState("");

  const filteredRegions =
    worldMap.filter((region)=>

      region.region
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );

  return (

    <section className="section">

      <h2>

        🗺️ World Map

      </h2>

      <input

        className="search-input"

        placeholder=
        "Search Region..."

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
            filteredRegions.length
          }

        </strong>

        region(s)

      </p>

      <div className="timeline-grid">

        {

          filteredRegions.map(
            (region)=>(

              <div

                key={region.id}

                className=
                "timeline-card"

              >

                <h3>

                  🗺️ {region.region}

                </h3>

                <p>

                  {region.description}

                </p>

                <p>

                  <strong>

                    Islands

                  </strong>

                </p>

                <ul>

                  {

                    region.islands.map(
                      (island)=>(

                        <li
                          key={island}
                        >

                          {island}

                        </li>

                      )
                    )

                  }

                </ul>

              </div>

            )
          )

        }

      </div>

    </section>

  );

}

export default WorldMap;