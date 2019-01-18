import React from 'react'
import HomePage from './components/HomePage'
import FAQPage from './components/Faqs'
import { Route } from 'react-router-dom'
import './index.css'
import fetch from 'isomorphic-fetch'
import Navbar from './components/common/Navbar'

export default class Layout extends React.Component {
  render() {
    return (
      // <ApolloProvider client={client}>
      // 	<MuiThemeProvider theme={theme}>
      // 		<Router>
      <div>
        <Navbar />
        <Route exact path='/' component={HomePage} />
        <Route path='/faqs' component={FAQPage} />
      </div>
      // </Router>
      // </MuiThemeProvider>
      // </ApolloProvider>
    )
  }
}
//
// export default (
//   <ApolloProvider client={client}>
//     <MuiThemeProvider theme={theme}>
//       <Router>
//         <div>
//           <Navbar />
//           <Route exact path='/' component={HomePage} />
//           <Route path='/faqs' component={FAQPage} />
//         </div>
//       </Router>
//     </MuiThemeProvider>
//   </ApolloProvider>
// )
