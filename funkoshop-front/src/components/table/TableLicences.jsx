export const TableLicences = ({licences}) => {
    return (
        <div className="container">
            {licences.map((licence)=> (
                <h2>{licence.name}</h2>
            ))}
        </div>
    )
}