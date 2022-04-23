export const ProblemOne = () => {
    const operatingSystem  = ['android', 'blackberry', 'iPhone', 'windows']
    const manufacturers = ['samsung', 'htc', 'apple', 'google']


    return (
        <>
        <div>
            <h1>Mobile Operating System</h1>
            {operatingSystem.map(e => <li>{e}</li>)}
        </div>
        <div>
            <h1>Mobile Manufacturers</h1>
            {manufacturers.map(e => <li>{e}</li>)}
        </div>

        </>
    )
}