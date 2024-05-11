document.addEventListener('DOMContentLoaded', function () {    const members = 
    ['Hana’a Naif Alatwi 441004780',     'Kafa Abdullah Alasmari  441005910',
      'Ratag abdallah Alshehri 441000935',];    const memberList = document.getElementById('member-list');
    members.sort(() => Math.random() - 0.5);
    members.forEach(member => {        const listItem = document.createElement('ul');
        listItem.textContent = member;        memberList.appendChild(listItem);
    });});