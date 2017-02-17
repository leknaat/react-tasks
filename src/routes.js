import Route from './components/app/route'

import Landing from './components/landing'
import Question1 from './components/question1'
import Question2 from './components/question2'
import Question3 from './components/question3'
import Question4 from './components/question4'

export const routes = [
  { path: 'question1', component: Question1 },
  { path: 'question2', component: Question2 },
  { path: 'question3', component: Question3 },
  { path: 'question4', component: Question4 },
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}
