document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    alert('Thank you for your RSVP!\nWe look forward to celebrating with you!');
    e.target.reset();
});

// Page Navigation
const pages = document.querySelectorAll('.page');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
let currentPage = 1;
const totalPages = pages.length;

// function updateButtons() {
//     prevBtn.disabled = currentPage === 1;
//     nextBtn.disabled = currentPage === totalPages;
// }

function showPage(pageNumber) {
    pages.forEach(page => {
        page.classList.remove('active');
        if (parseInt(page.dataset.page) === pageNumber) {
            page.classList.add('active');
            
            // Scroll to the active page on mobile with offset
            if (window.innerWidth <= 768) {
                const offset = 20; // Adjust this value to control scroll position
                const pageTop = page.offsetTop - offset;
                window.scrollTo({
                    top: pageTop,
                    behavior: 'smooth'
                });
            }
        }
    });
    currentPage = pageNumber;
    updateButtons();
}

// prevBtn.addEventListener('click', () => {
//     if (currentPage > 1) {
//         showPage(currentPage - 1);
//     }
// });

// nextBtn.addEventListener('click', () => {
//     if (currentPage < totalPages) {
//         showPage(currentPage + 1);
//     }
// });

// Initialize first page
// updateButtons();

// Handle window resize
// window.addEventListener('resize', () => {
//     const activePage = document.querySelector('.page.active');
//     if (activePage && window.innerWidth <= 768) {
//         const offset = 20;
//         const pageTop = activePage.offsetTop - offset;
//         window.scrollTo({
//             top: pageTop,
//             behavior: 'smooth'
//         });
//     }
// });