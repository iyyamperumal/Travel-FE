import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Card } from 'antd';

const TransportationForm = () => {
    const [form] = Form.useForm();
    const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

    const handleSubmit = (values) => {
        console.log('Transportation Details:', values);
        setSubmittedData(values); // Store submitted values in state
        form.resetFields(); // Optional: Reset form fields after submission
    };

    return (
        <div className='flex flex-col items-center'>
            <Form className='m-10 w-80' form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                    label="Transport Type"
                    name="transportType"
                    rules={[{ required: true, message: 'Please select transport type' }]}
                >
                    <Select placeholder="Select Transport Type">
                        <Select.Option value="Flight">Flight</Select.Option>
                        <Select.Option value="Train">Train</Select.Option>
                        <Select.Option value="Bus">Bus</Select.Option>
                        <Select.Option value="Rental Car">Rental Car</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Departure Location"
                    name="departureLocation"
                    rules={[{ required: true, message: 'Please enter departure location' }]}
                >
                    <Input placeholder="City or Place" />
                </Form.Item>
                <Form.Item
                    label="Arrival Location"
                    name="arrivalLocation"
                    rules={[{ required: true, message: 'Please enter arrival location' }]}
                >
                    <Input placeholder="City or Place" />
                </Form.Item>
                <Form.Item
                    label="Departure Date"
                    name="departureDate"
                    rules={[{ required: true, message: 'Please select departure date' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Save Transportation
                </Button>
            </Form>

            {/* Render submitted data below the form */}
            {submittedData && (
                <Card
                    title="Transportation Details"
                    className="w-80 mt-8"
                    bordered={true}
                >
                    <p><strong>Transport Type:</strong> {submittedData.transportType}</p>
                    <p><strong>Departure Location:</strong> {submittedData.departureLocation}</p>
                    <p><strong>Arrival Location:</strong> {submittedData.arrivalLocation}</p>
                    <p>
                        <strong>Departure Date:</strong> {submittedData.departureDate?.format('YYYY-MM-DD')}
                    </p>
                </Card>
            )}
        </div>
    );
};

export default TransportationForm;
