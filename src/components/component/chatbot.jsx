import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addUserMessage, addBotMessage } from "@/redux/slices/chatSlice";
import { FiSend } from "react-icons/fi"; // Importing the send icon from react-icons
import Image from "next/image";
export function DialogCloseButton() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const inputMessage = e.target.elements.message.value;

    // Dispatch user message
    dispatch(addUserMessage(inputMessage));

    // Dummy response from the bot
    const botResponse = "This is a dummy response from the bot.";

    // Dispatch bot response
    dispatch(addBotMessage(botResponse));

    // Reset the input field
    e.target.reset();
  };

  return (
    <div className="flex justify-end items-end ">
      <div className="">
        <Dialog className="">
          <DialogTrigger asChild>
            <Button
              variant=""
              className="bg-blue-500 rounded-full text-white w-20 h-20 hover:text-gray-100 hover:bg-blue-600"
            >
              <Image src="/bot.png" width={50} height={50} />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white mx-auto  max-w-lg some-component">
            <div>
              <div className=" mt-5 ">
                <div className="w-full  border overflow-hidden bg-white shadow-lg ">
                  <div className="bg-gray-200 border-b p-4">
                    <div className="grid items-center grid-cols-2 gap-4">
                      <h1 className="text-lg font-bold font-serif text-blue-500">
                        Chat Agent 🤖
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-col h-96 overflow-y-auto p-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex items-start mb-4 ${
                          message.type === "bot"
                            ? "justify-start"
                            : "justify-end"
                        }`}
                      >
                        {message.type === "bot" && (
                          <img
                            alt="Bot Avatar"
                            className="rounded-full mr-2"
                            src="/bot.png"
                            style={{
                              width: "40px",
                              height: "40px",
                            }}
                          />
                        )}
                        <div
                          className={`bg-gray-300 rounded-xl p-4 ${
                            message.type === "user"
                              ? "bg-blue-200"
                              : "bg-gray-300"
                          }`}
                          style={{ maxWidth: "70%" }} // Adjust the maximum width as needed
                        >
                          <p className="text-sm break-all">{message.content}</p>{" "}
                          {/* Added break-all to allow long words to break */}
                          <p className="text-xs text-gray-500">
                            <time>2:14pm</time>
                          </p>
                        </div>
                        {message.type === "user" && (
                          <img
                            alt="Bot Avatar"
                            className="rounded-full ml-2"
                            src="/user.jpg"
                            style={{
                              width: "40px",
                              height: "40px",
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="border-t p-4">
                    <form onSubmit={handleMessageSubmit} className="flex gap-4">
                      <Input
                        name="message"
                        className="flex-1 border rounded-full py-2 px-4"
                        placeholder="Type a message"
                      />
                      <Button
                        type="submit"
                        className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600"
                      >
                        <FiSend />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
