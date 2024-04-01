/**
 * Directory의 기본 접근 페이지로 파일명이 page 여야만 한다.
 * @constructor
 */
import {useEffect, useState} from "react";
import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../styles/home.module.css"
import {API_URL} from "../constants";



export const metadata = {
    title: "This is real Home"
}

async function getMovies() {
    //await new Promise( (resolove) => setTimeout(resolove, 10000) );
    return (
        fetch(API_URL).then(response => response.json())
    );
}

/*function CsrMain () {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ movies, setMovies ] = useState([]);
    const getMovies = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();

        setMovies(json);
        setIsLoading(false);
    }

    /!**
     * useEffect( () => {} ) -> 계속 반복요청된다.
     * useEffect( () => {}, [] ) -> 1회 요청
     *!/
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h1>Hello NextJs !!</h1>
            {isLoading ? "Loading..." : JSON.stringify(movies)}
        </div>
    );
}*/


async function SsrMain() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map( (movie) =>
                <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path}/>
                /*<div key={movie.id}>
                    <img src={movie.poster_path} alt={movie.title}/>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </div>*/
                /*<li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>*/
            )}
        </div>
    );
}

export default SsrMain;
//export default CsrMain;