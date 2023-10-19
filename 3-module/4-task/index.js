function showSalary(users, age) {
  const filteredUsers = users.filter(user => user.age <= age);

  const result = filteredUsers.map(user => `${user.name}, ${user.balance}`);

  return result.join('\n');
}
