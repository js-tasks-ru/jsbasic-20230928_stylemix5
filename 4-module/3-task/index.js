function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const statusCell = cells[3];
    const genderCell = cells[2];
    const ageCell = cells[1];

    row.classList.add(statusCell.dataset.available === 'true' ? 'available' : 'unavailable');
    row.hidden = !statusCell.hasAttribute('data-available');
    row.classList.add(genderCell.textContent === 'm' ? 'male' : 'female');
    if (parseInt(ageCell.textContent) < 18) {
      row.style.textDecoration = 'line-through';
    }
  });
}
