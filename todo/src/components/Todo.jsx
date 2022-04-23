import {useState} from 'react'

export const Todo = ({getData}) => {

    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    console.log(text)

    const handleClick = () => {
        getData(text)
    }
    
    return (
        <div>
            <input style={{marginLeft: "10px", padding: '5px'}} type="text" name="" id="" placeholder='Write Something' onChange={handleChange}/>
            <button style={{marginLeft: "10px", width: '30px', border: "1px solid black", padding: '5px'}} onClick={handleClick}>+</button>
            
        </div>
    )
}
