import { Injectable } from '@nestjs/common'

export interface User {
  id: number
  username: string
  email: string
  password: string
  isAdmin: boolean
}

const userList: User[] = [
  {
    id: 1,
    username: 'jame',
    password: '2222',
    email: 'jame@local',
    isAdmin: false
  },
  {
    id: 2,
    username: 'john',
    password: '1111',
    email: 'john@local',
    isAdmin: true
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
