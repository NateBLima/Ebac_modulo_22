const pactum = require("pactum");
const { baseUrl } = require("../../config");

describe("Category API", () => {
  it("should add a new category", async () => {
    await pactum.spec()
      .post(baseUrl)
      .withHeaders("Content-Type", "application/json")
      .withGraphQLQuery(`
        mutation {
          addCategory(name: "Nova Categoria") {
            name
          }
        }
      `)
      .expectStatus(200)
      .expectJsonLike({
        data: {
          addCategory: {
            name: "Nova Categoria"
          }
        }
      });
  });
});
