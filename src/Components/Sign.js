import React, { useState } from "react";
import "../Css/sign.css";
import { Button, Card, Checkbox, DatePicker, Flex, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { RiUserLine } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { LuKeyRound } from "react-icons/lu";

function Sign() {
  const [firstbox, setFirstbox] = useState("box1");
  const [secondbox, setSecondbox] = useState("box2");

  const [firstboxs, setFirstboxs] = useState("box1s");
  const [secondboxs, setSecondboxs] = useState("box2s");

  const [trigger, setTrigger] = useState(true);
  const [triggers, setTriggers] = useState(true);

  const myfunction = () => {
    let element = document.getElementById("a1");
    let element1 = document.getElementById("a2");
    if (trigger) {
      element.className = firstbox;
      element1.className = secondbox;
      setTrigger(false);
    } else {
      element.className = "box1r";
      element1.className = "box2r";
      setTrigger(true);
    }
  };

  const myforgot = () => {
    let element = document.getElementById("form");
    let element1 = document.getElementById("forgot");
    if (triggers) {
      element.className = firstboxs;
      element1.className = secondboxs;
      setTriggers(false);
    } else {
      element.className = "box1sr";
      element1.className = "box2sr";
      setTriggers(true);
    }
  };

  const signimg = require("../Images/signin.gif");
  const signupimg = require("../Images/signup_pink.gif");
  const forgotimg = require("../Images/Waiting.gif");

  const Signin = (
    <>
      <Card
        title={
          <div
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
              color: "blue",
            }}
          >
            Sign In
          </div>
        }
        className="sign_card"
      >
        <Form autoComplete="off" style={{ marginTop: "20px" }}>
          <Form.Item
            name={"userid"}
            rules={[{ required: true, message: "please enter user id" }]}
          >
            <Input
              addonBefore={<RiUserLine size={20} color="blue" />}
              name="userid"
              placeholder="Enter the user id"
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            rules={[{ required: true, message: "please enter password" }]}
          >
            <Input.Password
              addonBefore={<MdLockOutline size={20} color="blue" />}
              name="password"
              placeholder="Enter the user password"
            />
          </Form.Item>
          <Flex justify="space-between">
            <Flex vertical>
              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  type="link"
                  style={{ fontSize: 15, fontWeight: 600, color: "blue" }}
                  onClick={myfunction}
                >
                  New User? Sign Up
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="link"
                  style={{ fontSize: 15, fontWeight: 600, color: "blue" }}
                  onClick={myforgot}
                >
                  Forgot Password...
                </Button>
              </Form.Item>
            </Flex>
            <Flex align="center">
              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Flex>
          </Flex>
        </Form>
      </Card>
    </>
  );
  const Signpic = (
    <div className={"sigin"}>
      <div style={{ marginRight: "20px" }}>
        <img src={signimg} alt="Sign in image" height={420} />
      </div>
    </div>
  );

  const Signup = (
    <>
      <Card
        title={
          <div
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
              color: "#9922c3",
            }}
          >
            Sign Up
          </div>
        }
        className="sign_card"
      >
        <Form autoComplete="off" style={{ marginTop: "20px" }}>
          <Form.Item
            name={"username"}
            rules={[{ required: true, message: "please enter user name" }]}
          >
            <Input
              addonBefore={<RiUserLine size={20} color="#9922c3" />}
              placeholder="Enter the user name"
            />
          </Form.Item>
          <Form.Item
            name={"Dob"}
            rules={[{ required: true, message: "please enter Dob" }]}
          >
            {/* <DatePicker style={{width:"100%"}} /> */}
            <Flex className="date">
              <div className="date_icon">
                <MdDateRange size={20} color="#9922c3" />
              </div>
              <div className="date_pics">
                <DatePicker
                  className="date_pic"
                  placeholder="please enter Dob"
                />
              </div>
            </Flex>
          </Form.Item>
          <Form.Item
            name={"email"}
            rules={[{ required: true, message: "please enter email id" }]}
          >
            <Input
              addonBefore={<HiOutlineMail size={20} color="#9922c3" />}
              placeholder="Enter the email id"
            />
          </Form.Item>
          <Form.Item
            name={"mobile"}
            rules={[{ required: true, message: "please enter mobile.no" }]}
          >
            <Input
              addonBefore={<FaMobileScreen size={20} color="#9922c3" />}
              name="userid"
              placeholder="Enter the mobile.no"
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            rules={[{ required: true, message: "please enter password" }]}
          >
            <Input.Password
              addonBefore={<MdLockOutline size={20} color="#9922c3" />}
              name="password"
              placeholder="Enter the user password"
            />
          </Form.Item>
          <Form.Item name={"check"}>
            <Checkbox
              style={{
                marginLeft: "10px",
                fontSize: 15,
                fontWeight: 600,
                color: "#9922c3",
              }}
              className="check"
            >
              Remember me
            </Checkbox>
          </Form.Item>
          <Flex justify="space-between">
            <Form.Item>
              <Button
                type="link"
                style={{ fontSize: 15, fontWeight: 600, color: "#9922c3" }}
                onClick={myfunction}
              >
                I have an account...
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{ backgroundColor: "#9922c3" }}>
                Submit
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </Card>
    </>
  );

  const Signuppic = (
    <div className={"sigup"}>
      <div style={{ marginLeft: "20px" }}>
        <img src={signupimg} alt="Sign up image" height={420} />
      </div>
    </div>
  );

  const Forgot = (
    <>
      <Card
        title={
          <div
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
              color: "#7022c3",
            }}
          >
            Forgot Password
          </div>
        }
        className="sign_card"
      >
        <Form autoComplete="off" style={{ marginTop: "20px" }}>
          <Form.Item
            name={"email"}
            rules={[{ required: true, message: "please enter email id" }]}
          >
            <Input
              addonBefore={<HiOutlineMail size={20} color="#7022c3" />}
              name="email"
              placeholder="Enter the email id"
            />
          </Form.Item>
          <Form.Item
            name={"otp"}
            rules={[{ required: true, message: "please enter otp" }]}
          >
            <Input.Password
              addonBefore={<LuKeyRound size={20} color="#7022c3" />}
              name="otp"
              placeholder="Enter the  otp"
            />
          </Form.Item>
          <Flex justify="space-between">
            <Form.Item>
              <Button
                type="link"
                style={{ fontSize: 15, fontWeight: 600, color: "#7022c3" }}
                onClick={myforgot}
              >
                Back To Sign In...
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{ backgroundColor: "#7022c3" }}>
                Send OTP
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </Card>
    </>
  );

  const forgotimgs = (
    <>
      <div style={{ marginLeft: "50px" }}>
        <img src={forgotimg} alt="Forgot image" height={550} />
      </div>
    </>
  );

  return (
    <>
      <Flex className="main" justify="center" align="center">
        <div className="in">
          <div className="forgot" id="forgot">
            <Flex>
              <Flex justify="center" align="center" className="b1">
                {forgotimgs}
              </Flex>
              <Flex justify="center" align="center" className="b2">
                {Forgot}
              </Flex>
            </Flex>
          </div>
          <div className="form" id="form">
            <Flex>
              <div className="a1" id="a1">
                <Flex
                  justify="center"
                  align="center"
                  style={{ height: "600px" }}
                >
                  <div className={trigger ? "text" : "hide"}>{Signin}</div>
                  <div className={trigger ? "hide" : "text"}>{Signup}</div>
                </Flex>
              </div>
              <div className="a2" id="a2">
                <Flex
                  justify="center"
                  align="center"
                  style={{ height: "600px", width: "450p" }}
                >
                  <div className={trigger ? "text" : "hide"}>{Signpic}</div>
                  <div className={trigger ? "hide" : "text"}>{Signuppic}</div>
                </Flex>
              </div>
            </Flex>
          </div>
        </div>
      </Flex>
    </>
  );
}

export default Sign;
