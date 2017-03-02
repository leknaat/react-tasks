import Route from './components/app/route'

import Landing from './components/landing'
import Question1 from './components/question1'
import Question2 from './components/question2'
import Question3 from './components/question3'
import Question4 from './components/question4'
import Question5 from './components/question5'
import Question6 from './components/question6'
import Question7 from './components/question7'
import Question8 from './components/question8'
import Question9 from './components/question9'
import Question10 from './components/question10'
import Question11 from './components/question11'
import Question12 from './components/question12'
import Question13 from './components/question13'
import Question14 from './components/question14'
import Question15 from './components/question15'
import Question16 from './components/question16'
import Question17 from './components/question17'

export const routes = [
  { path: 'question1', component: Question1 },
  { path: 'question2', component: Question2 },
  { path: 'question3', component: Question3 },
  { path: 'question4', component: Question4 },
  { path: 'question5', component: Question5 },
  { path: 'question6', component: Question6 },
  { path: 'question7', component: Question7 },
  { path: 'question8', component: Question8 },
  { path: 'question9', component: Question9 },
  { path: 'question10', component: Question10 },
  { path: 'question11', component: Question11 },
  { path: 'question12', component: Question12 },
  { path: 'question13', component: Question13 },
  { path: 'question14', component: Question14 },
  { path: 'question15', component: Question15 },
  { path: 'question16', component: Question16 },
  { path: 'question17', component: Question17 },
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}
