document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    alert('Thank you for your RSVP!\nWe look forward to celebrating with you!');
    e.target.reset();
});

// Page Navigation
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPage = 1;
const totalPages = pages.length;

function updateButtons() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function showPage(pageNumber) {
    pages.forEach(page => {
        page.classList.remove('active');
        if (parseInt(page.dataset.page) === pageNumber) {
            page.classList.add('active');
            // Add page turn animation
            page.style.transform = 'rotateY(-180deg)';
            setTimeout(() => {
                page.style.transform = 'rotateY(0)';
            }, 50);
        }
    });
    currentPage = pageNumber;
    updateButtons();
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
});

// Initialize first page
updateButtons();