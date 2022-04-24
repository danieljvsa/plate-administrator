import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'
//import knex from 'knex'


export default class AuthController {
    public async login({ request, response, auth, session }: HttpContextContract) {
        try {
          await auth.attempt(request.input('email'), request.input('password'))
          return response.redirect('/plates')
        } catch (e) {
          session.flash('notification', 'Login failed. Check email/password & retry.')
          return response.redirect('back')
        }
    }
    public async register({ request, auth, response, session }: HttpContextContract) {
        
        const data = request.only(['email', 'password'])
    
        
        const user = await Users.create({
          email: data.email,
          password: data.password,
        })
    
        await auth.login(user)
        session.flash('notification', 'Registered.')
        return response.redirect('/plates')
    }
    public async showLogin({ view }: HttpContextContract) {
    return view.render('auth/login', { user: { email: '', password: '' } })
    }
    
    public async showRegister({ view }: HttpContextContract) {
    return view.render('auth/register', { user: { email: '', password: '' } })
    }

    public async logout({ auth, response }: HttpContextContract) {
        await auth.logout()
        return response.redirect('/')
    }
}
