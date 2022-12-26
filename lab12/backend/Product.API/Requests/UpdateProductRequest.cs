namespace Product.API.Requests;

public class UpdateProductRequest
{
    public string Name { get; set; }
    
    public int Price { get; set; }
    
    public string Img { get; set; }
    
    public int Count { get; set; }
}