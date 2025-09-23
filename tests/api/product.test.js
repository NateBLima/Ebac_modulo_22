const pactum = require("pactum");
const { baseUrl } = require("../../config");

describe("Product API", () => {
  it("should add a new product", async () => {
    await pactum.spec()
      .post(baseUrl)
      .withHeaders("Content-Type", "application/json")
      .withGraphQLQuery(`
        mutation {
          addProduct(
            name: "Produto X",
            description: "Descrição do Produto X",
            price: 99.99,
            categories: ["Categoria Teste"]
          ) {
            name
            price
          }
        }
      `)
      .expectStatus(200)
      .expectJsonLike({
        data: {
          addProduct: {
            name: "Produto X",
            price: 99.99
          }
        }
      });
  });
});
