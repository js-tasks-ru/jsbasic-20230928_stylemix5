/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTable();
  }

  createTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    ['Имя', 'Возраст', 'Зарплата', 'Город', ''].forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    this.rows.forEach(rowData => {
      const row = document.createElement('tr');

      ['name', 'age', 'salary', 'city'].forEach(column => {
        const cell = document.createElement('td');
        cell.textContent = rowData[column];
        row.appendChild(cell);
      });

      const deleteCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', () => {
        row.remove();
      });
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
  }
}
