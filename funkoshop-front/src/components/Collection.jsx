export const Collection = () => {
    return (
        <>
        <section className="collection container">
                <article className="collection__content">
                    <h3 className="collection__title">STAR WARS & THE MANDALORIAN</h3>
                    <p className="collection__text">Disfruta de una saga que sigue agregando personajes a su colección.</p>
                    <a className="collection__link" href="./pages/shop.html">VER COLECCIÓN</a>                              
                </article>
                <picture className="collection__cover">
                    <img src="./img/star-wars/baby-yoda-1.webp" alt="Figura de Grogo"/>
                </picture>
        </section>
        <section className="collection container">
            <article className="collection__content">
                <h3 className="collection__title">POKEMON INDIGO</h3>
                <p className="collection__text">Atrapa todos los que puedas y disfruta de una colección llena de amigos.</p>
                <a className="collection__link" href="./pages/shop.html">VER COLECCIÓN</a>                              
            </article>
            <picture className="collection__cover">
                <img src="./img/pokemon/vulpix-1.webp" alt="Figura de Vulpix"/>
            </picture>
        </section>
        <section className="collection container">
            <article className="collection__content">
                <h3 className="collection__title">HARRY POTTER</h3>
                <p className="collection__text">Revive los recuerdos de una saga llena de magia y encanto.</p>
                <a className="collection__link" href="./pages/shop.html">VER COLECCIÓN</a>                              
            </article>
            <picture className="collection__cover">
                <img src="./img/harry-potter/snape-patronus-1.webp" alt="Figura de Snape patronus"/>
            </picture>
        </section>
        </>
    )
}