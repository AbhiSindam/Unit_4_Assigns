import {JoinUs} from './JoinUs'
import {Login} from './Login'
import {Search} from "./Search"
import {Home} from "./Home"
import {Settings} from "./Settings"
import {ContactUs} from "./ContactUs"
import {Help} from "./Help"
import {Download} from './Download'
import '../App.css'
 
export const ProblemTwo = () => {
    return (
        <div className='details'>
        <div className='pTwoDivs'>
            <JoinUs/>
            <Login/>
            <Search/>
            <Home/>
        </div>
        <div className='pTwoDivs'>
            <Settings/>
            <ContactUs/>
            <Help/>
            <Download/>
        </div>
        </div>
    )
}