import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = (values: { email: string; password: string }) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            if (values.email === "phuanh@gmail.com" && values.password === "12345") {
                message.success("Login successful!");
                navigate("/home"); // Chuyển hướng đến trang Home
            } else {
                message.error("Incorrect email or password!");
            }
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-[400px]">
                {/* Hình ảnh */}
                <div className="w-1/2 hidden md:block">
                    <img
                        src="https://source.unsplash.com/800x600/?apartment"
                        alt="Login"
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>

                {/* Form đăng nhập */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <div className="text-center">
                        <img src="/logo.png" alt="Logo" className="mx-auto w-16" />
                        <h2 className="text-2xl font-bold mt-4">Nice to see you again</h2>
                    </div>

                    <Form layout="vertical" onFinish={onFinish} className="mt-6">
                        <Form.Item
                            label="Email or phone number"
                            name="email"
                            rules={[{ required: true, message: "Please enter your email!" }]}
                        >
                            <Input size="large" placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: "Please enter your password!" }]}
                        >
                            <Input.Password size="large" placeholder="Enter password" />
                        </Form.Item>

                        <div className="flex items-center justify-between">
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full"
                                size="large"
                                loading={loading}
                            >
                                Sign in
                            </Button>
                        </Form.Item>
                    </Form>

                    <Button
                        icon={<GoogleOutlined />}
                        className="w-full bg-gray-800 text-white p-3 rounded mt-2 flex items-center justify-center"
                        size="large"
                    >
                        Sign in with Google
                    </Button>

                    <p className="text-center mt-4">
                        Don’t have an account? <a href="#" className="text-blue-500">Sign up now</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
