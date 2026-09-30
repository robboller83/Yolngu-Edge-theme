const words = [["Gurruṯu", "Kinship system; relational web of life"], ["Bäpurru", "Clan; ancestral identity"], ["Märi", "Mother’s mother; key kinship role"], ["Gathu", "Child; youth and growth"], ["Waku", "Child of a sister; kinship connection"], ["Gurruŋ", "Bone; strength, foundation"], ["Raki", "Rope/string; symbolic connection"], ["Marrŋgi", "Knowledge; understanding"], ["Djäma", "Work; duty and responsibility"], ["Galtha", "Starting point; foundation for action"], ["Wangarr", "Ancestral beings"], ["Yirralka", "Rights/responsibilities to Country"], ["Buthan", "Sand; coastal terrain"], ["Gapu", "Water; life force"], ["Dharpa", "Tree; land and growth"], ["Bäru", "Crocodile; powerful totem"], ["Gurruŋu", "Cloud; sky and weather"], ["Miyapunu", "Turtle; sea Country"], ["Garrtjambal", "Red kangaroo; land Country"], ["Djirrikay", "Lightning; sky power"], ["Manikay", "Ceremonial songlines"], ["Bunggul", "Ceremonial dance"], ["Rirrakay", "Painting; cultural expression"], ["Dhalkarra", "Leadership; authority"], ["Rom", "Law; cultural rules"], ["Madayin", "Sacredness; deep cultural meaning"], ["Gäthu", "Fire; warmth and ceremony"], ["Yolŋu", "Person; people; identity"], ["Marrma", "Together; unity"], ["Gäna", "Digging stick; tool of work and tradition"]];

const now = new Date();
const dayOfYear = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(now.getFullYear(), 0, 0)) / 86400000);
const index = (dayOfYear - 1) % words.length;
const [word, meaning] = words[index];

document.body.style.backgroundImage = `url("images/day-${String(index + 1).padStart(2, "0")}-yolngu-art.jpg")`;
document.getElementById("word").textContent = word;
document.getElementById("meaning").textContent = meaning;
document.getElementById("date").textContent = now.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
document.getElementById("day").textContent = `Day ${index + 1} of 30`;

document.getElementById("search").addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.getElementById("q").value.trim();
  if (query) location.href = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
});
