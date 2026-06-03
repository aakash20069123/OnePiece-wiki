import { useState } from "react";
import devilFruits from "../data/devilFruits";

function DevilFruits() {

  const [search, setSearch] =
    useState("");

  const [typeFilter,
    setTypeFilter] =
    useState("All");

  const filteredFruits =
    devilFruits.filter((fruit) => {

      const matchesSearch =

        fruit.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        fruit.user
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesType =

        typeFilter === "All"

        ||

        fruit.category ===
        typeFilter;

      return (
        matchesSearch &&
        matchesType
      );

    });

  return (

    <section className="section">

      <h2>

        🍈 Devil Fruits

      </h2>

      <div
        style={{
          display:"flex",
          gap:"15px",
          flexWrap:"wrap",
          marginBottom:"20px"
        }}
      >

        <input

          className="search-input"

          placeholder=
          "Search Devil Fruit..."

          value={search}

          onChange={(e)=>

            setSearch(
              e.target.value
            )

          }

        />

        <select

          value={typeFilter}

          onChange={(e)=>

            setTypeFilter(
              e.target.value
            )

          }

        >

          <option>
            All
          </option>

          <option>
            Paramecia
          </option>

          <option>
            Zoan
          </option>

          <option>
            Mythical Zoan
          </option>

          <option>
            Logia
          </option>

        </select>

      </div>

      <p>

        Showing

        {" "}

        <strong>

          {
            filteredFruits.length
          }

        </strong>

        fruit(s)

      </p>

      <div className="timeline-grid">

        {

          filteredFruits.map(
            (fruit) => (

              <div

                key={fruit.id}

                className=
                "timeline-card"

              >

                <h3>

                  🍈

                  {" "}

                  {fruit.name}

                </h3>

                <p>

                  <strong>

                    Type:

                  </strong>

                  {" "}

                  {fruit.category}

                </p>

                <p>

                  <strong>

                    User:

                  </strong>

                  {" "}

                  {fruit.user}

                </p>

                <p>

                  <strong>

                    Awakening:

                  </strong>

                  {" "}

                  {fruit.awakening}

                </p>

                <p>

                  <strong>

                    Debut:

                  </strong>

                  {" "}

                  {fruit.debut}

                </p>

                <p>

                  {fruit.description}

                </p>

                <p>

                  <strong>

                    Abilities:

                  </strong>

                  {" "}

                  {
                    fruit.abilities.join(
                      ", "
                    )
                  }

                </p>

              </div>

            )

          )

        }

      </div>

    </section>

  );

}

export default DevilFruits;