import { useState } from "react";
import crews from "../data/crews";

function Crews() {

  const [search,setSearch] =
  useState("");

  const filteredCrews =
    crews.filter((crew)=>

      crew.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

      ||

      crew.captain
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );

  return (

    <section className="section">

      <h2>

        ⚔ Pirate Crews

      </h2>

      <input

        className="search-input"

        placeholder=
        "Search Crew..."

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
            filteredCrews.length
          }

        </strong>

        crew(s)

      </p>

      <div className="timeline-grid">

        {

          filteredCrews.map(
            (crew)=>(

              <div

                key={crew.id}

                className=
                "timeline-card"

              >

                <h3>

                  ⚔ {crew.name}

                </h3>

                <p>

                  <strong>

                    Captain:

                  </strong>

                  {" "}

                  👑 {crew.captain}

                </p>

                <p>

                  <strong>

                    Members:

                  </strong>

                  {" "}

                  👥 {crew.members}

                </p>

                <p>

                  <strong>

                    Ship:

                  </strong>

                  {" "}

                  🚢 {crew.ship}

                </p>

                <p>

                  <strong>

                    Crew Bounty:

                  </strong>

                  {" "}

                  💰 {crew.bounty}

                </p>

                <p>

                  <strong>

                    Territory:

                  </strong>

                  {" "}

                  🌍 {crew.territory}

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

                    {crew.status}

                  </span>

                </p>

                <p>

                  {crew.description}

                </p>

                <p>

                  <strong>

                    Key Members:

                  </strong>

                </p>

                <ul>

                  {

                    crew.membersList?.map(
                      (member)=>(

                        <li
                          key={member}
                        >

                          {member}

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

export default Crews;