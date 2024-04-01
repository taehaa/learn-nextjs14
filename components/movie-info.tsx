import {API_URL} from "../app/constants";
import styles from "../app/styles/movie-info.module.css";
import Link from "next/link";

async function getMovie(id : string) {
    console.log(`start getMovie ${Date.now()}`);
    //await new Promise((resolve) => {setTimeout(resolve, 5000);})
    const response = await fetch( `${API_URL}/${id}` );
    console.log(`end getMovie`);
    return response.json();
}

export default async function MovieInfo ({id}: {id : string}) {
    const movie = await getMovie(id);

    return (
        /*<h6>{JSON.stringify(movie)}</h6>*/
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.container} alt={movie.title}/>
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>*vote_average : {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <Link href={movie.homepage} target={`_blank`}>Homepage &rarr;</Link>
            </div>
        </div>
    );
}