// Review counter using localStorage
document.addEventListener('DOMContentLoaded', function () {
    let reviewCount = localStorage.getItem('reviewCount');

    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }

    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('reviewCount').textContent = reviewCount;
});