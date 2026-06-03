function GeneratedCharacterPreview({

character,

onSave

}) {

if (!character)
return null;

return (

<div className="timeline-card">

<img

src={
  character.image ||
  `https://image.pollinations.ai/prompt/${character.name}%20one%20piece%20anime%20portrait`
}

alt={
character.name
}

className="modal-image"

/>

<h2>

{character.name}

</h2>

<p>

<strong>
Role:
</strong>

{" "}

{character.role}

</p>

<p>

<strong>
Crew:
</strong>

{" "}

{character.crew}

</p>

<p>

<strong>
Bounty:
</strong>

{" "}

{character.bounty}

</p>

<p>

<strong>
Devil Fruit:
</strong>

{" "}

{character.devilFruit}

</p>

<p>

<strong>
Description:
</strong>

{" "}

{character.description}

</p>

<button

className="theme-btn"

onClick={() =>
onSave(character)
}

>

💾 Save Character

</button>

</div>

);

}

export default
GeneratedCharacterPreview;