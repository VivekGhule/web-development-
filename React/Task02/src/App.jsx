import React from 'react'
import Card from './Components/Card'

const App = () => {

      const superheroProfiles = [
  {
    id:1,
    name: "Superman",
    title: "Man of Steel",
    company: "DC Comics",
    chargePerHour: 5000,
    profilePicture: "https://i.pinimg.com/736x/fe/6f/cb/fe6fcba5c5a1a2e6f0f4c972b6e2978a.jpg",
    skills: ["Flight", "Super Strength", "Heat Vision", "X-Ray Vision", "Invulnerability"],
    description:
      "An alien from Krypton with extraordinary powers dedicated to protecting Earth and upholding justice."
  },
  {
    id:2,
    name: "Batman",
    title: "The Dark Knight",
    company: "DC Comics",
    chargePerHour: 4500,
    profilePicture: "https://i.pinimg.com/736x/5f/0c/7c/5f0c7c78f9960024173b1a726026a6d7.jpg",
    skills: ["Martial Arts", "Detective Skills", "Stealth", "Advanced Technology", "Strategic Thinking"],
    description:
      "A billionaire vigilante who uses intellect, combat mastery, and cutting-edge technology to fight crime in Gotham."
  },
  {
    id:3,
    name: "Wonder Woman",
    title: "Amazon Princess",
    company: "DC Comics",
    chargePerHour: 4800,
    profilePicture: "http://thumbs.dreamstime.com/b/serious-youthful-d-comic-superheroes-woman-vibrant-detailed-d-illustration-girl-superhero-mythology-299893430.jpg?w=768",
    skills: ["Super Strength", "Combat Expertise", "Lasso of Truth", "Divine Weapons", "Agility"],
    description:
      "A warrior princess of the Amazons committed to peace, equality, and defending humanity."
  },
  {
    id:4,
    name: "Spider-Man",
    title: "Friendly Neighborhood Hero",
    company: "Marvel Comics",
    chargePerHour: 3500,
    profilePicture: "https://thumbs.dreamstime.com/b/cartoon-boy-landon-d-render-kid-red-jacket-spiderman-animated-png-download-pk-images-featuring-charming-character-305986969.jpg?w=768",
    skills: ["Wall Crawling", "Spider-Sense", "Super Agility", "Web Engineering", "Reflexes"],
    description:
      "A young hero balancing life and responsibility while protecting New York with his spider-like abilities."
  },
  {
    id:5,
    name: "Iron Man",
    title: "Genius Billionaire Inventor",
    company: "Marvel Comics",
    chargePerHour: 6000,
    profilePicture: "https://i.pinimg.com/736x/bf/66/50/bf6650c2ff899b382fcf3fa57c3cd5e0.jpg",
    skills: ["Powered Armor", "AI Systems", "Engineering", "Flight", "Energy Weapons"],
    description:
      "A technological mastermind who built advanced armor suits to defend the world from evolving threats."
  },
  {
    id:6,
    name: "Captain America",
    title: "The First Avenger",
    company: "Marvel Comics",
    chargePerHour: 4200,
    profilePicture: "https://i.pinimg.com/736x/3d/f0/ef/3df0efd05293b52670262c84166ac707.jpg",
    skills: ["Enhanced Strength", "Leadership", "Shield Mastery", "Tactics", "Endurance"],
    description:
      "A super-soldier symbolizing courage and integrity, known for exceptional leadership on and off the battlefield."
  },
  {
    id:7,
    name: "Black Panther",
    title: "King of Wakanda",
    company: "Marvel Comics",
    chargePerHour: 4700,
    profilePicture: "https://i.pinimg.com/736x/35/29/ba/3529ba661c5271f0532753c8cafdf979.jpg",
    skills: ["Enhanced Senses", "Vibranium Suit", "Martial Arts", "Scientific Knowledge", "Strategy"],
    description:
      "A brilliant monarch and warrior who safeguards Wakanda using advanced technology and formidable combat skills."
  }
];
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 py-16 px-6">

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-14">
      <h1 className="text-4xl font-bold tracking-tight text-slate-800">
        Hire a Superhero
      </h1>

      <p className="text-slate-500 mt-2 text-lg">
        Elite heroes ready to save your next mission.
      </p>
    </div>


    {/* Card Grid */}
    <div className=" flex flex-wrap justify-center gap-10 ">
      {superheroProfiles.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>

  </div>
</div>

  )
}

export default App