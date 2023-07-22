const recipes = [
        {
                "name": "Veggie Delight",
                "imageSrc": "https://source.unsplash.com/random?veggies",
                "time": "30 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.2
            },
            {
                "name": "Chicken Grill",
                "imageSrc": "https://source.unsplash.com/random?chicken",
                "time": "45 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.5
            },
            {
                "name": "Cheese Pizza",
                "imageSrc": "https://source.unsplash.com/random?pizza",
                "time": "40 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.1
            },
            {
                "name": "Steak",
                "imageSrc": "https://source.unsplash.com/random?steak",
                "time": "60 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.7
            },
            {
                "name": "Grilled Salmon",
                "imageSrc": "https://source.unsplash.com/random?salmon",
                "time": "50 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.6
            },
            {
                "name": "Tomato Pasta",
                "imageSrc": "https://source.unsplash.com/random?pasta",
                "time": "35 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.0
            },
            {
                "name": "Vegan Salad",
                "imageSrc": "https://source.unsplash.com/random?salad",
                "time": "20 min",
                "type": "veg",
                "isLiked": false,
                "rating": 3.9
            },
            {
                "name": "Fried Chicken",
                "imageSrc": "https://source.unsplash.com/random?friedChicken",
                "time": "55 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.3
            },
            {
                "name": "Mushroom Risotto",
                "imageSrc": "https://source.unsplash.com/random?risotto",
                "time": "45 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.5
            },
            {
                "name": "Burger",
                "imageSrc": "https://source.unsplash.com/random?burger",
                "time": "30 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.2
            },
            {
                "name": "Paneer Tikka",
                "imageSrc": "https://source.unsplash.com/random?paneerTikka",
                "time": "40 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.4
            },
            {
                "name": "BBQ Ribs",
                "imageSrc": "https://source.unsplash.com/random?ribs",
                "time": "70 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.6
            },
            {
                "name": "Caesar Salad",
                "imageSrc": "https://source.unsplash.com/random?caesarSalad",
                "time": "25 min",
                "type": "veg",
                "isLiked": false,
                "rating": 3.8
            },
            {
                "name": "Fish Tacos",
                "imageSrc": "https://source.unsplash.com/random?fishTacos",
                "time": "35 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.3
            },
            {
                "name": "Chocolate Cake",
                "imageSrc": "https://source.unsplash.com/random?chocolateCake",
                "time": "90 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.9
            }
      ];
      
      const recipeCardsContainer = document.getElementById("recipeCardsContainer");
      const searchInput = document.getElementById("searchInput");
      const searchBtn = document.getElementById("searchBtn");
      const showAllBtn = document.getElementById("showAllBtn");
      const showVegBtn = document.getElementById("showVegBtn");
      const showNonVegBtn = document.getElementById("showNonVegBtn");
      const ratingAbove4_5 = document.getElementById("above4_5");
      const ratingBelow4_0 = document.getElementById("below4_0");

      
      // Function to generate recipe cards based on the provided recipes
      function generateRecipeCards(recipesArray) {
        recipeCardsContainer.innerHTML = "";
        recipesArray.forEach((recipe) => {
          const card = document.createElement("div");
          card.classList.add("recipe-card");
      
          card.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>Type: ${recipe.type}</p>
            <p>Time: ${recipe.time}</p>
            <p>Rating: ${recipe.rating}</p>
            <button class="like-btn">${recipe.isLiked ? "Unlike" : "Like"}</button>
          `;
      
          recipeCardsContainer.appendChild(card);
        });
      }
      
      // Initial display of all recipes
      generateRecipeCards(recipes);
      
      // Search functionality
      searchBtn.addEventListener("click", () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(searchText)
        );
        generateRecipeCards(filteredRecipes);
      });
      
      // Toggle buttons functionality
      showAllBtn.addEventListener("click", () => {
        generateRecipeCards(recipes);
        showAllBtn.classList.add("active");
        showVegBtn.classList.remove("active");
        showNonVegBtn.classList.remove("active");
      });
      
      showVegBtn.addEventListener("click", () => {
        const filteredRecipes = recipes.filter((recipe) => recipe.type === "veg");
        generateRecipeCards(filteredRecipes);
        showAllBtn.classList.remove("active");
        showVegBtn.classList.add("active");
        showNonVegBtn.classList.remove("active");
      });
      
      showNonVegBtn.addEventListener("click", () => {
        const filteredRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
        generateRecipeCards(filteredRecipes);
        showAllBtn.classList.remove("active");
        showVegBtn.classList.remove("active");
        showNonVegBtn.classList.add("active");
      });
      
      // Filter by rating functionality
      ratingAbove4_5.addEventListener("change", () => {
        const filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.5);
        generateRecipeCards(filteredRecipes);
      });
      
      ratingBelow4_0.addEventListener("change", () => {
        const filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
        generateRecipeCards(filteredRecipes);
      });

      const menuIcon = document.querySelector('.menu-icon');
const drawerOverlay = document.querySelector('.drawer-overlay');
const drawer = document.querySelector('.drawer');

menuIcon.addEventListener('click', () => {
  drawer.classList.toggle('open');
  drawerOverlay.classList.toggle('show');
});

drawerOverlay.addEventListener('click', () => {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('show');
});

      

      
      
      