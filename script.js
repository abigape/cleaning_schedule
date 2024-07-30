document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('table tr:not(:first-child)');
    rows.forEach(row => {
        row.addEventListener('click', function () {
            this.classList.toggle('completed');
        });
    });
});