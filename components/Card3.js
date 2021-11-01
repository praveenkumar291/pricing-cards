import React from "react";
import { AiOutlineArrowRight, AiOutlineInfoCircle } from "react-icons/ai";

const Card1 = () => {
  const list = [
    { text: "Industry-leading ticketing system  ", content: "praveen" },
    { text: "Messaging across web, mobile and social  ", content: "praveen1" },
    { text: "Email, voice, SMS, and live chat support ", content: "praveen2" },
    { text: " Help center -  Single  ", content: "praveen3" },
    { text: "Easy-to-set up automations & workflows  ", content: "praveen4" },
    {
      text: " AI-powered automated answers - Up to 50 ",
      content: "praveen4",
    },
    {
      text: "Unified agent workspac",
      content:
        "A unified, conversation-focused agent workspace helps your team manage conversations across all web, mobile and social channels in one single view.",
    },
    {
      text: " 1,000+ apps and integrations - Prebuilt  ",
      content: "praveen4",
    },

    {
      text: "Data and file storage - Standard  ",
      content: "praveen4",
    },
    {
      text: " Robust APIs - Standard rate limit ",
      content: "praveen4",
    },
    {
      text: "Online, email, and phone support from the Zendesk team  ",
      content: "praveen4",
    },
    { text: "Onboarding and adoption guidance ", content: "praveen4" },
  ];
  return (
    <>
      <div className="container">
        <div className="bg-white  flex flex-col max-w-xs round-x1 shadow-lg margin-25 ">
          <div className="product-title">
            <h3>Suite Professional</h3>
          </div>
          <div className="product-price">
            <p>$99</p>
          </div>
          <div className="product-billed">
            <p> per agent/month billed annually</p>
          </div>
          <div className="card1_buynow">
            {/* <Button className="card1_btn1">Buynow</Button> */}
            <button className="py-2 px-8 font-semibold rounded-lg shadow-md text-white bg-green-800 hover:bg-green-700">
              Buynow
            </button>
          </div>
          <div className="product-free">
            <p className="product-trail">Free trail</p>
            <p>
              <i>
                <AiOutlineArrowRight />
              </i>
            </p>
          </div>
          <div>
            <ul>
              {list.map((item) => (
                <li>
                  <div className="product-item">{item.text} </div>
                  <div>
                    {/* <Popup
                      className="content-wrapper"
                      trigger={
                        <Icon
                          className="icon_two"
                          circular
                          name="info circle"
                        />
                      }
                      content={item.content}
                      size="max"
                    /> */}
                    <i className="icon_two">
                      <AiOutlineInfoCircle />
                    </i>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
