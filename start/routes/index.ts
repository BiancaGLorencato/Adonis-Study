import Route from '@ioc:Adonis/Core/Route'

import './auth'
import './posts'

Route.get('/', 'PostsController.index')

