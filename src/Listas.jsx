import { useState } from 'react';
import Cards from './Cards';

const Listas = () => {
    const canciones = [
        {id: 1, nombre: 'TOY EN EL MIC', imagen: 'cancion1.jpg'},
        {id: 2, nombre: 'HAY MI DIOS', imagen: 'cancion2.jpg'},
        {id: 3, nombre: 'TRUENO - GIL', imagen: 'cancion3.jpg'},
    ];

    const [total, setTotal] = useState(0);
    const [busqueda, setBusqueda] = useState("");

    const cancionesFiltradas = canciones.filter((cancion) =>
        cancion.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    return (
        <div
            style={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1>Total de likes de las canciones: {total}</h1>

            <input
                style={{
                    padding: '10px',
                    marginBottom: '20px',
                    width: '300px',
                    border: '1px solid #2ccfd4',
                    borderRadius: '5px',
                }}
                type='text'
                placeholder='Ingrese el nombre de una cancion'
                value={busqueda}
                onChange={(e) => {
                    setBusqueda(e.target.value);
                }}
            />

            <div style={{ display: "flex", gap: "10px" }}>

                {cancionesFiltradas.length == 0 && (
                    <p style={{color: "#ccc", fontSize: "20px"}}>
                        No se encontro el nombre de la cancion {busqueda}!!!!
                    </p>
                )}

                {cancionesFiltradas.map((cancion) => {
                    return (
                        <Cards
                            key={cancion.id}
                            nombre={cancion.nombre}
                            img={cancion.imagen}
                            onLike={() => {
                                console.log('like en el padre');
                                setTotal(total + 1);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Listas;
