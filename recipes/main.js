import recipes from "./recipes.mjs";

// recipeIndex = Math.floor(Math.random() * recipes.length);

function random(num) {
    return Math.floor(Math.random() * num);
}

function randomRecipe() {
    const recipeIndex = random(recipes.length);
    const recipe = recipes[recipeIndex];
    return recipe;
}

function recipeTemplate(recipe) {
    return `
    <div class="recipe">
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-info">
            <div class="recipe-tags">
            ${tagsTemplate(recipe.tags)}
            </div>
            <h2 class="recipe-name">${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
            <p class="description">${recipe.description}</p>
        </div>
    </div>
    `;
}

function tagsTemplate(tags) {
    let html = '';
    for (let i = 0; i < tags.length; i++) {
        html += `<div class="tag">${tags[i]}</div>`;
    }
    return html;
}
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        }
        else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    html += '</span>';
    return html;
}

function renderRecipes(recipeList) {
    const recipesElement = document.querySelector('.recipes');
    let html = "";
    recipeList.forEach(recipe => {
        html += recipeTemplate(recipe);
    });
    recipesElement.innerHTML = html;
}

function init() {
    const recipe = randomRecipe(recipes);
    renderRecipes([recipe]);
}

function handleSearch(event) {
    event.preventDefault();
    const searchValue = document.getElementById("search-box").value;
    const filteredRecipes = filterRecipes(searchValue);
    renderRecipes(filteredRecipes);
}

function filterRecipes(query) {
    return recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query.toLowerCase());
        const descriptionMatch = recipe.description.toLowerCase().includes(query.toLowerCase());
        const tagMatch = recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
        const ingredientsMatch = recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()));
        return nameMatch || descriptionMatch || tagMatch || ingredientsMatch;
    }).sort((a, b) => a.name.localeCompare(b.name));
}

document.getElementById("search").addEventListener("submit", handleSearch);

init();