interface TableProps {
    objects: any[]
}

export default function Table(props: TableProps) {
    const handleHeader = () => {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    const handleBody = () => {
        return props.objects?.map((obj, i) => {
            return(
                <tr key={`index_${i}`}>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.age}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {handleHeader()}
            </thead>
            <tbody>
                {handleBody()}
            </tbody>
        </table>
    )
}
