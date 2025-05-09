
// Example script to filter games by size or category
function filterGames() {
    const size = document.getElementById('sizeFilter').value;
    const category = document.getElementById('categoryFilter').value;

    // Filtering logic goes here
    console.log('Filtering games by size: ' + size + ' and category: ' + category);
}

document.getElementById('filterButton').addEventListener('click', filterGames);
