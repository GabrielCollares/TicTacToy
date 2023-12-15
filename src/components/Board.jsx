import Square from "./Square";


const SQUARES = [
  "", "X", "O",
  "", "O", "X",
  "O", "X", ""
];
export default function Board() {
  return (
    <>
        <div className="board">
            <Square value={SQUARES[0]} />
            <Square value={SQUARES[1]} />
            <Square value={SQUARES[2]}/>
        </div>

        <div className="board">
            <Square value={SQUARES[3]} />
            <Square value={SQUARES[4]} />
            <Square value={SQUARES[5]} />
        </div>

        <div className="board">
            <Square value={SQUARES[6]}/>
            <Square value={SQUARES[7]}/>
            <Square value={SQUARES[8]}/>
        </div>

    </>
);

  }

