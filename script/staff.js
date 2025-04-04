document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and staff grids
    const tabButtons = document.querySelectorAll('.tab-btn');
    const staffGrids = document.querySelectorAll('.staff-grid');

    // Add click event listener to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and grids
            tabButtons.forEach(btn => btn.classList.remove('active'));
            staffGrids.forEach(grid => grid.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding staff grid
            const category = button.getAttribute('data-category');
            document.querySelector(`.staff-grid.${category}`).classList.add('active');
        });
    });
}); 