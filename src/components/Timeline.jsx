import { useState } from "react";
import timeline from "../data/timeline";

function Timeline() {

  const [selectedSaga, setSelectedSaga] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const filteredTimeline =
    timeline.filter((item) => {

      const matchesSaga =
        selectedSaga === "All" ||
        item.saga === selectedSaga;

      const matchesSearch =
        item.arc
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.saga
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      return (
        matchesSaga &&
        matchesSearch
      );

    });

  const sagas = [

    "All",

    ...new Set(
      timeline.map(
        (item) => item.saga
      )
    )

  ];

  return (

    <section className="section">

      <h2>
        📜 One Piece Timeline
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          flexWrap: "wrap"
        }}
      >

        <input

          type="text"

          placeholder="Search Arc..."

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          className="search-input"

        />

        <select

          value={selectedSaga}

          onChange={(e) =>
            setSelectedSaga(
              e.target.value
            )
          }

        >

          {

            sagas.map(
              (saga) => (

                <option
                  key={saga}
                  value={saga}
                >

                  {saga}

                </option>

              )
            )

          }

        </select>

      </div>

      <p>

        Showing

        {" "}

        <strong>

          {
            filteredTimeline.length
          }

        </strong>

        {" "}

        arc(s)

      </p>

      <div className="timeline-grid">

        {

          filteredTimeline.map(
            (item) => (

              <div

                key={item.id}

                className="timeline-card"

              >

                <div
                  className="timeline-header"
                >

                  <h3>

                    {item.arc}

                  </h3>

                </div>

                <p>

                  <strong>
                    Saga:
                  </strong>

                  {" "}

                  {item.saga}

                </p>

                <p>

                  <strong>
                    Chapters:
                  </strong>

                  {" "}

                  {item.chapters}

                </p>

                <p>

                  <strong>
                    Episodes:
                  </strong>

                  {" "}

                  {item.episodes}

                </p>

                <p>

                  {item.description}

                </p>

              </div>

            )
          )

        }

      </div>

    </section>

  );

}

export default Timeline;