document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const results = searchRecipes(query);
    displayResults(results);
  });
  
  function searchRecipes(query) {
    const recipes = [
      { name: "Planks", img: "Oak_Planks_JE6_BE3 (1).webp", link: "planks.html" },
  { name: "Sticks", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Stick_JE1_BE1.png/revision/latest/thumbnail/width/360/height/360?cb=20200128023441", link: "sticks.html" },
  { name: "Crafting Table", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/93/Crafting_Table_JE3_BE2.png/revision/latest?cb=20190606093431", link: "craftingtable.html" },
  { name: "Door", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6d/Oak_Door_JE7.png/revision/latest?cb=20200913140205", link: "door.html" },
  { name: "Torch", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/90/Torch.gif/revision/latest/scale-to-width/360?cb=20200111190834", link: "torch.html" },
  { name: "Chest", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/41/Chest.gif/revision/latest/scale-to-width/360?cb=20191219163201", link: "chest.html" },
  { name: "Furnace", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c5/Lit_Furnace_%28S%29.gif/revision/latest?cb=20200831134706", link: "furnace.html" },
  { name: "Wood Slabs", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ac/Oak_Slab_JE5_BE2.png/revision/latest/scale-to-width/360?cb=20240729071106", link: "woodslabs.html" },
  { name: "Other Slabs", img: "https://minecraft.wiki/images/Cobblestone_Slab_JE4_BE3.png?38e0e", link: "otherslabs.html" },
  { name: "Fence", img: "https://static.wikitide.net/btawiki/3/31/Fence_post.png", link: "fence.html" },
  { name: "Sign", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Oak_Sign_JE3.png/revision/latest/scale-to-width/360?cb=20211013161856", link: "sign.html" },
  { name: "Boat", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e5/Oak_Boat_%28item%29_JE6.png/revision/latest/scale-to-width/360?cb=20220413181403", link: "boat.html" },
  { name: "Ladder", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/af/Ladder_%28texture%29_JE3_BE2.png/revision/latest?cb=20200922000708", link: "ladder.html" },
  { name: "Glowstone", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a5/Glowstone_JE4_BE2.png/revision/latest/scale-to-width/360?cb=20220115125134", link: "glowstone.html" },
  { name: "Snow Block", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/dc/Snow_Block_JE2_BE2.png/revision/latest?cb=20200903061436", link: "snowblock.html" },
  { name: "TNT", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a2/TNT_JE3_BE2.png/revision/latest?cb=20210110120939", link: "tnt.html" }
];
    ];
  
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
  }
  
  function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
  
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
      results.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
          <a href="${recipe.link}">
            <img src="${recipe.img}" alt="${recipe.name}">
            <h4>${recipe.name}</h4>
          </a>
        `;
        resultsContainer.appendChild(recipeItem);
      });
    }
  }
  