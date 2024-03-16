import Navbar from "../components/Navbar";
export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div class="container-fluid">
            <h1>Game Features and How to Play</h1>
            <div class="card need-blue-background need-white-color">
              <div class="card-body">
                <h2 class="first-h2">👀 You will see</h2>
                <p>A grid of 20x20 default size, with a total of 400 cells.</p>
                <p>There are 5% of cells are alive randomly, filled with black color.</p>

                <h2>✨ You can</h2>
                <p>Hit the <mark>Next</mark> button to evolve the pattern made up by alive cells, followed by the universe of the Game of Life. </p>

                <h2>✨ If you want to change the size of the grid</h2>
                <p>Enter the number of row and column you want and hit the <mark>Update Grid</mark> button (or hit return/enter from your keyboard) to get a new grid with the size you want. </p>
                <p><em class="need-red-color">Note that</em> you are only allowed to enter numbers from <u>3</u> to <u>40</u>. Anything beyond that will result in the grid remaining the same size and an error message. If you enter any out-of-range numbers, you can start to pray it won’t be a <del>window alert</del>. Just kidding, we are not that evil! </p>

                <h2>✨ If you want to reset the alive cells </h2>
                <p>Hit that <mark>Reset</mark> button! </p>

                <h2>✨ If you want some cells alive or dead</h2>
                <p>Click on that cell, it will reverse the state. </p>

                <h2>✨ If you want to keep tracks of the cells that’s dead</h2>
                <p>We have a heatmap feature that allows you to see the dead cells with different shades of blue indicating how long they have been dead. </p>
                <p>You can use this feature by turning on the <mark>Heatmap switch</mark>. The switch is located at the bottom. </p>

                <h2>✨ If you are too lazy to hit Next button </h2>
                <p>We have Auto Play feature to free up your hands. </p>
                <p>Hit that <mark>Auto Play</mark> button, and the cells in the grid will evolve automatically every 100 milliseconds. </p>
              </div>
            </div>

            <h1>Boring stuff .. 🥱</h1>
            <p>I know I know, you are here for games not knowledges, but it’s also good to know the basic principles of this game. </p>
            <div class="card need-blue-background need-white-color">
              <div class="card-body">
                
                <h2 class="first-h2">🧐 If you are interested in the universe of the Game of Life</h2>
                <p>Here are the 4 simple rules:</p>
                <ol class="list-group list-group-numbered">
                <li class="list-group-item need-blue-color">A living cell with less than two living neighbors dies.</li>
                <li class="list-group-item need-blue-color">A living cell with two or three live neighbors lives.</li>
                <li class="list-group-item need-blue-color">A living cell with more than three live neighbors dies.</li>
                <li class="list-group-item need-blue-color">A dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
                </ol>

                <h2>🧐 So, what’s Conway’s Game of Life? </h2>
                <p>Conway’s Game of Life (or just, Life, as I will call it) is a game that is “played” based on a grid system. Every individual location on the grid can be understood as a cell. The game, or simulation, occurs over iterations, or generations. After a generation, a cell may change from living or dead based on how many living or dead neighbors it had in a previous iteration. A neighbor is any immediately adjacent spot on the grid (horizontal, vertical or diagonal). We can understand this more clearly with an example and a clear demonstration of the rules.</p>

              </div>
            </div>

            <h1>🎉 Thanks for reading all the way here! </h1>
            <p>a little Easter egg</p>
            <div class="card need-blue-background need-white-color">
              <div class="card-body">
                <h2 class="first-h2">Have fun!</h2>
                <h2>¡Diviértete!</h2>
                <h2>Amuse-toi bien !</h2>
                <h2>Viel Spaß!</h2>
                <h2>Divertiti!</h2>
                <h2>Divirta-se!</h2>
                <h2>Веселись!</h2>
                <h2>玩得开心！</h2>
                <h2>楽しんでね！</h2>
                <h2>즐겁게 놀아!</h2>
                <h2>استمتع بوقتك!</h2>
                <h2>मजे करो!</h2>
                <h2>Veel plezier!</h2>
                <h2>Ha så kul!</h2>
                <h2>Hav det sjovt!</h2>
                <h2>Ha det gøy!</h2>
                <h2>Pitäkää hauskaa!</h2>
                <h2>Baw się dobrze!</h2>
                <h2>İyi eğlenceler!</h2>

              </div>
            </div>
            <h1></h1>

            </div>

        </>
    )
}