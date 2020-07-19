// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {

  public async login(ctx: HttpContextContract) {
    const {email, password} = ctx.request.only(['email', 'password'])
    return await ctx.auth.attempt(email, password)
  }

  public async logout(ctx: HttpContextContract) {
    return await ctx.auth.logout()
  }

}
