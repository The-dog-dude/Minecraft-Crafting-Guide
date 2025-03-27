document.getElementById('search-btn').addEventListener('click', function() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const recipeType = document.getElementById('recipe-type').value;  // Get selected recipe type
  const results = searchRecipes(query, recipeType);
  displayResults(results);
});

function searchRecipes(query, recipeType) {
  const recipes = [
      // Basic
      { name: "Planks", img: "Oak_Planks_JE6_BE3 (1).webp", link: "planks.html", type: "basic" },
      { name: "Sticks", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Stick_JE1_BE1.png/revision/latest/thumbnail/width/360/height/360?cb=20200128023441", link: "sticks.html", type: "basic" },
      { name: "Crafting Table", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/93/Crafting_Table_JE3_BE2.png/revision/latest?cb=20190606093431", link: "craftingtable.html", type: "basic" },
      { name: "Door", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6d/Oak_Door_JE7.png/revision/latest?cb=20200913140205", link: "door.html", type: "basic" },
      { name: "Torch", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/90/Torch.gif/revision/latest/scale-to-width/360?cb=20200111190834", link: "torch.html", type: "basic" },
      { name: "Chest", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/41/Chest.gif/revision/latest/scale-to-width/360?cb=20191219163201", link: "chest.html", type: "basic" },
      { name: "Furnace", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c5/Lit_Furnace_%28S%29.gif/revision/latest?cb=20200831134706", link: "furnace.html", type: "basic" },
      { name: "Wood Slabs", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ac/Oak_Slab_JE5_BE2.png/revision/latest/scale-to-width/360?cb=20240729071106", link: "woodslabs.html", type: "basic" },
      { name: "Other Slabs", img: "https://minecraft.wiki/images/Cobblestone_Slab_JE4_BE3.png?38e0e", link: "otherslabs.html", type: "basic" },
      { name: "Fence", img: "https://static.wikitide.net/btawiki/3/31/Fence_post.png", link: "fence.html", type: "basic" },
      { name: "Sign", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Oak_Sign_JE3.png/revision/latest/scale-to-width/360?cb=20211013161856", link: "sign.html", type: "basic" },
      { name: "Boat", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e5/Oak_Boat_%28item%29_JE6.png/revision/latest/scale-to-width/360?cb=20220413181403", link: "boat.html", type: "basic" },
      { name: "Ladder", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/af/Ladder_%28texture%29_JE3_BE2.png/revision/latest?cb=20200922000708", link: "ladder.html", type: "basic" },

      // Blocks
      { name: "Glowstone", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a5/Glowstone_JE4_BE2.png/revision/latest/scale-to-width/360?cb=20220115125134", link: "glowstone.html", type: "blocks" },
      { name: "Snow Block", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/dc/Snow_Block_JE2_BE2.png/revision/latest?cb=20200903061436", link: "snowblock.html", type: "blocks" },
      { name: "TNT", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a2/TNT_JE3_BE2.png/revision/latest?cb=20210110120939", link: "tnt.html", type: "blocks" },
      { name: "Clay Block", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/Clay_JE2_BE2.png/revision/latest?cb=20200130134321", link: "clay.html", type: "blocks" },
      { name: "Brick Block", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b5/Bricks_JE4_BE2.png/revision/latest?cb=20190505214032", link: "bricks.html", type: "blocks" },
      { name: "Bookshelf", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/Bookshelf_JE4_BE2.png/revision/latest?cb=20200226014936", link: "bookshelf.html", type: "blocks" },
      { name: "Sandstone", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/95/Sandstone_JE6_BE3.png/revision/latest?cb=20200317204927", link: "sandstone.html", type: "blocks" },
      { name: "Smooth Sandstone", img: "https://minecraft.wiki/images/Cut_Sandstone_JE5_BE2.png?2eb93", link: "smoothsandstone.html", type: "blocks" },
      { name: "Decorative Sandstone", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Chiseled_Sandstone_JE2.png/revision/latest?cb=20181123210123", link: "decorativesandstone.html", type: "blocks" },
      { name: "Note Block", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/18/Note_Block_JE2_BE2.png/revision/latest?cb=20220311024036", link: "noteblock.html", type: "blocks" },
      { name: "Jack-O Lantern", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/db/Jack_o%27Lantern_%28E%29_JE5.png/revision/latest?cb=20210321202528", link: "jackolantern.html", type: "blocks" },
      { name: "Lapis Lazuli Block", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/Block_of_Lapis_Lazuli_JE3_BE3.png/revision/latest?cb=20200315192953", link: "lapislazuliblock.html", type: "blocks" },
      { name: "Diamond Block", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png/revision/latest?cb=20200226013851", link: "diamondblock.html", type: "blocks" },
      { name: "Gold Block", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Block_of_Gold_JE6_BE3.png/revision/latest/thumbnail/width/360/height/360?cb=20200226013525", link: "goldblock.html", type: "blocks" },
      { name: "Iron Block", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/79/Block_of_Iron_JE3_BE2.png/revision/latest?cb=20190502172010", link: "ironblock.html", type: "blocks" }
  ];

  return recipes.filter(recipe => {
      const matchesQuery = recipe.name.toLowerCase().includes(query);
      const matchesType = recipeType ? recipe.type === recipeType : true;
      return matchesQuery && matchesType;
  });
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
