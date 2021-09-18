import { toppings, proteins, cheeses, condiments } from "./data";

export async function insertSeedData(ks) {
  // Keystone API changed, so we need to check for both versions to get keystone
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;
  const { mongoose } = adapter;

  console.log(`🌱 Inserting Seed Data: ${toppings.length} Toppings`);
  for (const topping of toppings) {
    console.log(`  🛍️ Adding Topping: ${topping.name}`);
    await mongoose.model("Topping").create(topping);
  }
  console.log(`🌱 Inserting Seed Data: ${proteins.length} Proteins`);
  // const { mongoose } = adapter;
  for (const protein of proteins) {
    console.log(`  🛍️ Adding Protein: ${protein.name}`);
    await mongoose.model("Protein").create(protein);
  }
  console.log(`🌱 Inserting Seed Data: ${cheeses.length} Cheese`);
  // const { mongoose } = adapter;
  for (const cheese of cheeses) {
    console.log(`  🛍️ Adding Cheese: ${cheese.name}`);
    await mongoose.model("Cheese").create(cheese);
  }
  console.log(`🌱 Inserting Seed Data: ${condiments.length} Condiments`);
  // const { mongoose } = adapter;
  for (const condiment of condiments) {
    console.log(`  🛍️ Adding Condiments: ${condiment.name}`);
    await mongoose.model("condiments").create(condiment);
  }
  // console.log(`✅ Seed Data Inserted: ${condiment.length} Condiments`);
  console.log("👋 Please start the process with `yarn dev` or `npm run dev`");
  process.exit();
}
