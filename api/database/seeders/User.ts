import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from "App/Models/User";

export default class UserSeeder extends BaseSeeder {
  public async run () {
    const user = new User()
    user.email = 'user@email.com'
    user.password = '123456789'
    await user.save();
  }
}
