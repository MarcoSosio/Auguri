import {useEffect, useState} from "react";
import "../animations/anim.css";

export default function Auguri() {
    const [days, setDays] = useState<number>();

    useEffect(
        function () {
            const birthday = new Date("2025-06-24");
            const now = new Date();
            const difference = now.getTime() - birthday.getTime();
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(days);
        },
        []
    );
    return (
        <div
            className="self-center flex w-max flex-col items-center gap-2 border-double
                font-[Coiny]"
        >
            <div className="animation-light-text text-4xl">TANTI AUGURI</div>
            <div
                className="animation-std-border flex items-center justify-center
                    rounded-full border-2 border-dashed p-5 text-9xl"
            >
                <span
                    className="animation-std-text change-color-text relative
                        top-2.5"
                >
                    18
                </span>
            </div>
            <div className="animation-light-text text-xl">+{days} giorni</div>
        </div>
    );
}
/*
.coiny-regular {
  font-family: "Coiny", system-ui;
  font-weight: 400;
  font-style: normal;
}

 */
