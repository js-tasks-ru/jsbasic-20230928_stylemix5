function makeFriendsList(friends) {
  const list = document.createElement('ul');
  for (const friend of friends) {
    const listItem = document.createElement('li');
    listItem.textContent = friend.firstName + ' ' + friend.lastName;
    list.appendChild(listItem);
  }

  return list;
}
