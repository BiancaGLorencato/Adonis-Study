import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'biancs.24gl@gmail.com',
        password: 'secret',
        role: 'admin'

      },
      {
        email: 'vanessa@gmail.com',
        password: 'secret',
        role: 'normal'
      },
    ])
  }
}
