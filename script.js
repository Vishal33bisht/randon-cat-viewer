const catImage = document.getElementById('catImage');
const fetchBtn = document.getElementById('fetchBtn');

async function fetchRandomCat() {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/cats/cat/random');
        const data = await response.json();
        if (data.success) {
            catImage.src = data.data.image;
        } else {
            console.error('Failed to fetch cat:', data.message);
        }
    } catch (error) {
        console.error('Error fetching cat:', error);
    }
}

// Fetch a cat on load
fetchRandomCat();

// Fetch new cat on button click
fetchBtn.addEventListener('click', fetchRandomCat);