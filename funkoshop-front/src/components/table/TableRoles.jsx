export const TableRoles = ({roles}) => {
    return (
        <div className="container">
            {roles.map((role)=> (
                <h2>{role.name}</h2>
            ))}
        </div>
    )
}