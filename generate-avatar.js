// save this as generate-avatars.js
const fs = require("fs");
const path = require("path");

// Create assets/images directory if it doesn't exist
const dir = path.join(__dirname, "src", "assets", "images");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const users = [
  { name: "John", color: "#4287f5" },
  { name: "Jane", color: "#e542f5" },
  { name: "Jack", color: "#f54242" },
  { name: "Jill", color: "#42f554" },
  { name: "Joe", color: "#f5a142" },
];

users.forEach((user, index) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="${user.color}"/>
        <text x="50%" y="50%" dy=".1em" text-anchor="middle" fill="white"
              font-size="80" font-family="Arial" font-weight="bold">
            ${user.name.substring(0, 2).toUpperCase()}
        </text>
    </svg>`;

  const filePath = path.join(dir, `avatar${index + 1}.svg`);
  fs.writeFileSync(filePath, svg);
});

console.log("Avatar files generated successfully!");
