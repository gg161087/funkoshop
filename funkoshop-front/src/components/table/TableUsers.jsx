export const TableUsers = ({users}) => {
    return (
        <div className="container">
            {users.map((user)=> (
                <h2>{user.name}</h2>
            ))}
        </div>
    )
}