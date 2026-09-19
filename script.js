const contributors = [
    {
        name: "Mahalakshmi Kommaranahalli",
        username: "mahalakshmikommaranahalli9-cell",
        country: "🇮🇳 INDIA",
        role: "Founder & Contributor"
    }
];

const grid = document.getElementById("contributorGrid");
const count = document.getElementById("contributorCount");

count.textContent = contributors.length;

contributors.forEach(person => {

    const card = document.createElement("article");

    card.className = "contributor-card";

    card.innerHTML = `
        <img
            class="avatar"
            src="https://github.com/${person.username}.png"
            alt="${person.name}"
        >

        <div class="country">
            ${person.country}
        </div>

        <h3>
            ${person.name}
        </h3>

        <p>
            ${person.role}
        </p>

        <a
            class="profile-link"
            href="https://github.com/${person.username}"
            target="_blank"
        >
            @${person.username} ↗
        </a>
    `;

    grid.appendChild(card);

});
