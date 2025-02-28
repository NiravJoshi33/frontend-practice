async function loadData() {
  const response = await fetch("data.json");
  const data = await response.json();

  const container = document.querySelector(".summary-items-container");

  if (!data) {
    console.log("No data found");
    return;
  } else {
    data.forEach((item) => {
      const template = document
        .querySelector("template")
        .content.cloneNode(true);

      const card = template.querySelector(".summary-item");
      card.classList.add(item.category.toLowerCase());

      // update content
      const icon = card.querySelector(".icon");
      icon.src = item.icon;
      icon.alt = item.category;

      const name = card.querySelector(".type-name");
      name.textContent = item.category;

      // update scores
      const score = card.querySelector(".score");
      const totalScore = card.querySelector(".total-score");
      score.textContent = item.score;
      totalScore.textContent = "/ 100";

      container.appendChild(card);
    });
  }
}

loadData();
