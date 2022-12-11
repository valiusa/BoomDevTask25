import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();

        this._beat = new Beat();
        this._beat.on(Beat.events.BIT, this._create.bind(this));

        this.emit(Application.events.READY);
    }

    _create() {
        const lyrics = [
            "Ah",
            "ha",
            "ha",
            "ha",
            "stayin' alive",
            "stayin' alive",
        ];

        for (let i = 0; i < lyrics.length; i++) {
            const message = document.createElement("div");

            message.classList.add("message");
            message.innerText = lyrics[i];

            document.querySelector(".main").appendChild(message);
        }
    }
}
