import React from "react";
import SEO from "../components/seo";
import "../components/layout.css";
import Layout from "../components/layout";
import ScrollToTop from "react-scroll-up";
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBCardBody,
  MDBCardText
} from "mdbreact";

export const FullMenuPage = () => (
  <Layout pageInfo={{ pageName: "fullmenu" }}>
    <SEO title="Cafe Americana Kennett Square Menu" />
    <h2 className="menuHeader h1-responsive font-weight-bold text-center my-5">
      Our Menu
    </h2>

    <p className="small text-center">
      (Prices subject to change. *Consuming raw or undercooked meats, poultry,
      seafood, shellfish, or eggs may increase your risk of foodborne illness,
      specially if you have certain medical conditions.)
    </p>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link" href="#appetizers">
          Appetizers
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#breakfast">
          Breakfast
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#lunch">
          Lunch
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#dinner">
          Dinner
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#kids-menu">
          Kids Menu
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#specials">
          Specials
        </a>
      </li>
    </ul>
    {/* -------appetizers-------------- */}
    <hr />
    <h3 className="menupage-links text-center" id="appetizers">
      APPETIZERS
    </h3>
    <MDBRow className="d-flex p-2 justify-content-center">
      <div className="d-flex w-70 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <br />
              <span className="float-right font-weight-bold">$11.99</span>
              <h6 className="menu-item">American Nachos</h6>
              <p className="menu-desc">
                {" "}
                American nachos chili or chicken tinga{" "}
              </p>
              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Loaded Hummus</h6>
              <p className="menu-desc">
                {" "}
                Olives, tomato, and feta cheese served with bread{" "}
              </p>
              <span className="float-right font-weight-bold">$12.99</span>
              <h6 className="menu-item">Shrimp Avocado</h6>
              <p className="menu-desc">
                {" "}
                Sauteed shrimp with tomato and avocado on open faced toast (4
                pieces per order){" "}
              </p>
              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Spinach Queso Dip</h6>
              <p className="menu-desc">
                {" "}
                Olives, tomato, and feta cheese served with bread{" "}
              </p>
              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Loaded Hummus</h6>
              <p className="menu-desc">
                {" "}
                Olives, tomato, and feta cheese served with bread{" "}
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBRow>
    {/* -------breakfast-------------- */}
    <hr />
    <h3 className="menupage-links text-center" id="breakfast">
      BREAKFAST
    </h3>

    <MDBRow className="d-flex p-2 justify-content-center">
      <div className="d-flex w-50 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <h3 className="card_title font-weight-bold">OMELETTES</h3>
              <p className="small">
                (Served with home fries and toast or English muffin)
              </p>
              <span className="float-right font-weight-bold">$6.99</span>
              <h6 className="menu-item">Cheese</h6>
              <span className="float-right font-weight-bold">$8.50</span>
              <h6 className="menu-item">Meat and Cheese</h6>
              <p className="menu-desc"> Choose one meat and one cheese </p>
              <span className="float-right font-weight-bold">$8.50</span>
              <h6 className="menu-item">Veggie and Cheese</h6>
              <p className="menu-desc"> Choose two veggies and a cheese </p>
              <span className="float-right font-weight-bold">$9.50</span>
              <h6 className="menu-item">Western</h6>
              <p className="menu-desc"> Green peppers, onion, ham, cheese </p>
              <span className="float-right font-weight-bold">$9.50</span>
              <h6 className="menu-item">Build Your Own</h6>
              <p className="menu-desc">
                {" "}
                Choose as many as you like from cheese, meat, and veggies{" "}
              </p>
              <h3 className="card_title font-weight-bold">
                BREAKFAST SANDWICHES
              </h3>
              <br />
              <span className="float-right font-weight-bold">$3.99</span>
              <h6 className="menu-item">Any Style Eggs* </h6>
              <p className="menu-desc">
                {" "}
                Served on any choice of bread <br />
                Add cheese $1.00 | Add breakfast meat $1.00{" "}
              </p>
              <br />
              <h3 className="card_title font-weight-bold">COMFORT FOOD</h3>
              <br />
              <span className="float-right font-weight-bold">$6.99</span>
              <h6 className="menu-item">Cream Chipped Beef </h6>
              <p className="menu-desc"> Served on home fries OR toast</p>
              <span className="float-right font-weight-bold">$7.99</span>
              <h6 className="menu-item">Biscuits and Gravy </h6>
              <p className="menu-desc">Served with home fries</p>
              <br />
              <h3 className="card_title font-weight-bold">BREAKFAST SIDES</h3>
              <br />
              <span className="float-right font-weight-bold">$1.39</span>
              <h6 className="menu-item">One Egg</h6>
              <span className="float-right font-weight-bold">$1.89</span>
              <h6 className="menu-item">Home Fries</h6>

              <span className="float-right font-weight-bold">$1.49</span>
              <h6 className="menu-item">Toast or English muffin</h6>
              <p className="menu-desc"> White, Multi-grain, Rye </p>
              <span className="float-right font-weight-bold">$2.50</span>
              <h6 className="menu-item">Meats</h6>
              <p className="menu-desc">
                {" "}
                Bacon, Sausage, Pork Roll, Scrapple, Ham, Canadian Bacon{" "}
              </p>

              <h6 className="menu-item">Oatmeal</h6>
              <p className="menu-desc"> Bowl $3.99 | Cup $2.99</p>
              <h6 className="menu-item">Grits</h6>
              <p className="menu-desc"> Bowl $3.99 | Cup $2.99</p>
              <h6 className="menu-item">Fresh Fruit</h6>
              <p className="menu-desc"> Bowl $6.99 | Cup $4.99</p>
              <p className="menu-desc">
                Substitute french fries with home fries $1.00 or Cup of fruit
                $2.99
              </p>
              <br />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>

      <div className="d-flex w-50 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <h3 className="card_title font-weight-bold">EGGS BENEDICT</h3>
              <p className="small">
                (Served on English muffin with home fries)
              </p>
              <span className="float-right font-weight-bold">$8.99</span>
              <h6 className="menu-item">Classic</h6>
              <p className="menu-desc">
                {" "}
                Poached egg*, Canadian bacon, hollandaise sauce
              </p>
              <span className="float-right font-weight-bold">$10.99</span>
              <h6 className="menu-item">California</h6>
              <p className="menu-desc"> Avocado, tomato, hollandaise sauce</p>
              <span className="float-right font-weight-bold">$10.99</span>
              <h6 className="menu-item">Venezuela</h6>
              <p className="menu-desc">
                {" "}
                Aropo, pulled pork, avocado, hollandaise sauce{" "}
              </p>
              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Florentine</h6>
              <p className="menu-desc"> Tomato, spinach, hollandaise sauce </p>
              <h3 className="card_title font-weight-bold">
                PANCAKES & FRENCH TOAST
              </h3>
              <br />

              <h6 className="menu-item">Pancakes</h6>
              <p className="menu-desc">
                {" "}
                Served with butter and powdered sugar <br /> Full stack (3)
                $5.99 | Short stack (2) $4.99 | 1 pancake $3.50{" "}
              </p>
              <h6 className="menu-item">Fancy Pancakes</h6>
              <p className="menu-desc">
                {" "}
                Add any of the following: Bananas, Blueberries, Straw­berries,
                Whipped Cream, Nutello, Peanut Butter, Caramel, Chocolate Chips
                <br /> <bold>Regular: </bold>Full stack (3) $7.99 | Short stack
                (2) $6.99 | 1 pancake $5.00{" "}
              </p>
              <h6 className="menu-item">Fancy French Toast</h6>
              <p className="menu-desc">
                {" "}
                Add any of the following: Bananas, Blueberries, Straw­berries,
                Whipped Cream, Nutello, Peanut Butter, Caramel, Chocolate Chips
                <br />
                Slices (2) $6.99 | Slices (3) $7.99{" "}
              </p>
              <p className="menu-desc">
                Add breakfast meat to pancakes or french toast $2.25
              </p>
              <span className="float-right font-weight-bold">$5.99</span>
              <h6 className="menu-item">Belgian Waffles</h6>
              <p className="menu-desc">
                {" "}
                Served with butter and powdered sugar{" "}
              </p>
              <span className="float-right font-weight-bold">$6.99</span>
              <h6 className="menu-item">Fancy Belgian Waffles</h6>
              <p className="menu-desc">
                {" "}
                Add any of the following: Bananas, Blueberries, Straw­berries,
                Whipped Cream, Nutello, Peanut Butter, Caramel, Chocolate Chips
              </p>
              <h3 className="card_title font-weight-bold">
                BREADS | CHEESES | VEGGIES | MEATS
              </h3>
              <br />

              <h6 className="menu-item">Breads</h6>
              <p className="menu-desc"> White, Multi-grain, Rye</p>
              <h6 className="menu-item">Cheeses</h6>
              <p className="menu-desc">
                {" "}
                American, Provolone, Swiss, Cheddar, Pepper Jack or Feta
              </p>
              <h6 className="menu-item">Veggies</h6>
              <p className="menu-desc">
                {" "}
                Onion, Green Pepper, Tomato, Mushroom, Spinach, Broccoli
              </p>
              <h6 className="menu-item">Meats</h6>
              <p className="menu-desc">
                Bacon, Sausage, Pork Roll, Scrapple, Canadian Bacon, Ham,
                Chorizo
              </p>
              <br />
              <p className="warning small font-weight-bold">
                *Consuming raw or undercooked meats, poultry, seafood,
                shellfish, or eggs may increase your risk of foodbourne illness,
                especially if you have certain medical conditions.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBRow>

    {/* -------lunch-------------- */}
    <hr />
    <h3 className="menupage-links text-center" id="lunch">
      LUNCH
    </h3>

    <MDBRow className="d-flex p-2 justify-content-center">
      <div className="d-flex w-50 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <h3 className="card_title font-weight-bold">SOUP & SALADS</h3>

              <p className="small">
                Dressings: Avocado, Blue Cheese, Thousand Island, Italian,
                French, Honey Mustard, Ranch, Balsamic Vinaigrette, Sesame
                Ginger, Oil & Vinegar
                <br />
                Add: Grilled Chicken $2.00 | Grilled Shrimp $5.00 Scoop of Tuna
                Salad $3.00 | Scoop of Chicken Salad $2.00
              </p>
              <span className="float-right font-weight-bold">$8.45</span>
              <h6 className="menu-item">Garden Salad </h6>
              <p className="menu-desc">
                Mixed greens, tomatoes, onions, cucumber, carrots and onions
              </p>
              <span className="float-right font-weight-bold">$4.45</span>
              <h6 className="menu-item">House Salad </h6>
              <p className="menu-desc">A smaller version of our garden salad</p>
              <span className="float-right font-weight-bold">$10.45</span>
              <h6 className="menu-item">Chef Salad </h6>
              <p className="menu-desc">
                Mixed greens, hard-boiled egg, ham, turkey, Swiss cheese,
                provolone cheese, tomato and onion
              </p>
              <span className="float-right font-weight-bold">$12.45</span>
              <h6 className="menu-item">Avocado Salad </h6>
              <p className="menu-desc">
                Mixed greens, grilled chicken, avocado slices, bacon, egg,
                cucumber, carrots and house mode avocado dressing
              </p>
              <span className="float-right font-weight-bold">$9.45</span>
              <h6 className="menu-item">Sweet Spinach Salad </h6>
              <p className="menu-desc">
                Spinach, bacon, dried cranberry, apples, almonds and house mode
                honey balsamic dressing
              </p>
              <span className="float-right font-weight-bold">$14.45</span>
              <h6 className="menu-item">Snow Pea Shrimp Salad </h6>
              <p className="menu-desc">
                Mixed greens, sauteed shrimp, snow peas, carrots, shredded
                cabbage and house made sesame ginger dressing
              </p>

              <h6 className="menu-item">Soup of the Day </h6>
              <p className="menu-desc">Cup $4.99 | Bowl $5.99</p>
              <span className="float-right font-weight-bold">$5.25</span>
              <h6 className="menu-item">Onion Soup</h6>
              <br />
              <h3 className="card_title font-weight-bold">
                TACOS | QUESADILLAS | AREPAS
              </h3>
              <br />
              <h4 className="card_title font-weight-bold">TACOS:</h4>
              <p className="small">
                Three Street style locos served with shredded cabbage, Pico de
                Gallo, cotijo cheese and siracha oioli Served on your choice of
                corn or flour tortillas
              </p>
              <span className="float-right font-weight-bold">$7.99</span>
              <h6 className="menu-item">Chicken or Shredded Pork Tacos</h6>

              <span className="float-right font-weight-bold">$12.99</span>
              <h6 className="menu-item">Shrimp Tacos</h6>

              <span className="float-right font-weight-bold">$11.99</span>
              <h6 className="menu-item">Fish Tacos</h6>

              <span className="float-right font-weight-bold">$6.99</span>
              <h6 className="menu-item">Veggie Tacos </h6>

              <br />
              <h4 className="card_title font-weight-bold">QUESADILLAS:</h4>
              <p className="small">
                Tomato, onion and cheese on your choice of plain, spinach or
                tomato tortilla. Served with pico de gallo and sour cream
              </p>
              <p>Add a side Guacamole $2.00</p>
              <span className="float-right font-weight-bold">$7.99</span>
              <h6 className="menu-item">Cheese </h6>

              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Chicken or Shredded Pork </h6>

              <span className="float-right font-weight-bold">$8.99</span>
              <h6 className="menu-item">Veggie</h6>

              <span className="float-right font-weight-bold">$13.99</span>
              <h6 className="menu-item">Shrimp</h6>

              <br />
              <h4 className="card_title font-weight-bold">AREPAS:</h4>

              <p className="small">
                A Venezuelan style corn polly that can be fried or grilled•• and
                filled with any combination of ingredients. We suggest the
                following:
              </p>
              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Chicken Salad & Avocado </h6>

              <span className="float-right font-weight-bold">$8.99</span>
              <h6 className="menu-item">Shredded Pork & Cheese </h6>

              <span className="float-right font-weight-bold">$7.99</span>
              <h6 className="menu-item">Eggs, Cheese & Pico de Gallo</h6>

              <span className="float-right font-weight-bold">$7.99</span>
              <h6 className="menu-item">Hot Ham & Cheese </h6>

              <span className="float-right font-weight-bold">$8.99</span>
              <h6 className="menu-item">Shredded Beef & Cheese </h6>

              <span className="float-right font-weight-bold">$12.99</span>
              <h6 className="menu-item">Shrimp & Cheese</h6>
              <br />
              <p className="small">
                {" "}
                •• Please note that grilling your arepa will take on extra 15-20
                minutes for your order to be completed. Thank you for your
                patience.
              </p>
              <br />
              <h3 className="card_title font-weight-bold">WRAPS</h3>
              <p className="small">
                (Your choice of plain, spinach or tomato wrap. Served with
                chips. Substitute Fries or Onion Rings add $1.00)
              </p>
              <span className="float-right font-weight-bold">$9.45</span>
              <h6 className="menu-item">Caprese</h6>
              <p className="menu-desc">
                {" "}
                Grilled chicken, spinach, mozzarella cheese and honey balsamic
                dressing
              </p>

              <span className="float-right font-weight-bold">$9.45</span>
              <h6 className="menu-item">Buffalo Chicken</h6>
              <p className="menu-desc">
                Breaded chicken with hot sauce, lettuce, tomato, cheese and
                chipotle ranch
              </p>
              <span className="float-right font-weight-bold">$9.45</span>
              <h6 className="menu-item">Deli</h6>
              <p className="menu-desc">
                Your choice of deli meat and cheese with lettuce, tomato and
                onion
              </p>
              <span className="float-right font-weight-bold">$8.99</span>
              <h6 className="menu-item">Veggie</h6>
              <p className="menu-desc"></p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>

      <div className="d-flex w-50 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <h3 className="card_title font-weight-bold">FROM THE GRILL</h3>
              <p className="small">
                (Served with chips. Substitute Fries or Onion Rings add $1.00)
              </p>
              <span className="float-right font-weight-bold">$9.45</span>
              <h6 className="menu-item">Grilled Chicken Breast Sandwich</h6>
              <p className="menu-desc">
                {" "}
                Served with lettuce, tomato and raw onion on a brioche bun{" "}
                <br /> Add cheese $1.00 | Add Bacon $1.00{" "}
              </p>

              <span className="float-right font-weight-bold">$7.99</span>
              <h6 className="menu-item">Grilled Portobello Sandwich</h6>
              <p className="menu-desc">
                Served with lettuce, tomato and raw onion on a brioche bun
              </p>
              <span className="float-right font-weight-bold">$4.45</span>
              <h6 className="menu-item">Grilled Cheese Sandwich</h6>
              <p className="menu-desc">On your choice of bread</p>
              <span className="float-right font-weight-bold">$6.45</span>
              <h6 className="menu-item">Grilled Cheese with Ham or Bacon</h6>
              <p className="menu-desc">On your choice of bread</p>
              <span className="float-right font-weight-bold">$9.25</span>
              <h6 className="menu-item">Hot Roast Beef</h6>
              <p className="menu-desc">
                Dipped in au jus, served with provolone on a brioche roll
              </p>
              <span className="float-right font-weight-bold">$9.25</span>
              <h6 className="menu-item">Reuben</h6>
              <p className="menu-desc">
                Corned beef, Swiss cheese, Thousand Island dressing and
                sauerkraut on rye
              </p>
              <span className="float-right font-weight-bold">$9.45</span>
              <h6 className="menu-item">Rachael </h6>
              <p className="menu-desc">
                Grilled turkey, Swiss cheese, Thousand Island dressing and
                coleslaw on rye
              </p>
              <span className="float-right font-weight-bold">$9.45</span>
              <h6 className="menu-item">Chicken Cheesesteak</h6>
              <p className="menu-desc">
                {" "}
                Extras: Add Veggies $.75 each | Meat $1.00 | Dressing $.50
              </p>
              <br />
              <h3 className="card_title font-weight-bold">COLD SANDWICHES</h3>
              <p className="small">
                (Served with chips. Substitute Fries or Onion Rings add $1.00)
              </p>
              <span className="float-right font-weight-bold">$8.25</span>
              <h6 className="menu-item">Deli Sandwich</h6>
              <p className="menu-desc">
                {" "}
                Served with lettuce, tomato and onion Choose Roast Beef, Turkey,
                Ham, Corned Beef, Chicken Salad, Egg Salad, or Tuna Salad as
                well as bread selection.
                <br /> Add cheese $1.00{" "}
              </p>

              <span className="float-right font-weight-bold">$8.49</span>
              <h6 className="menu-item">Classic BLT</h6>
              <p className="menu-desc">Served on toast</p>
              <span className="float-right font-weight-bold">$9.25</span>
              <h6 className="menu-item">Triple Decker Club Sandwich </h6>
              <p className="menu-desc">
                Bacon, lettuce, tomato and mayo with your choice of Roast Beef,
                Turkey, Ham, Corned Beef, Chicken Salad, Egg Salad, or Tuna
                Salad on toast
                <br /> Add cheese $1.00
              </p>
              <span className="float-right font-weight-bold">$9.25</span>
              <h6 className="menu-item">Corned Beef Special</h6>
              <p className="menu-desc">
                Corned beef, Swiss cheese, coleslaw and Thousand Island dressing
                on rye bread
              </p>
              <br />
              <h3 className="card_title font-weight-bold">
                HANDMADE ANGUS BEEF BURGERS*
              </h3>
              <p className="small">
                (All burgers are cooked to order and served with lettuce, tomato
                and row onion on a brioche bun. Served with chips Substitute
                Fries or Onion Rings add $1.00)
              </p>
              <span className="float-right font-weight-bold">$9.45</span>
              <h6 className="menu-item">Hamburger</h6>
              <p className="menu-desc"> Handmade Angus beef burger</p>

              <span className="float-right font-weight-bold">$10.45</span>
              <h6 className="menu-item">Classic Cheeseburger</h6>
              <p className="menu-desc">Melted white American cheese</p>
              <span className="float-right font-weight-bold">$11.45</span>
              <h6 className="menu-item">Bacon Cheeseburger</h6>
              <p className="menu-desc">
                Melted white American cheese and peppered bacon
              </p>
              <span className="float-right font-weight-bold">$14.99</span>
              <h6 className="menu-item">Double Bacon Cheeseburger</h6>
              <p className="menu-desc">
                Two half pound patties, four slices bacon, four slices melted
                white American cheese
              </p>
              <span className="float-right font-weight-bold">$12.99</span>
              <h6 className="menu-item">Black & Blue Burger</h6>
              <p className="menu-desc">
                {" "}
                Peppered bacon, blue cheese crumbles melted white American
                cheese, blue cheese sauce, and garlic creme
              </p>
              <span className="float-right font-weight-bold">$11.99</span>
              <h6 className="menu-item">'Cue Bacon Burger</h6>
              <p className="menu-desc">
                Melted white American cheese, peppered bacon, crispy onion
                tanglers and sweet n'tangy BBQ sauce
              </p>
              <span className="float-right font-weight-bold">$14.99</span>
              <h6 className="menu-item">Prime Burger</h6>
              <p className="menu-desc">
                Melted white American cheese, shoved prime rib, roasted
                mushrooms, sauteed onions, gravy, crispy onion tanglers and
                garlic creme
              </p>
              <span className="float-right font-weight-bold">$11.45</span>
              <h6 className="menu-item">Sauteed M&O Turkey Burger </h6>
              <p className="menu-desc">
                All white meat ground turkey, salted mushroom and onion with
                melted American cheese
              </p>
              <span className="float-right font-weight-bold">$11.45</span>
              <h6 className="menu-item">The Skinny Burger </h6>
              <p className="menu-desc">Vegetarian</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBRow>
    {/* /*--------DInner---------------*/}
    <hr />
    <h3 className="menupage-links text-center" id="dinner">
      DINNER
    </h3>
    <MDBRow className="d-flex p-2 justify-content-center">
      <div className="d-flex w-50 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <h3 className="card_title font-weight-bold">ENTREES</h3>
              <p className="small">(Served with a choice of one side)</p>
              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Stuffed Portobello</h6>
              <p className="menu-desc">
                {" "}
                Grilled Portobello mushroom stuffed with spinach and cheese.
                Served with one side
              </p>

              <span className="float-right font-weight-bold">$13.45</span>
              <h6 className="menu-item">Meatloaf </h6>
              <p className="menu-desc">
                Slices of homemade meatloaf. Served with one side{" "}
              </p>
              <span className="float-right font-weight-bold">$14.99</span>
              <h6 className="menu-item">Shrimp Scampi</h6>
              <p className="menu-desc">
                Souteed shrimp tossed in fettuccine with tomato and garlic wine
                sauce. Served with garlic bread
              </p>
              <span className="float-right font-weight-bold">$13.99</span>
              <h6 className="menu-item">Hawaiian BBQ Chicken</h6>
              <p className="menu-desc">
                BBQ chicken breast wrapped in bacon and topped with grilled
                pineapple. Served with one side
              </p>
              <span className="float-right font-weight-bold">$10.99</span>
              <h6 className="menu-item">Empanadas</h6>
              <p className="menu-desc">
                {" "}
                Flour empanadas served with one side. Choose Shredded Chicken
                and Cheese or Shredded Beef and Cheese
              </p>

              <span className="float-right font-weight-bold">$13.99</span>
              <h6 className="menu-item">Chicken Marsala</h6>
              <p className="menu-desc">
                Golden pan fried chicken and mushrooms in a rich morsolo wine
                sauce
              </p>
              <span className="float-right font-weight-bold">$12.99</span>
              <h6 className="menu-item">Pasta Carbonara</h6>
              <p className="menu-desc">
                Spaghetti full of bacon flavor and smothered in a cheesy egg
                sauce
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>

      <div className="d-flex w-50 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <br />
              <h3 className="card_title font-weight-bold">STEAKS</h3>
              <p className="small">(Served with a choice of two sides)</p>
              <span className="float-right font-weight-bold">$18.99</span>
              <h6 className="menu-item">Angus Choice NY Strip Steak 10 oz</h6>

              <span className="float-right font-weight-bold">$20.99</span>
              <h6 className="menu-item">Angus Choice Beef Filet 8 oz</h6>

              <span className="float-right font-weight-bold">$17.99</span>
              <h6 className="menu-item">Lamb</h6>

              <span className="float-right font-weight-bold">$16.99</span>
              <h6 className="menu-item">Yellowfin Saku Tuna Steak</h6>
              <p className="menu-desc">Grilled to your preferred temperature</p>
              <span className="float-right font-weight-bold">$17.99</span>
              <h6 className="menu-item">Charbroiled North Atlantic Salmon</h6>
              <p className="menu-desc">
                {" "}
                Served with grilled mushroom risotto and asparagus
              </p>
              <h3 className="card_title font-weight-bold">SIDES</h3>
              <br />
              <span className="float-right font-weight-bold">$3.50</span>
              <h6 className="menu-item">Rice</h6>

              <span className="float-right font-weight-bold">$3.50</span>
              <h6 className="menu-item">Grilled Veggies</h6>

              <span className="float-right font-weight-bold">$3.50</span>
              <h6 className="menu-item">Small Salad</h6>

              <span className="float-right font-weight-bold">$2.00</span>
              <h6 className="menu-item">Garlic Bread</h6>

              <span className="float-right font-weight-bold">$3.50</span>
              <h6 className="menu-item">Mashed Potatoes</h6>

              <span className="float-right font-weight-bold">$7.45</span>
              <h6 className="menu-item">Chicken Fingers</h6>
              <span className="float-right font-weight-bold">$2.99</span>
              <h6 className="menu-item">French Fries or Onion Rings</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBRow>

    {/* /*--------kids menu----------------*/}
    <hr />
    <h3 className="menupage-links text-center" id="kids-menu">
      KIDS MENU
    </h3>
    <MDBRow className="d-flex p-2 justify-content-center">
      <div className="d-flex w-50 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <h3 className="card_title font-weight-bold">BREAKFAST</h3>
              <br />
              <span className="float-right font-weight-bold">$3.50</span>
              <h6 className="menu-item">Silver Dollar Pancakes (4)</h6>
              <span className="float-right font-weight-bold">$5.50</span>
              <h6 className="menu-item">Fancy Silver Dollar Pancakes (4)</h6>
              <p className="menu-desc">
                {" "}
                Add any of the following: Bananas, Blueberries, Strawberries,
                Whipped Cream, Nutello, Peanut Butter, Caramel, Chocolate Chips
              </p>
              <span className="float-right font-weight-bold">$3.50</span>
              <h6 className="menu-item">One Egg</h6>
              <p className="menu-desc"> With home fries and toast</p>
              <span className="float-right font-weight-bold">$1.00</span>
              <h6 className="menu-item">Kids Side Meat</h6>
              <span className="float-right font-weight-bold">$3.99</span>
              <h6 className="menu-item">Cereal</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>

      <div className="d-flex w-50 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <br />
              <h3 className="card_title font-weight-bold">LUNCH</h3>
              <br />
              <span className="float-right font-weight-bold">$4.50</span>
              <h6 className="menu-item">Grilled Cheese</h6>
              <span className="float-right font-weight-bold">$4.50</span>
              <h6 className="menu-item">Hot Dog</h6>

              <span className="float-right font-weight-bold">$5.50</span>
              <h6 className="menu-item">Chicken Fingers</h6>
              <span className="float-right font-weight-bold">$5.50</span>
              <h6 className="menu-item">Mac & Cheese</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBRow>

    <ScrollToTop showUnder={160}>
      <MDBIcon far icon="arrow-alt-circle-up" />
    </ScrollToTop>

    {/* /*--------kids menu----------------*/}
    <hr />
    <h3 className="menupage-links text-center" id="specials">
      SPECIALS
    </h3>
    <div className="d-flex w-100 p-2 text-center">
      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            {/* <span className="float-right font-weight-bold">$0.00</span>
            <h6 className="menu-item">Current Special Here</h6>
            <p className="menu-desc">Grilled to your preferred temperature</p> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  </Layout>
);

export default FullMenuPage;
