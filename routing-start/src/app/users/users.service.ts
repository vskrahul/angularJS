export class UsersService {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  user(id: number) {
    return Object.assign({}, this.users
        .find((user) => user.id === id));
  }
}
