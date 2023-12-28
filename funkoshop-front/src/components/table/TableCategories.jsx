export const TableCategories = ({categories}) => {
    return (
        <div className="container">
            {categories.map((category)=> (
                <h2>{category.name}</h2>
            ))}
        </div>
    )
}