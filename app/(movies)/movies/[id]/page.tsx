import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

/**
 * SSR(server side rendering)
 */
export default async function MovieDetail({params: {id}}: {params: {id: string};}) {
    // 순처적으로 처리
    /*console.log(id);
    console.log(`start fetching`);
    const movie = await getMovie(id);
    console.log(`getMovie start fetching`);
    const videos = await getVideos(id);
    console.log(`getVideos end fetching`);*/

    //병렬 처리
    //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);


    return (
        <div>
            {/*<h1>Movie {id}</h1>*/}
            {/*{movie.title}
            {JSON.stringify(videos)}*/}
            
            {/*  
                Suspense로 감싸면 각 컴포넌트의 결과가 response 되는대로 출력
            */}
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense>

        </div>
    );
}

/*<MovieDetail params={{id: 123}} />*/

/**
 * CSR(client side rendering)
 */

/*
"use client"

import {useParams} from "next/navigation";

export default function Movie(props) {
    const param = useParams();
console.log(props);
console.log(param);

    return (
        <h1>Movie</h1>
    );
}*/
