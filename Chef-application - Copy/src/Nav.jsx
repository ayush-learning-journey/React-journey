import React from "react";
export default function Nav() { 
    const [ingredients, setIngredients] = React.useState([]);
    const [recipeShown, setRecipeShown] = React.useState(false);
    const [recipe, setRecipe] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const ingredientsListItem = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get('ingredient');
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
            event.target.reset();
        }
    }

    async function handleRecipeShown() {
        setLoading(true);
        setRecipeShown(true);
        const prompt = `Generate a recipe using these ingredients: ${ingredients.join(", ")}.`;
        try {
            const response = await fetch("http://192.168.56.1:1234/v1/chat/completions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "dolphin-2.6-mistral-7b",
                    messages: [
                        { role: "user", content: prompt }
                    ],
                    max_tokens: 512
                })
            });
            const data = await response.json();
            setRecipe(
                data.choices?.[0]?.message?.content || "No recipe generated."
            );
        } catch (error) {
            setRecipe("Error generating recipe.");
        }
        setLoading(false);
    }

    return ( 
        <main> 
            <form onSubmit={addIngredient} className="text-xl mt-10 flex flex-row justify-center"> 
                <input 
                    id="iden"
                    name="ingredient"
                    type="search"
                    placeholder="add ingredient or instructions e.g.. oregano..."
                    className=" text-sm font-serif bg-white rounded-lg w-94 px-4 py-2 border-2 border-purple-300 focus:outline-none focus:border-pink-400 transition duration-200"
                /> 
                <button
                    className="font-mono ml-5 text-black bg-pink-300 rounded-lg w-60 px-4 py-2 font-semibold hover:bg-pink-400 active:bg-pink-500 transition-colors duration-200 shadow"
                    type="submit"
                >
                    + Add Ingredient
                </button> 
            </form> 
            <div className="flex flex-row items-start justify-center mt-10">
                {ingredients.length > 0 && (
                    <>
                        <section className="bg-orange-100 rounded-xl shadow-lg p-4 max-w-xl">
                            <h2 className="text-2xl font-bold text-orange-700 mb-4">Ingredients on Hand:</h2>
                            <ul className="list-none pl-2 text-lg text-orange-800 mb-6">{ingredientsListItem}</ul>
                            <div className="bg-pink-100 rounded-lg p-6 flex flex-col items-center">
                                <h3 className="text-xl font-semibold text-pink-700 mb-2">Ready for Recipe?</h3>
                                <p className="text-pink-600 mb-4">Generate the recipe from your ingredients</p>
                                <button onClick={handleRecipeShown}
                                className="bg-pink-400 text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-pink-500 transition-colors duration-200"
                                disabled={loading}
                                >
                                    {loading ? "Generating..." : "Get a recipe"}
                                </button>
                            </div>
                        </section>
                        {recipeShown && (
                            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md ml-8 h-fit flex flex-col items-start">
                                <h2 className="text-2xl font-bold text-gray-700 mb-4">Recipe</h2>
                                <p className="text-gray-600">{loading ? "Loading..." : recipe}</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </main> 
    ) 
}
