import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faPencil, faTrash, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../Icon.jsx'

export const TableProducts = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlerDelete = (id) => {
        deleteDinamic('products', id)
    }

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>SKU</th>
                        <th>Acciones</th>
                        {/* Agrega más encabezados según sea necesario */}
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.sku}</td>
                            <td>
                                <Link to={`/edit/products/${product.id}`} className='btn btn-success btn-lg m-2'>
                                    <Icon css='icon' icon={faPencil} />
                                </Link>
                                <button onClick={() => handlerDelete(product.id)} className='btn btn-danger btn-lg'>
                                    <Icon css='icon' icon={faTrash} />
                                </button>
                            </td>
                            {/* Agrega más celdas según sea necesario */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className="pagination">
                {Array(Math.ceil(products.length / productsPerPage))
                    .fill()
                    .map((_, index) => (
                        <li
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? 'pagination__link active' : 'pagination__link '}
                        >
                            {index + 1}
                        </li>
                    ))}
            </ul>
        </div>
    )
}