import Navbar from "../components/Navbar";
export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <h2>Conway’s Game of Life</h2>
            <p>Conway’s Game of Life (or just, Life, as I will call it) is a game that is “played” based on a grid system.  Every individual location on the grid can be understood as a cell.  The game, or simulation, occurs over iterations, or generations.  After a generation, a cell may change from living or dead based on how many living or dead neighbors it had in a previous iteration.  A neighbor is any immediately adjacent spot on the grid (horizontal, vertical or diagonal).  We can understand this more clearly with an example and a clear demonstration of the rules.
You are welcome to read about 
</p>
            <h4>Life has 4 simple rules:</h4>
            <ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ol>
        </>
    )
}