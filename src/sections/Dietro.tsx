import {useState} from "react";
import video from "../assets/video.mp4";

export default function Dietro() {
    const [videoVisible, setVideoVisible] = useState(false);

    function showHideVideo(){
        setVideoVisible(!videoVisible)
    }

    return (
        <div className="self-center">
            <button
                className={`text-sm text-neutral-400 py-2 px-3 border-1 border-neutral-400 rounded-2xl
                    ${videoVisible && "hidden"}`}
                    onClick={()=>{showHideVideo()}}
            >
                Scopri cosa c'è dietro
            </button>
            <div className={`${!videoVisible && "hidden"} flex flex-col items-center`}>
                <video src={video} className="w-60" controls autoPlay muted></video>
                <button
                    className="text-red-400 mt-2 py-2 px-3 border-1 border-red-400 rounded-2xl"
                    onClick={() => {
                        showHideVideo();
                    }}
                >
                    Chiudi questa roba
                </button>
            </div>
        </div>
    );
}
