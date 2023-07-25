import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Info = () => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [messageShow, setMessageShow] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");

  const submitHandler = (message) => {
    if (message.length > 0) {
      document.cookie = `${count}=${message}`;
      setCount((prev) => prev + 1);
      toast.success("message submit successfully");
    }
  };

  const searchHandler = (searchMessage) => {
    const cookieData = document?.cookie?.split(";");

    let messageCollectObj = [];

    for (let i = 0; i < cookieData.length; i++) {
      let actualMessage = cookieData[i].split("=");
      if (actualMessage[1] === searchMessage) {
        messageCollectObj.push(searchMessage);
      }
    }
    setMessageShow(messageCollectObj);
  };

  const clearMessageHandler = () => {
    const cookieData = document?.cookie?.split(";");

    for (let i = 0; i < cookieData.length; i++) {
      let actualMessage = cookieData[i].split("=");
      document.cookie = `${actualMessage[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
    setMessageShow([]);
    toast.success("message clear successfully");
  };

  return (
    <div className="text-center flex flex-col h-screen">
      <div className="mt-16">
        <label htmlFor="" className="font-bold">
          Submit Text Message :{" "}
        </label>
        <input
          type="text"
          placeholder="text message"
          className="border border-black pl-2 rounded-sm ml-2"
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button
          className="border border-black mt-3 mr-10 rounded-md p-1 bg-blue-200 text-black"
          onClick={() => submitHandler(message)}
        >
          Submit
        </button>
      </div>
      <div className="mt-6 mr-5">
        <label htmlFor="" className="font-bold">
          Search Text Message
        </label>
        <input
          type="text"
          placeholder="text message"
          className="border border-black pl-2 rounded-sm ml-2"
          onChange={(e) => setSearchMessage(e.target.value)}
        />
        <br />
        <button
          className="border border-black mt-3 mr-10 rounded-md p-1 bg-blue-200 text-black"
          onClick={() => searchHandler(searchMessage)}
        >
          Search
        </button>
      </div>
      <div>
        {messageShow.length === 0 ? (
          <div className="border border-black m-auto max-w-xl mt-10 h-72 text-start p-2">
            No Message Found
          </div>
        ) : (
          <div className="border border-black m-auto max-w-xl mt-10 h-72 text-start p-2">
            {messageShow.map((message, index) => (
              <div key={index} className="font-semibold">
                {message}
              </div>
            ))}
          </div>
        )}
        <br />
        <button
          className="border border-black mt-3 mr-10 rounded-md p-1 bg-blue-200 text-black"
          onClick={clearMessageHandler}
        >
          Clear all
        </button>
      </div>
      <div>
        <Link to="/">
          <button className="border border-black mt-5 mr-10 rounded-md p-1 bg-blue-200 text-black text-center max-w-xl">
            LogOut
          </button>
        </Link>
      </div>
      <ToastContainer hideProgressBar autoClose={150} />
    </div>
  );
};

export default Info;
