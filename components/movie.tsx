"use client";

import Link from "next/link";
import styles from "../app/styles/movie.module.css";
import {useRouter} from "next/navigation";


interface IMoviewProps {
    id: string;
    title: string;
    poster_path: string
}

export default function Movie({id, title, poster_path}: IMoviewProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
    return (
        <div className={styles.movie}>
            {/* prefetch = 이벤트 발생 전에 next.js가 미리 해당 이벤트를 로딩 */}
            <Link prefetch={true} href={`/movies/${id}`}>{title}</Link>
            <img src={poster_path} alt={title} onClick={onClick}/>
            {/*<li>{JSON.stringify(movie)}</li>*/}
        </div>

    );
}