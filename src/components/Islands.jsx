import { useState } from "react";
import islands from "../data/islands";

function Islands() {

  const [search,setSearch] =
  useState("");

  const filtered =
  islands.filter(island =>

    island.name
    .toLowerCase()
    .includes(
      search.toLowerCase()
    )

  );

  return (

    <section className="section">

      <h2>

        🌍 Islands

      </h2>

      <input

        className="search-input"

        placeholder=
        "Search Island..."

        value={search}

        onChange={(e)=>
        setSearch(
          e.target.value
        )}

      />

      <div
      className="timeline-grid"
      >

        {

          filtered.map(
            island => (

            <div

              key={island.id}

              className=
              "timeline-card"

            >

              <img

                src={
                  island.image
                }

                alt={
                  island.name
                }

                loading="lazy"

                style={{

                  width:"100%",

                  height:"200px",

                  objectFit:
                  "cover",

                  borderRadius:
                  "15px",

                  marginBottom:
                  "10px"

                }}

              />

              <h3>

                {island.name}

              </h3>

              <p>

                <strong>

                  Sea:

                </strong>

                {" "}

                {island.sea}

              </p>

              <p>

                <strong>

                  Ruler:

                </strong>

                {" "}

                {island.ruler}

              </p>

              <p>

                {
                  island.description
                }

              </p>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Islands;