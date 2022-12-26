namespace Product.API.Requests;

public class CreateProductRequest
{
    public string Name { get; set; }
    
    public int Price { get; set; }
    
    public string Img { get; set; }
    
    public int Count { get; set; }
}