import React from 'react';

export default function Characters({ characters }) {
    return <section>
        {characters.map(character => <article key={character.id} className='producto'>

                {/* {Bloque contenedor} */}
                <h2 className="name__product--red">Product Name</h2>
                <p className="description__product--bold">Oferta</p>
                <p className="description__product--regular">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores aliquam nisi odit harum. Provident consequuntur explicabo, asperiores, atque tempore maiores, quidem cupiditate odio delectus doloribus obcaecati ad quam distinctio.
                </p>

            </article>)}
        </section>
}
