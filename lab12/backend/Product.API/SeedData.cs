using Product.API.Models;

namespace Product.API;

public class SeedData
{
    public static async Task SeedUserAsync(ApplicationContext context)
    {
        var products = new Models.Product[]
        {
            new Models.Product
            {
                Name = "Американо",
                Price = 0,
                Img = "https://img5.goodfon.ru/original/2048x2048/c/94/kofe-napitok-kruzhka-kniga-nastroenie.jpg",
                Count = 0,
            },
            new Models.Product
            {
                Name = "Капучино",
                Price = 0,
                Img = "https://pm1.narvii.com/7623/f00e7c2f170552d69864f0a031aaa0b7c7ad1c7ar1-736-731v2_hq.jpg",
                Count = 0,
            },
            new Models.Product
            {
                Name = "Латте",
                Price = 0,
                Img = "https://i.pinimg.com/originals/0e/b0/61/0eb0616936c803f3a84b06c624631b6b.jpg",
                Count = 0,
            }
        };

        if (!context.Products.Any())
        {
            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }
}