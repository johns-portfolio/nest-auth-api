import { Injectable } from '@nestjs/common'

export interface User {
  id: number
  username: string
  password: string
  name: string
}

const userList: User[] = [
  {
    id: 1,
    username: 'jame',
    password: '2222',
    name: 'Jame A.'
  },
  {
    id: 2,
    username: 'john',
    password: '1111',
    name: 'John S.'
  }
]

@Injectable()
export class UsersService {
  findOne(username: string) {
    return userList.find((c) => c.username === username)
  }
  findById(id: number) {
    return userList.find((c) => c.id === id)
  }
}
