import React from "react"

const vans = [
    {
        id: 1,
        name: "Modest Explorer",
        description: "A cozy, easy-to-drive van for weekend escapes and winding back roads.",
        price: 60,
        type: "Small",
        color: "#D98B57",
    },
    {
        id: 2,
        name: "Beach Bum",
        description: "A laid-back camper with room for your beach gear and a sunny afternoon nap.",
        price: 80,
        type: "Small",
        color: "#6E9BA1",
    },
    {
        id: 3,
        name: "Reliable Red",
        description: "A dependable ride with a simple setup for wherever the road takes you.",
        price: 100,
        type: "Large",
        color: "#B95849",
    },
    {
        id: 4,
        name: "Dreamfinder",
        description: "A roomy home on wheels, ready for long trips and wide-open country.",
        price: 110,
        type: "Large",
        color: "#6F8061",
    },
    {
        id: 5,
        name: "The Cruiser",
        description: "Pack light, hit the road, and make the most of every stop along the way.",
        price: 90,
        type: "Small",
        color: "#D1A44F",
    },
    {
        id: 6,
        name: "Green Wonder",
        description: "A spacious camper with all the room you need for a longer adventure.",
        price: 120,
        type: "Large",
        color: "#5E806F",
    },
]

function VanIllustration({ van }) {
    const body = van.type === "Large"
        ? "M120 226V149c0-13 10-23 23-23h232l57 56v44H120Z"
        : "M147 226v-68c0-13 10-23 23-23h179l49 43v48H147Z"
    const window = van.type === "Large"
        ? "M155 145h92v55H140v-40c0-8 7-15 15-15Zm105 0h105l44 43v12H260v-55Z"
        : "M180 157h72v48h-92v-33c0-8 8-15 20-15Zm85 0h72l39 35v13H265v-48Z"

    return (
        <svg
            className="van-illustration"
            viewBox="0 0 520 300"
            role="img"
            aria-label={`${van.name} ${van.type.toLowerCase()} van illustration`}
        >
            <rect width="520" height="300" fill="#F2E6D6" />
            <circle cx="414" cy="68" r="29" fill="#F2C878" />
            <path d="M0 221c78-30 129-6 202-17s144-47 318-4v100H0Z" fill="#D6DDC5" />
            <path d="M0 248c103-28 176 7 284-4s148-25 236-8v64H0Z" fill="#B8C6A7" />
            <path d={body} fill={van.color} />
            <path d={window} fill="#C5D8D6" />
            <path d="M252 145v60" stroke="#FFF7ED" strokeWidth="5" />
            <path d="M378 210h39" stroke="#FFF7ED" strokeWidth="6" strokeLinecap="round" />
            <circle cx={van.type === "Large" ? "183" : "201"} cy="226" r="24" fill="#303234" />
            <circle cx={van.type === "Large" ? "183" : "201"} cy="226" r="10" fill="#D8D2C7" />
            <circle cx={van.type === "Large" ? "370" : "362"} cy="226" r="24" fill="#303234" />
            <circle cx={van.type === "Large" ? "370" : "362"} cy="226" r="10" fill="#D8D2C7" />
            <path d="M98 251h334" stroke="#8E987D" strokeWidth="4" strokeLinecap="round" />
        </svg>
    )
}

function VanCard({ van }) {
    return (
        <article className="van-card">
            <VanIllustration van={van} />
            <div className="van-card-content">
                <div className="van-card-heading">
                    <h2>{van.name}</h2>
                    <p className="van-price">
                        <strong>${van.price}</strong>
                        <span>/day</span>
                    </p>
                </div>
                <p className="van-description">{van.description}</p>
                <span className={`van-type van-type-${van.type.toLowerCase()}`}>{van.type}</span>
            </div>
        </article>
    )
}

export default function Vans() {
    return (
        <main className="vans-page">
            <h1>Explore our van options</h1>
            <p className="vans-intro">Find the right van for your next road trip.</p>
            <section className="vans-list" aria-label="Available vans">
                {vans.map(van => <VanCard key={van.id} van={van} />)}
            </section>
        </main>
    )
}
