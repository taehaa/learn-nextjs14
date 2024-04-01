"use client" /* use client 는 backend에서 render 되고 frotend에서 hydrate 됨을 의미한다. */

import Link from "next/link";
import URL from "./URL"
import {usePathname} from "next/navigation";
import {useState} from "react";
import styles from "./navigation.module.css"

export default function Navigation() {
    const path = usePathname();/* 현재 URL을 반환 */
    const [count, setCount] = useState(0);

    return (
        <nav className={styles.nav}>
            <ul>
                {/* React.js 에서는 a 태그 대신 Link를 사용한다. */}
                <li>
                    <Link href={URL.MAIN}>Home</Link> {path === URL.MAIN ? "★" : ""}
                </li>
                <li>
                    <Link href={URL.ABOUT_US}>About Us</Link> {path === URL.ABOUT_US ? "★" : ""}
                </li>
                <li>
                    <Link href={URL.SALES}>Sales</Link> {path === URL.SALES ? "★" : ""}
                </li>
                <li>
                    <button onClick={() => {setCount((c) => c + 1)}}>{count}</button>
                </li>
            </ul>
        </nav>
    );
}