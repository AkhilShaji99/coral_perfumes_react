import { useNavigate } from "react-router-dom";

function SearchResult({ setResult,result}) {
  const navigate = useNavigate();
  const closeModal = ()=>{
    // setResults([])
    setResult([])
  }
  return (
    <>
      <div class="row"  style={{"position":"fixed" ,"z-index":"99","width":"1000px","z-index": 1 }}>
        <div class="col">
          {result.data?.length > 0 && (
            <div className="list-group" style={{ display: "block" }}>
              {result?.data?.map((result, index) => (
                <a
                  key={1}
                  className="list-group-item list-group-item-action"
                    onClick={() => {
                      closeModal();
                      navigate("/" + result.link);
                      // setQuery(result);
                    }}
                >
                  {result.title} {result.count}
                </a>
              ))}
            </div>
          )}
        </div>
        <div class="col">
        {result.products?.length > 0 && (
           <div className="list-group" style={{ display: "block" }}>
           {result?.products?.map((result, index) => (
             <a
               key={1}
               className="list-group-item list-group-item-action"
               //   onClick={() => {
               //     setQuery(result);
               //     setResults([]);
               //   }}
             >
               {result.title}
             </a>
           ))}
         </div>
          
            )}
        </div>
      </div>
    </>
  );
}
export default SearchResult;
