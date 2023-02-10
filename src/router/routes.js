import { feeds } from '../pages/feeds'
import { storyPage } from '../pages/storyPage'

export default [{
  path: '/',
  component: feeds
},
{
  path: '/storyPage/:initialSlideId',
  component: storyPage,
  name: 'stories'
}
]