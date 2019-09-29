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
    <h2 className="text-center">Our Menu</h2>
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
    <h2 className="menupage-links text-center" id="appetizers">
      Appetizers
    </h2>
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
    {/* -------appetizers-------------- */}
    <hr />
    <h2 className="menupage-links text-center" id="breakfast">
      Breakfast
    </h2>
    <MDBRow className="d-flex p-2 justify-content-center">
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                   
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
       
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                  
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
        </MDBRow>
        <MDBRow className="d-flex p-2 justify-content-center">
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
            <h2 className="card_title font-weight-bold">OMELETTES</h2>
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
              
                   
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
       
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
            <h2 className="card_title font-weight-bold">EGGS BENEDICT</h2>
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
<h2 className="card_title">PANCAKES & FRENCH TOAST</h2>
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
                  
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
        </MDBRow>

        
        <MDBRow className="d-flex p-2 justify-content-center">
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
            <h2 className="card_title">BREAKFAST SANDWICHES</h2>
              <br />
              <span className="float-right font-weight-bold">$3.99</span>
              <h6 className="menu-item">Any Style Eggs* </h6>
              <p className="menu-desc">
                {" "}
                Served on any choice of bread <br />
                Add cheese $1.00 | Add breakfast meat $1.00{" "}
              </p>
           
                   
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
       
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                  
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
        </MDBRow>



        <MDBRow className="d-flex p-2 justify-content-center">
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                   
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
       
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                  
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
        </MDBRow>
        <MDBRow className="d-flex p-2 justify-content-center">
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                   
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
       
    <div className="d-flex w-50 p-2 text-center">
    <MDBCol>
          <MDBCard>
            <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                  
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </div>
        </MDBRow>
    <MDBRow className="d-flex p-2 justify-content-center">
      <div className="d-flex w-100 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
            
           
            

              {/* <div class="card" style={{ width: "100%" }}>
                <img class="card-img-top" src={heroImage} alt="Card cap1" />
                <div class="card-body">
                  <p class="card-text">This is a for demo. Will not use</p>
                </div>
              </div> */}
    


             

        <div className="col-sm-6">
          <div className="card">
            <div className="card_image"></div>
            <div className="card_content">
              <h2 className="card_title">PANCAKES & FRENCH TOAST</h2>
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
              <br />
              <h2 className="card_title">COMFORT FOOD</h2>
              <br />
              <span className="float-right font-weight-bold">$6.99</span>
              <h6 className="menu-item">Cream Chipped Beef </h6>
              <p className="menu-desc"> Served on home fries OR toast</p>
              <span className="float-right font-weight-bold">$7.99</span>
              <h6 className="menu-item">Biscuits and Gravy </h6>
              <p className="menu-desc">Served with home fries</p>
              <br />
              <h2 className="card_title">BREAKFAST SIDES</h2>
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
              <h2 className="card_title">BREADS | CHEESES | VEGGIES | MEATS</h2>
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
                Bacon, Sausage, Pork Roll, Scrapple, Canadian Bacon, Hom,
                Chorizo
              </p>
              <br />
              <p className="warning">
                *Consuming raw or undercooked meats, poultry, seafood,
                shellfish, or eggs may increase your risk of foodbourne illness,
                especially if you have certain medical conditions.
              </p>
            </div>
          </div>
        </div>
     


            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBRow>
    <ScrollToTop showUnder={160}>
      <MDBIcon far icon="arrow-alt-circle-up" />
    </ScrollToTop>
  </Layout>
);

export default FullMenuPage;

