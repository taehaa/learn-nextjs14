import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Page Not Found !!"
}

/**
 * 404 발생 시 자동으로 해당 파일로 이동
 * @constructor
 */
export default function NotFound () {
    return <h1>Not Found!!</h1>
}