import hello  from './hello'
import bills from './bills'
import categories from './categories'
import address from './address'

export default (app) => {
  app.use('/',hello)
  app.use('/bills', bills)
  app.use('/categories', categories)
  app.use('/address', address)
}