import React from 'react';

export default function Movies({ movies }) {
    return <section className='cuadricula'>
        {movies.map(movie => <article key={movie.id} className='movie'>
            {/* {Bloque contenedor} */}
            <h2 className="movie__title">{movie.fullName}</h2>
            <p className="movie__stars">⭐ ⭐ ⭐ ⭐ ⭐</p>
            <img src={movie.imageUrl} alt={movie.imageUrl} className='movie__image' />

        </article>)}
    </section>;
}
