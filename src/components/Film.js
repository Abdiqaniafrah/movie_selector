const Film = ({film}) => {

    // map and create new array
    const cast = film.cast.map(actor => {
        return (
            <li>{actor.name}</li>
        )
    });


return (
    <>
    <h2>Title: <span>{film.title}</span></h2>
    <h3>Duration: <span>{film.duration}</span></h3>
    <h3>Rating: <span>{film.rating}</span></h3>
    <hr /> 
    <h3>Starring</h3>
    <ul>{cast}</ul>
    <hr />
    <h3>Directed by:</h3>
    <h4>{film.director.name}</h4>
    </>
)

}

export default Film;