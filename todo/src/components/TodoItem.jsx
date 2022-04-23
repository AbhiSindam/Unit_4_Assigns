export const TodoItem = ({title, id}) => {
    return (
        <div style={{ alignContent:"center", fontSize: "20px", fontWeight: "600", marginTop: "20px",  backgroundColor: "#D3D3D3", width: "400px", margin: "auto", textAlign: 'left'}}>
            <h1 style={{marginLeft: "20px"}}>{title}</h1>
        </div>
    )
}