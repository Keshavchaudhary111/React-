import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type : 'a',
//    props: {
//         href: 'http://google.com',
//         target: '_blank',
//      },
//   children: 'click me to visit google'

// }
// it will not exexcute bcoz react excepts us to give a element but we provide it element

// for object
// const reactElement = React.createElement(
//    'a',
//    {href: 'http://www.google.com',target: '_blank'},
//        'click me to visit google'
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* reactElement */}
  </StrictMode>,
)
