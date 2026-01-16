import "./style.css";

// selected array of recipes
const recipe = [
  {
    name: "Brownie",
    img: "https://i.pinimg.com/1200x/92/d1/e5/92d1e5860b13811f58c67902ee4f744b.jpg",
    alt: "Brownie",
    ingredients: [
      "1 1/2 cups granulated sugar",
      "3/4 cup all-purpose flour",
      "2/3 cup cocoa powder (sifted if lumpy)",
      "1/2 cup powdered sugar (sifted if lumpy)",
      "1/2 cup dark chocolate chips",
      "3/4 teaspoons sea salt",
      "2 large eggs",
      "1/2 cup canola oil or extra-virgin olive oil",
      "2 tablespoons water",
      "1/2 teaspoon vanilla",
    ],
    instructions: [
      "1. Preheat the oven to 325°F. Lightly spray an 8x8 baking dish with cooking spray. Line and spray the parchment paper.",
      "2. In a bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.",
      "3. In another bowl, whisk together the eggs, olive oil, water, and vanilla.",
      "4. Sprinkle the dry mix over the wet mix and stir until just combined.",
      "5. Pour the batter into the prepared pan and use a spatula to smooth the top. Bake for 40 to 48 minutes, or until a toothpick comes out with only a few crumbs attached",
      "(note: it's better to pull the brownies out early than to leave them in too long. Remember to cool completely before slicing and store in an airtight container at room temperature for up to 3 days.)",
    ],
  },
  {
    name: "Matcha Oreo Cookies",
    img: "https://i.pinimg.com/736x/bd/16/fa/bd16fa038d284532a78e899358a286aa.jpg",
    alt: "Matcha Oreo Cookies",
    equipment: ["8x8 Baking Dish", "Cooking Spray", "Parchment Paper"],
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "2 tbsp matcha powder",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "1/2 cup unsalted butter, softened",
      "3/4 cup granulated sugar",
      "1/4 cup brown sugar, packed",
      "1 large egg",
      "1 tsp vanilla extract",
      "1/4 cup mini chocolate chips (optional for extra texture)",
      "1/2 cup cream cheese, softened",
      "1/4 cup powdered sugar",
      "1 tsp vanilla extract",
      "6-8 Oreos, crushed into small pieces",
    ],
    instructions: [
      "1. Preheat the oven to 350°F (175°C). Line a baking sheet with parchment paper.",
      "2. In a medium bowl, whisk together the flour, matcha powder, baking soda, and salt.",
      "3. In a large bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy.",
      "4. Add the egg and vanilla extract to the butter mixture, and beat until combined.",
      "5. Gradually add the dry ingredients to the wet ingredients and mix until just combined. (Optional: fold in mini chocolate chips.)",
      "6. In a small bowl, mix together the cream cheese, powdered sugar, and vanilla extract until smooth to make the filling.",
      "7. Take about a tablespoon of cookie dough and flatten it slightly. Place a small dollop of the cream cheese mixture in the center, then cover it with another tablespoon of dough. Seal the edges to enclose the cream filling.",
      "8. Place the dough balls on the prepared baking sheet, leaving space between them.",
      "9. Bake for 10-12 minutes, or until the edges are lightly golden and the centers are set.",
      "10. Remove from the oven and let the cookies cool on the baking sheet for 5 minutes, then transfer them to a wire rack to cool completely.",
      "11. Once cooled, top the cookies with crushed Oreos for decoration and extra flavor.",
      "(Note: Cool the cookies completely before storing them in an airtight container at room temperature for up to 3 days.)",
    ],
  },
]

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <img src="${item.img}" alt="${item.alt}" />
      <h2>${item.name}</h2>
     </div>`,
  );
}

document.addEventListener("DOMContentLoaded", () => {
  recipe.forEach(inject);
});
