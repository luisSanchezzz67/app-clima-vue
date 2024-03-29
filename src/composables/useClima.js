export default function useClima() {

    const obtenerClima = ({ciudad, pais}) => {
        console.log('Consultando clima..', ciudad);
        console.log('Consultando clima..', pais);

    }


    return {
        obtenerClima
    }
}