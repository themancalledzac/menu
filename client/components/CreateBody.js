import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import AddItem from "./AddItem";
import { Grid } from "@material-ui/core";
import fakeBurgerData from "../src/fakeBurgerData";

export default function CreateBody() {
  const BodyStyle = styled(Paper)`
    /* width: 90%; */
    /* border: 1px solid black; */
  `;
  return (
    <BodyStyle>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <h1>Ingredients available</h1>
          <h4>
            Choose what ya'll want. At the very bottom would be an 'add to cart'
            button, but would be greyed out until the minimum requirements are
            selected.... either that, or the burger starts as a plain style
            burger, and is orderable from the beginning... but only comes with
            the initial prompts(beef protein and a bun?)
          </h4>
          <p>
            A couple of rules thus far. We need to split up the ingredientData
            into 3 or more separate portions. First we look at the protein. Once
            separated, we can have a special rule for this group that when one
            is selected, the others are greyed out. It will still let you select
            another, but it will deselect the previous selection.
          </p>
          <p>
            We should decide whether to put cheese on its own section or not.
          </p>
          <p>
            ALSO! Very important. we should try and get this so that each
            section, on selection, could minimize, in an acordian style menu.
            that way more is visible when in mobile view. So perhaps on opening,
            PROTEIN_STATE is set to true, but all other topping menus are set to
            false and are closed. When protein is selected, it will set protein
            to false, setting the next menu's state to be true.
          </p>
          <p>
            We should have a 'double the meat' button? some sort of option since
            some people like a double. would have to be accessible outside the
            menu, if we stick with the acordian style.
          </p>
          <p>
            We should have items greyed out, and unclickable if they are out of
            stock. maybe even a line through them?
          </p>
          <p>
            Do we want checkboxes for each item selected? With this we could
            still click the entire box, but the checkmark would be located on
            the far right next to the price. We could also have each item
            selected be sort of 'indented', an inner drop shadow.
          </p>
          <p>
            Styling should be for mobile: full width. will need to remove all
            css global styling
          </p>
          <p>
            Description section could go away, it could also be a link to a pop
            out modul that has a little paragraph of where we source that item,
            maybe what season it's in, or perhaps calories of that item.
            depending on how in depth, or what our client would want.
          </p>
        </Grid>
        <Grid item xs={12}>
          {fakeBurgerData.map(
            ({ name, price, description, stock, vegitarian }) => (
              <Grid key={name} item xs={12}>
                <AddItem
                  key={name}
                  name={name}
                  price={price}
                  description={description}
                  stock={stock}
                  vegitarian={vegitarian}
                />
              </Grid>
            )
          )}
        </Grid>
      </Grid>
      <hr></hr>
    </BodyStyle>
  );
}
