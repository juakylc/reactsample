export default function Componentsample(props) {
    return (
        <>
            {
                props.texto ? (
                    <p>{props.texto}</p>
                ) : (
                    <p>No has puesto texto</p>
                )   
            }
        </>
    )
}