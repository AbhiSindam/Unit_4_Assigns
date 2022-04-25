import {useState, useEffect}  from 'react'


export const Timer = ({data}) => {

    data = +data
    // console.log(data)
    const [time, setTime] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setTime((p) => {
                if (p === data){
                    clearInterval(id)
                    return 0
                }
                return p+1
            });
        }, 1000);
        return () => {
            clearInterval(id)
        }    

    },[data])






    return(
        <div>
            <h1>Timer: {time}</h1>
        </div>
    )
}