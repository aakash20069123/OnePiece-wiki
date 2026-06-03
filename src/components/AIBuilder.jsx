import { useState } from "react";
import GeneratedCharacterPreview from "./GeneratedCharacterPreview";

function AIBuilder() {

  const [type, setType] = useState("character");
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  async function generateContent() {

    if (!name.trim()) return;

    try {

      setLoading(true);

      const prompts = {

        character: `
Generate a complete One Piece character as a valid JavaScript object.

Character: ${name}

Fields:

id
name
japaneseName
aliases
role
crew
affiliation
status
gender
age
birthday
height
bounty
devilFruit
fruitType
haki
powers
occupation
origin
family
relationships
enemies
description

Return ONLY the object.
`,

        crew: `
Generate a complete One Piece crew as a valid JavaScript object.

Crew: ${name}

Fields:

id
name
captain
members
ship
territory
status
description

Return ONLY the object.
`,

        island: `
Generate a complete One Piece island as a valid JavaScript object.

Island: ${name}

Fields:

id
name
sea
region
ruler
notableCharacters
dangerLevel
description

Return ONLY the object.
`,

        fruit: `
Generate a complete One Piece Devil Fruit as a valid JavaScript object.

Fruit: ${name}

Fields:

id
name
type
abilities
weaknesses
knownUsers
description

Return ONLY valid JSON.

Do not use markdown.
Do not use \`\`\`json.
Do not use explanations.
Return JSON only.
`,

        ship: `
Generate a complete One Piece ship as a valid JavaScript object.

Ship: ${name}

Fields:

id
name
crew
captain
builder
status
specialFeatures
description

Return ONLY the object.
`

      };

      const response = await fetch(
        "http://localhost:5000/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            message:
              prompts[type]
          })
        }
      );

      const data =
        await response.json();

      setResult(data.answer);

      if (type === "character") {

        try {

         const cleanData =
data.answer
.replace(/```json/g, "")
.replace(/```javascript/g, "")
.replace(/```/g, "")
.trim();

          const parsed =
JSON.parse(cleanData);

          parsed.image =
`https://image.pollinations.ai/prompt/${parsed.name}%20one%20piece%20anime%20portrait`;

setPreview(parsed);

        } catch (error) {

          console.error(
"PARSE ERROR:",
error
);

          setPreview(null);

        }

      }

    } catch (error) {

      console.error(error);

      setResult(
        "Generation Failed"
      );

    } finally {

      setLoading(false);

    }

  }

  function saveCharacter(character) {

    const existing =
      JSON.parse(
        localStorage.getItem(
          "customCharacters"
        ) || "[]"
      );

    character.image =
character.image ||
`https://image.pollinations.ai/prompt/${character.name}%20one%20piece%20anime%20portrait`;

existing.push(character);

    localStorage.setItem(
      "customCharacters",
      JSON.stringify(existing)
    );

    alert(
      `${character.name} saved successfully!`
    );

  }

  return (

    <section className="section">

      <h2>
        🤖 AI Encyclopedia Builder
      </h2>

      <select
        value={type}
        onChange={(e) =>
          setType(e.target.value)
        }
      >

        <option value="character">
          Character
        </option>

        <option value="crew">
          Crew
        </option>

        <option value="island">
          Island
        </option>

        <option value="fruit">
          Devil Fruit
        </option>

        <option value="ship">
          Ship
        </option>

      </select>

      <input
        className="search-input"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button
        className="theme-btn"
        onClick={generateContent}
      >
        Generate
      </button>

      {loading && (

        <p>
          Generating...
        </p>

      )}

      {result && (

        <pre
          className="timeline-card"
          style={{
            whiteSpace:
              "pre-wrap",
            maxHeight:
              "500px",
            overflowY:
              "auto"
          }}
        >
          {result}
        </pre>

      )}

      <GeneratedCharacterPreview
        character={preview}
        onSave={saveCharacter}
      />

    </section>

  );

}

export default AIBuilder;