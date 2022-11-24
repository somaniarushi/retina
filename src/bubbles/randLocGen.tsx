import Bubble from "./Bubble";

export default function randomBubbleGenerator(num: Number, move: boolean = true) {
    let bubbles: JSX.Element[] = [];
    for (let i = 0; i < num; i++) {
        bubbles.push(<Bubble x={Math.random() * 100} y={Math.random() * 100} move={move}/>);
    }
    return bubbles;
}