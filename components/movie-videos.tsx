
import styles from "../app/styles/movie-videos.module.css";
import {API_URL} from "../app/constants";

const VIDEO_URL = "https://youtube.com/embed/";

async function getVideos(id: string, isError: boolean) {
    console.log(`start getVideos : ${Date.now()}`);
    await new Promise((resolve) => {setTimeout(resolve, 3000);});

    /* error 발생 */
    if (isError) {
        throw new Error(`shomething broke...`);
    }

    const response = await fetch(`${API_URL}/${id}/videos`);
    console.log(`end getVideos`);
    return response.json();
}

export default async function MovieVideos({id}: { id: string }) {
    const isError = false;
    const videos = await getVideos(id, isError);

    return (
        /*<h6>{JSON.stringify(videos)}</h6>*/
        <div className={styles.container}>
            {videos.map( (video) => (
                <iframe
                    key={video.id}
                    src={`${VIDEO_URL}/${video.key}`}
                    allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
                    allowFullScreen
                    title={video.name}
                />
            ) )}
        </div>
    );
}