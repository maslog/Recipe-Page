import image from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className="m-20 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="container text-justify justify-start">
        <div className="main">
          <img src={image} className="rounded-xl shadow-md mb-5" />
          <div className="sub-main m-10">
            <h1 className=" text-5xl font-serif text-amber-600">
              Simple Omelette Recipe
            </h1>
            <p className="mt-2 text-gray-500">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
        </div>
        <div className="instructions m-10 text-gray-500">
          <div className=" bg-red-50 rounded-xl p-5 mb-10">
            <h2 className=" text-xl text-amber-600 font-serif">
              Preparation time
            </h2>
            <ul className=" p-5 pt-0  list-disc">
              <li>
                {" "}
                <span className=" font-bold text-black-900">Total:</span>{" "}
                Approximately 10 minutes
              </li>
              <li>
                <span className=" font-bold text-black-900">Preparation:</span>{" "}
                5 minutes
              </li>
              <li>
                <span className=" font-bold text-black-900">Cooking:</span> 5
                minutes
              </li>
            </ul>
          </div>

          <h2 className=" mb-2 text-xl text-amber-600 font-serif">
            Ingredients
          </h2>
          <ul className="mb-5 p-5 pt-0  list-disc">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>

          <hr className="mb-5" />

          <h2 className=" mb-2 text-xl text-amber-600 font-serif">
            Instructions
          </h2>
          <ol className="mb-5 pt-0 list-decimal p-5">
            <li>
              <span className=" font-bold text-black-900">Beat the eggs:</span>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </li>
            <li>
              <span className=" font-bold text-black-900">Heat the pan:</span>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li>
              <span className=" font-bold text-black-900">
                Cook the omelette:
              </span>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <span className=" font-bold text-black-900">
                Add fillings (optional):
              </span>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li>
              <span className=" font-bold text-black-900">Fold and serve:</span>{" "}
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </li>
            <li>
              <span className=" font-bold text-black-900">Enjoy:</span> Serve
              hot, with additional salt and pepper if needed.
            </li>
          </ol>

          <h2 className=" text-xl text-amber-600 font-serif mb-2">Nutrition</h2>
          <p className="mb-5">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table className="table-auto w-full font-semibold">
            <tbody>
              <tr className="border-b-2 border-gray-500 ">
                <td className=" font-bold">Calories</td>{" "}
                <td className=" text-amber-900">277kcal</td>
              </tr>
              <tr className="border-b-2 border-gray-500 ">
                <td className=" font-bold">Carbs</td>{" "}
                <td className=" text-amber-900">0g</td>
              </tr>
              <tr className="border-b-2 border-gray-500 ">
                <td className=" font-bold">Protein</td>{" "}
                <td className=" text-amber-900">20g</td>
              </tr>
              <tr className="border-b-2 border-gray-500 ">
                <td className=" font-bold">Fat</td>{" "}
                <td className=" text-amber-900">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
