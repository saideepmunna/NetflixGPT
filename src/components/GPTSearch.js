const GPTSearch = () => {
  return (
    <div>
      <div className="bg-black w-full h-screen">
        <div className="pl-10 pt-20">
          <form onSubmit={(e)=>{
            e.preventDefault()
          }}>
          <input type="text" placeholder="Suggest me some funny bollywod movies" className="w-4/12 p-2 mx-2 rounded-sm"/>
          <button className="text-white bg-red-600 px-3 py-2 rounded-sm">Search</button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
