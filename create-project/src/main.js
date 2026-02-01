import "./style.css";

// selected array of recipes
const recipe = [
  {
    name: "Brownie",
    img: "https://i.pinimg.com/1200x/92/d1/e5/92d1e5860b13811f58c67902ee4f744b.jpg",
    alt: "Brownie",
    equipment: [
      "8x8 Baking Dish",
      "Mixing Bowls",
      "Whisk",
      "Spatula",
      "Measuring Cups",
      "Measuring Spoons",
      "Oven",
      "Parchment Paper",
    ],
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
    equipment: [
      "Baking Sheet",
      "Parchment Paper",
      "Mixing Bowls",
      "Electric Mixer",
      "Spatula",
      "Measuring Cups",
      "Measuring Spoons",
      "Oven",
    ],
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
      "(note: cool the cookies completely before storing them in an airtight container at room temperature for up to 3 days.)",
    ],
  },
  {
    name: "S'more Cookie",
    img: "https://i.pinimg.com/736x/bd/d9/7b/bdd97bfc4e51c73d2021e6cac83e9e02.jpg",
    alt: "S'more Cookie",
    equipment: [
      "Baking Sheet",
      "Parchment Paper",
      "Mixing Bowls",
      "Electric Mixer",
      "Spatula",
      "Measuring Cups",
      "Measuring Spoons",
      "Oven",
    ],
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "1/2 cup unsalted butter, softened",
      "3/4 cup brown sugar",
      "1/4 cup granulated sugar",
      "1 large egg",
      "1 tsp vanilla extract",
      "1/2 cup chocolate chips",
      "Marshmallows",
      "Graham cracker pieces",
      "Chocolate squares",
    ],
    instructions: [
      "1. Preheat the oven to 350°F (175°C). Line a baking sheet with parchment paper.",
      "2. In a medium bowl, whisk together flour, baking soda, and salt. Set aside.",
      "3. In a large bowl, cream the butter, brown sugar, and granulated sugar until light and fluffy (about 2–3 minutes).",
      "4. Add the egg and vanilla extract, mixing until fully incorporated.",
      "5. Gradually add the dry ingredients to the wet ingredients and mix until just combined.",
      "6. Fold in the chocolate chips evenly.",
      "7. Scoop dough into balls and flatten slightly. Place a piece of chocolate, marshmallow, and graham cracker in the center.",
      "8. Gently wrap the dough around the filling, sealing it completely.",
      "9. Place cookies on the baking sheet, spacing them 2 inches apart.",
      "10. Bake for 10–12 minutes until edges are golden and marshmallow is lightly toasted.",
      "11. Cool on the baking sheet for 5 minutes before transferring to a wire rack.",
    ],
  },
  {
    name: "Double Chocolate Cookie",
    img: "https://i.pinimg.com/736x/dd/d5/b4/ddd5b4e701c4c6596fd2574fc834aa64.jpg",
    alt: "Double Chocolate Cookie",
    equipment: [
      "Baking Sheet",
      "Parchment Paper",
      "Mixing Bowls",
      "Electric Mixer",
      "Spatula",
      "Measuring Cups",
      "Measuring Spoons",
      "Oven",
    ],
    ingredients: [
      "1 cup all-purpose flour",
      "1/3 cup cocoa powder",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "1/2 cup butter, softened",
      "3/4 cup sugar",
      "1 large egg",
      "1 tsp vanilla extract",
      "3/4 cup chocolate chips",
    ],
    instructions: [
      "1. Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
      "2. In a bowl, whisk together flour, cocoa powder, baking soda, and salt.",
      "3. In a separate bowl, cream the butter and sugar until smooth and fluffy.",
      "4. Add the egg and vanilla extract and mix until combined.",
      "5. Slowly add the dry ingredients to the wet mixture, mixing just until no dry streaks remain.",
      "6. Fold in the chocolate chips.",
      "7. Scoop dough onto the baking sheet, leaving space between cookies.",
      "8. Bake for 10–12 minutes until the tops are set but centers remain soft.",
      "9. Let cookies cool on the tray for 5 minutes before moving to a rack.",
    ],
  },
  {
    name: "Chocolate Chip Cookie",
    img: "https://i.pinimg.com/1200x/49/c7/78/49c77835dee9a4686356feefb290d3a2.jpg",
    alt: "Chocolate Chip Cookie",
    equipment: [
      "Baking Sheet",
      "Parchment Paper",
      "Mixing Bowls",
      "Electric Mixer",
      "Spatula",
      "Measuring Cups",
      "Measuring Spoons",
      "Oven",
    ],
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "3/4 cup butter, softened",
      "3/4 cup brown sugar",
      "1/2 cup granulated sugar",
      "1 large egg",
      "2 tsp vanilla extract",
      "1 1/2 cups chocolate chips",
    ],
    instructions: [
      "1. Preheat oven to 350°F (175°C) and line a baking sheet.",
      "2. In a bowl, whisk together flour, baking soda, and salt.",
      "3. In a large bowl, cream butter, brown sugar, and granulated sugar until fluffy.",
      "4. Add egg and vanilla extract, mixing until smooth.",
      "5. Gradually add dry ingredients and mix until just combined.",
      "6. Fold in chocolate chips.",
      "7. Scoop dough onto baking sheet, spacing 2 inches apart.",
      "8. Bake for 10–12 minutes until edges are lightly golden.",
      "9. Cool on baking sheet briefly before transferring.",
    ],
  },
  {
    name: "Red Velvet Marshmallow Cookie",
    img: "https://i.pinimg.com/736x/21/d6/bf/21d6bffffd929a1106978f40a6b48ba0.jpg",
    alt: "Red Velvet Marshmallow Cookie",
    equipment: [
      "Baking Sheet",
      "Parchment Paper",
      "Mixing Bowls",
      "Electric Mixer",
      "Spatula",
      "Measuring Cups",
      "Measuring Spoons",
      "Oven",
    ],
    ingredients: [
      "1 1/4 cups all-purpose flour",
      "1 tbsp cocoa powder",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "1/2 cup butter, softened",
      "3/4 cup sugar",
      "1 large egg",
      "1 tsp vanilla extract",
      "1 tbsp red food coloring",
      "Marshmallows",
      "White chocolate chunks",
    ],
    instructions: [
      "1. Preheat oven to 350°F (175°C) and line a baking sheet.",
      "2. Whisk together flour, cocoa powder, baking soda, and salt.",
      "3. Cream butter and sugar until fluffy.",
      "4. Add egg, vanilla extract, and red food coloring. Mix until evenly colored.",
      "5. Gradually add dry ingredients and mix until just combined.",
      "6. Fold in white chocolate chunks.",
      "7. Scoop dough onto baking sheet and gently press a marshmallow on top.",
      "8. Bake for 10–12 minutes until cookies are set and marshmallow is soft.",
      "9. Cool slightly before transferring to a wire rack.",
    ],
  },
  {
    name: "Tiramisu",
    img: "https://i.pinimg.com/1200x/21/78/54/217854c01f5a2d2512e67d8ab9b808fb.jpg",
    alt: "Classic Tiramisu",
    equipment: [
      "9x9 Baking Dish",
      "Mixing Bowls",
      "Electric Mixer",
      "Spatula",
      "Whisk",
      "Measuring Cups",
      "Measuring Spoons",
      "Refrigerator",
    ],
    ingredients: [
      "6 large egg yolks",
      "3/4 cup granulated sugar",
      "1 cup mascarpone cheese",
      "1 1/2 cups heavy cream",
      "2 cups strong brewed espresso, cooled",
      "2 tbsp coffee liqueur (optional)",
      "1 package ladyfinger cookies",
      "2 tbsp unsweetened cocoa powder",
    ],
    instructions: [
      "1. In a large mixing bowl, combine the egg yolks and granulated sugar. Using an electric mixer, beat on medium speed for 3–5 minutes until the mixture becomes pale, thick, and slightly glossy.",
      "2. Add the mascarpone cheese to the egg mixture. Beat on low speed until fully incorporated and smooth, scraping down the sides of the bowl as needed.",
      "3. In a separate bowl, whip the heavy cream until stiff peaks form. Be careful not to overwhip.",
      "4. Gently fold the whipped cream into the mascarpone mixture using a spatula, folding slowly to maintain a light and airy texture.",
      "5. In a shallow dish, mix the cooled espresso with the coffee liqueur if using.",
      "6. Quickly dip each ladyfinger into the coffee mixture, making sure not to soak them too long, and arrange them in a single layer at the bottom of the baking dish.",
      "7. Spread half of the mascarpone cream evenly over the ladyfingers using a spatula.",
      "8. Repeat with another layer of dipped ladyfingers followed by the remaining cream mixture.",
      "9. Smooth the top, cover with plastic wrap, and refrigerate for at least 4 hours or overnight for best flavor and texture.",
      "10. Just before serving, dust the top generously with unsweetened cocoa powder.",
    ],
  },
  {
    name: "Strawberry Shortcake",
    img: "https://i.pinimg.com/736x/e9/bd/94/e9bd94a5a3a6552673a66eff458646d0.jpg",
    alt: "Strawberry Shortcake",
    equipment: [
      "Baking Sheet",
      "Parchment Paper",
      "Mixing Bowls",
      "Pastry Cutter",
      "Measuring Cups",
      "Measuring Spoons",
      "Oven",
    ],
    ingredients: [
      "2 cups all-purpose flour",
      "1/4 cup granulated sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "1/2 cup cold unsalted butter, cubed",
      "2/3 cup heavy cream",
      "1 tsp vanilla extract",
      "2 cups fresh strawberries, sliced",
      "2 tbsp sugar (for strawberries)",
      "1 cup whipped cream",
    ],
    instructions: [
      "1. Preheat the oven to 425°F (220°C). Line a baking sheet with parchment paper.",
      "2. In a large bowl, whisk together the flour, granulated sugar, baking powder, and salt until evenly combined.",
      "3. Add the cold, cubed butter to the flour mixture. Use a pastry cutter or your fingers to cut the butter into the flour until the mixture resembles coarse crumbs.",
      "4. Pour in the heavy cream and vanilla extract. Stir gently until the dough just comes together; do not overmix.",
      "5. Using a spoon or scoop, drop portions of dough onto the prepared baking sheet to form individual shortcakes.",
      "6. Bake for 12–15 minutes, or until the tops are lightly golden and the shortcakes are cooked through.",
      "7. While the shortcakes bake, combine sliced strawberries with sugar in a bowl and let them sit to release their juices.",
      "8. Allow the shortcakes to cool slightly, then slice them in half horizontally.",
      "9. Layer the bottom half with strawberries and whipped cream, place the top half on, and add more strawberries and cream if desired.",
      "10. Serve immediately for best texture and flavor.",
    ],
  },
  {
    name: "Mochi Donuts",
    img: "https://i.pinimg.com/736x/9c/be/1c/9cbe1c1629dd79bd25f2c021ed2db790.jpg",
    alt: "Mochi Donuts",
    equipment: [
      "Mixing Bowls",
      "Whisk",
      "Deep Fryer or Pot",
      "Thermometer",
      "Slotted Spoon",
      "Paper Towels",
    ],
    ingredients: [
      "1 1/2 cups glutinous rice flour",
      "1/2 cup sugar",
      "1 tsp baking powder",
      "1/2 cup milk",
      "1 large egg",
      "2 tbsp melted butter",
      "Oil for frying",
      "Powdered sugar or glaze for topping",
    ],
    instructions: [
      "1. In a large bowl, whisk together the glutinous rice flour, sugar, and baking powder until evenly combined.",
      "2. Add the milk, egg, and melted butter to the dry ingredients. Mix until a smooth, soft dough forms that is slightly sticky but workable.",
      "3. Divide the dough into small, equal-sized balls. Arrange 6–8 balls in a circle, gently pressing them together to form a donut shape.",
      "4. Heat oil in a deep pot or fryer to 350°F (175°C). Carefully lower the donut into the oil.",
      "5. Fry for 2–3 minutes per side, turning occasionally, until the donut is golden brown and puffed.",
      "6. Remove the donut using a slotted spoon and drain excess oil on paper towels.",
      "7. Repeat with remaining dough, allowing oil to return to temperature between batches.",
      "8. Once cooled slightly, dust with powdered sugar or dip in glaze before serving.",
    ],
  },
  {
    name: "Tangyuan",
    img: "https://i.pinimg.com/736x/2f/1c/30/2f1c30fe4e13c95dead918fce0086f7e.jpg",
    alt: "Tangyuan (Glutinous Rice Balls)",
    equipment: [
      "Mixing Bowl",
      "Saucepan",
      "Wooden Spoon",
      "Measuring Cups",
      "Measuring Spoons",
    ],
    ingredients: [
      "1 cup glutinous rice flour",
      "1/2 cup warm water",
      "1/3 cup black sesame paste (or peanut paste)",
      "4 cups water",
      "Rock sugar or sugar to taste",
    ],
    instructions: [
      "1. Place the glutinous rice flour in a mixing bowl. Gradually add warm water while stirring until a smooth, pliable dough forms.",
      "2. Knead the dough lightly until there are no cracks, then cover with a damp cloth to prevent drying.",
      "3. Divide the dough into small pieces and flatten each piece into a disc.",
      "4. Place a small spoonful of sesame or peanut paste in the center of each disc.",
      "5. Carefully wrap the dough around the filling and roll between your palms to form a smooth ball.",
      "6. Bring a saucepan of water to a gentle boil over medium heat.",
      "7. Add the tangyuan and cook until they float to the surface, then continue cooking for 1–2 minutes.",
      "8. Add rock sugar or sugar to taste and stir until dissolved.",
      "9. Serve the tangyuan warm with some of the sweet soup.",
    ],
  },
  {
    name: "Bungeoppang",
    img: "https://i.pinimg.com/736x/5d/7f/d3/5d7fd3cc31985478f411537c8c204d77.jpg",
    alt: "Boong-eoh Ppang",
    equipment: [
      "Fish-Shaped Waffle Mold",
      "Mixing Bowls",
      "Whisk",
      "Measuring Cups",
      "Measuring Spoons",
      "Heat Source",
    ],
    ingredients: [
      "1 cup all-purpose flour",
      "1 tbsp sugar",
      "1 tsp baking powder",
      "1/4 tsp salt",
      "1 cup milk",
      "1 large egg",
      "1 tbsp melted butter",
      "Sweet red bean paste",
    ],
    instructions: [
      "1. Preheat the fish-shaped waffle mold according to the manufacturer’s instructions and lightly grease both sides.",
      "2. In a mixing bowl, whisk together the flour, sugar, baking powder, and salt until well combined.",
      "3. Add the milk, egg, and melted butter to the dry ingredients and whisk until a smooth batter forms with no lumps.",
      "4. Pour enough batter into the mold to fill it about halfway.",
      "5. Spoon a small amount of sweet red bean paste into the center of each fish mold cavity.",
      "6. Cover the filling with additional batter, being careful not to overfill.",
      "7. Close the mold and cook for several minutes until the pastry is golden brown and cooked through.",
      "8. Carefully open the mold, remove the pastries, and allow them to cool slightly before serving.",
    ],
  },
  {
    name: "French Macarons",
    img: "https://i.pinimg.com/736x/ab/c9/f2/abc9f2ed25ce015a77a61ce157c50969.jpg",
    alt: "French Macarons",
    equipment: [
      "Mixing Bowls",
      "Electric Mixer",
      "Sifter",
      "Spatula",
      "Piping Bag",
      "Round Piping Tip",
      "Baking Sheet",
      "Parchment Paper",
      "Oven",
    ],
    ingredients: [
      "1 cup powdered sugar",
      "3/4 cup almond flour, finely ground",
      "2 large egg whites, room temperature",
      "1/4 cup granulated sugar",
      "1/2 tsp vanilla extract",
      "Gel food coloring (optional)",
      "1/2 cup butter, softened (for filling)",
      "1 cup powdered sugar (for filling)",
      "1 tsp vanilla extract (for filling)",
    ],
    instructions: [
      "1. Line two baking sheets with parchment paper and prepare a piping bag fitted with a round tip.",
      "2. In a bowl, sift together the powdered sugar and almond flour. Discard any large almond pieces to ensure smooth shells.",
      "3. In a separate clean bowl, beat the egg whites on medium speed until foamy.",
      "4. Gradually add the granulated sugar while continuing to beat, then increase speed to high and whip until stiff, glossy peaks form.",
      "5. Add vanilla extract and gel food coloring (if using), mixing briefly until just combined.",
      "6. Gently fold the almond flour mixture into the egg whites in batches using a spatula. Fold carefully until the batter flows like lava and ribbons back into itself.",
      "7. Transfer the batter to the prepared piping bag.",
      "8. Pipe small, evenly sized circles onto the parchment-lined baking sheets, spacing them about 1 inch apart.",
      "9. Tap the baking sheets firmly on the counter several times to release air bubbles. Pop any visible bubbles with a toothpick.",
      "10. Let the piped macarons rest at room temperature for 30–60 minutes, or until the tops are dry to the touch.",
      "11. Preheat the oven to 300°F (150°C).",
      "12. Bake the macarons for 14–16 minutes, rotating the pan halfway through. The shells should have risen feet and feel set.",
      "13. Remove from the oven and allow the shells to cool completely before removing them from the parchment.",
      "14. To make the filling, beat the softened butter until creamy, then gradually add powdered sugar and vanilla extract until smooth.",
      "15. Pipe filling onto the flat side of one shell and sandwich with another shell of similar size.",
      "16. Refrigerate assembled macarons for at least 24 hours for best flavor and texture, then bring to room temperature before serving.",
    ],
  },
  {
    name: "Churros",
    img: "https://i.pinimg.com/736x/77/1c/08/771c08864ac2a174353143b74d702bd7.jpg",
    alt: "Churros",
    equipment: [
      "Mixing Bowls",
      "Electric Mixer",
      "Piping Bag",
      "Baking Sheet",
      "Parchment Paper",
      "Oven/Fryer",
    ],
    ingredients: [
      "1/4 cup caster/superfine sugar (for coating)",
      "2 tsp ground cinnamon (for coating)",
      "1 cup flour, plain/all purpose",
      "1 tsp baking powder",
      "Pinch of salt",
      "1 tbsp vegetable, canola/olive oil",
      "1 cup boiling water",
      "2 cups+ vegetable/canola oil (for frying)",
    ],
    instructions: [
      "1. Combine sugar and cinnamon in a shallow bowl, set aside.",
      "2. Mix flour, baking powder and salt in a bowl. Add oil and water and mix until just combined – it should be a thick, gummy batter, like a wet sticky dough, not thin and watery.",
      "3. Transfer dough into a piping bag with a 8mm / 1/3 inches star tip nozzle. Set aside while oil heats.",
      "4. Heat 5cm / 2 inches of oil over medium high in a small pot, wok or small but deep skillet (Note 3) to 170°C/340°F, or until it takes 20 seconds for a small cube of bread to turn golden.",
      "5. Pipe 15cm / 6 inches lengths of dough into the oil, snipping with scissors (snip close to oil surface to avoid splash). Do 3 to 4 per batch, makes 10 to 12 in total.",
      "6. Cook for 2-3 minutes or until golden and crisp, rolling occasionally.",
      "7. Remove onto paper towel lined plate to drain. Then roll in sugar. Serve hot with Chocolate Sauce.",
      "8. Place in a heatproof bowl and microwave in 30 second bursts, stirring in between, until smooth. Set aside for 5 minutes to cool and thicken slightly.",
    ],
  },
];

function inject(item, index) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-index="${index}">
      <img src="${item.img}" alt="${item.alt}" />
      <h2>${item.name}</h2>
    </div>`,
  );
}

document.addEventListener("DOMContentLoaded", () => {
  recipe.forEach(inject);
  enableModal();
});

function enableModal() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalName = document.getElementById("modalName");
  const modalEquipment = document.getElementById("modalEquipment");
  const modalIngredients = document.getElementById("modalIngredients");
  const modalInstruction = document.getElementById("modalInstruction");

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const index = card.dataset.index;
      const item = recipe[index];

      modalImg.src = item.img;
      modalName.textContent = item.name;
      modalEquipment.innerHTML = item.equipment
        .map((step) => `<p>${step}</p>`)
        .join("");
      modalIngredients.innerHTML = item.ingredients
        .map((step) => `<p>${step}</p>`)
        .join("");
      modalInstruction.innerHTML = item.instructions
        .map((step) => `<p>${step}</p>`)
        .join("");

      modal.classList.add("show");
    });
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
}


const uploadForm = document.querySelector(".uploadForm");

uploadForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const fileInput = uploadForm.querySelector("#fileUpload");
  const file = fileInput.files[0];
  if (!file) return alert("Please select an image");

  const newRecipes = {
    name: document.getElementById("uploadName").value,
    img: URL.createObjectURL(file),
    alt: document.getElementById("uploadName").value,
    equipment: document.getElementById("uploadEquipment").value.split(','),
    ingredients: document.getElementById("uploadIngredients").value.split(','),
    instructions: document.getElementById("uploadInstructions").value.split(','),
  };

  recipe.push(newRecipes);

  document.querySelector(".container").innerHTML = "";
  recipe.forEach(inject);
  enableModal();

  uploadForm.reset();
});


function setupSearch() {
  const form = document.querySelector("#search-form");
  const input = document.querySelector(".search-input2");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchTerm = input.value.trim().toLowerCase();

    const filteredRecipes = recipe.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    const container = document.querySelector(".container");
    container.innerHTML = "";

    filteredRecipes.forEach((item, index) => {
      inject(item, recipe.indexOf(item));
    });

    enableModal();
  });
}
setupSearch();
