const HomePage = () => {
  return (
    <div className="w-screen h-screen m-0 bg-[#fcc757]">
      {/* navbar section */}
      <div className="fixed bg-white rounded-bl-xl flex justify-center items-center px-5 rounded-tl-xl right-0 h-[100vh] py-4">
        <ul>
          <li className="list_items">Home</li>
          <li className="list_items">Join</li>
          <li className="list_items">Profile</li>
          <li className="list_items">Report</li>
          <li className="list_items">Future Updates</li>
        </ul>
      </div>
      <div className="absolute top-[50%] w-[60%] text-white  flex flex-col justify-center items-center left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="font-bold m-0 leading-10 text-black text-[6rem]">
          Welcome to
        </h1>
        <h1 className="bold_it text-white text-[12rem]">TransitTrail</h1>
        <h1 className="text-white text-[3rem]">
          You enjoy the moment while we handle the queries.
        </h1>
        <button className="bg-white border-2 border-b-8 text-3xl font-bold p-6 px-[14rem] mt-10 border-black rounded-xl text-black">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default HomePage;
