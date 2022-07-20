function User()
 {
    let data="Anshu"
    let data2="Lappy"
    
    function apple()
    {
        alert("Function Called");
        
    }
    function apple2()
    {
        alert(data2);
        
    }
    return(
<div>
    <h1>Rats</h1>
    <h2>{data}</h2>
<h3>{data2 }</h3>
    <button onClick={apple}>Click me</button>
    <button onClick={()=>alert("Tried")}>Try me</button>
    <button onClick={()=>apple()}>Arrow</button>
    <button onClick={apple2}>Click me</button>

    </div>
    );
    
}
export default User;