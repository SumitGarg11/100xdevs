function App() {
  return (
    <>
      {/* <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "red" }}>Hii </div>
        <div style={{ backgroundColor: "yellow" }}>Hello </div>
        <div style={{ backgroundColor: "green" }}>sir </div>
        <div style={{ backgroundColor: "red" }}>welcome </div>
      </div> */}

      {/* <div className="grid grid-cols-3">
        <div className="bg-red-500">HII</div>
        <div className="bg-yellow-500">Hello</div>
        <div className="bg-green-500">sir</div>
        <div className="bg-red-500">welcome</div>
      </div> */}
      {/* <div className="grid grid-col-10">
        <div className="bg-red-500 col-span-4">Hii</div>
        <div className="bg-yellow-500 col-span-4">Hello</div>
        <div className="bg-green-500 col-span-2">sir</div>
      </div> */}

      {/* <div className="bg-red-500 md:bg-blue-500 ">HII</div>  */}
      {/* while screen size greater or equal to 768px that is size is md 
      so color changes red to blue ,less than 768px color is red */}

      <div className=" grid grid-cols-1 md:grid-cols-3 ">
        <div className="bg-red-500  ">HII</div>
        <div className="bg-yellow-500 ">Hello</div>
        <div className="bg-green-500 ">sir</div>
      </div>
    </>
  );
}

export default App;
