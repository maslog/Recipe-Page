import image from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className="m-20 max-w-md mx-auto bg-orange-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="container">
        <div className="main">
          <img src={image} />
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="instructions">
          <div>
            <h2>Preparation time</h2>
            <ul>
              <li>Total: Approximately 10 minutes</li>
              <li>Preparation: 5 minutes</li>
              <li>Cooking: 5 minutes</li>
            </ul>
          </div>

          <h2>Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>

          <hr />

          <h2>Instructions</h2>
          <ol>
            <li>
              Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
            <li>
              Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </li>
            <li>
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              Add fillings (optional): When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </li>
            <li>
              Fold and serve: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.
            </li>
            <li>
              Enjoy: Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>

          <h2>Instructions</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table className="table-auto border-slate-950 box-border border-2">
            <tbody>
              <tr>
                <td>Calories</td> <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td> <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td> <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td> <td>22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}



export default App;
