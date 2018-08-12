import React, {
    Component
} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
class App extends Component {
    render() {
        return (
            <div>
            <BrowserRouter>
            <div>
                {/* exact意思是：path === 路由path完全一致时 */}
               <Route path='/' exact render={()=><div>home</div>}></Route>
               <Route path='/detail'exact render={()=><div>detail</div>}></Route>
               </div>
            </BrowserRouter>
            </div>
        )
    }
}
export default App