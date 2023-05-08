
const products = [
    {
        id:0,
        title:"Cabbage",
        isFruit:false,
    },
    {
        id:1,
        title:"Garlic",
        isFruit:false,
    },
    {
        id:2,
        title:"Apple",
        isFruit:true,
    },
    
]

    
 
const Test = () => {
    return (
        <div className="container">
          {/* <ul>
            {products.map((product,i) =>(
                <li key={i} style={{color: product.isFruit? 'magenta' :'darkgreen'}}>{product.title}</li>
            ))}
          </ul> */}
          <div>
            {products.map((item,i) =>
            <p key={i} style={``} style={{color:item.isFruit ? 'yellow' :"pink"}}>
                {item.title}
            </p>
            )}
          </div>
        </div>
    );
};

export default Test;