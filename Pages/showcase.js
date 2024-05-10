window.addEventListener('load', function() {
    var photoGallery = document.getElementById('photoGallery');

    // You need to implement the OneDrive API to fetch the uploaded photos here
    Example:
    fetch('https://graph.microsoft.com/v1.0/me/drive/root:/Photos', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })
    .then(response => response.json())
    .then(data => {
        data.value.forEach(photo => {
            var img = document.createElement('img');
            img.src = photo.thumbnailUrl; // or photo.webUrl, depending on your requirements
            photoGallery.appendChild(img);
        });
    })
    .catch(error => console.error('Error:', error));

    // For demonstration purpose, here's some sample code to display shuffled photos
    var photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']; // Replace with actual photo URLs
    shuffleArray(photos);
    photos.forEach(photo => {
        var img = document.createElement('img');
        img.src = photo;
        photoGallery.appendChild(img);
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
