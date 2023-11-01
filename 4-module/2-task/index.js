function makeDiagonalRed(table) {
  const rows = table.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cell = row.cells[i];
    cell.style.backgroundColor = 'red';
  }
}
