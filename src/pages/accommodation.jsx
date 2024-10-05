import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Card } from 'antd';

const AccommodationForm = () => {
    const [form] = Form.useForm();
    const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

    const handleSubmit = (values) => {
        console.log('Accommodation Details:', values);
        setSubmittedData(values); // Store submitted values in state
        form.resetFields(); // Optional: Reset form fields after submission
    };

    return (
        <div className='flex flex-col items-center'>
            <Form className='m-10 w-80' form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                    label="Accommodation Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter accommodation name' }]}
                >
                    <Input placeholder="Hotel/Hostel/Apartment Name" />
                </Form.Item>
                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please enter location' }]}
                >
                    <Input placeholder="City or Place" />
                </Form.Item>
                <Form.Item
                    label="Check-In Date"
                    name="checkInDate"
                    rules={[{ required: true, message: 'Please select check-in date' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Check-Out Date"
                    name="checkOutDate"
                    rules={[{ required: true, message: 'Please select check-out date' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Room Type"
                    name="roomType"
                    rules={[{ required: true, message: 'Please select room type' }]}
                >
                    <Select placeholder="Select Room Type">
                        <Select.Option value="Single">Single</Select.Option>
                        <Select.Option value="Double">Double</Select.Option>
                        <Select.Option value="Suite">Suite</Select.Option>
                    </Select>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Save Accommodation
                </Button>
            </Form>

            {/* Render submitted data below the form */}
            {submittedData && (
                <Card
                    title="Accommodation Details"
                    className="w-80 mt-8"
                    bordered={true}
                >
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Location:</strong> {submittedData.location}</p>
                    <p>
                        <strong>Check-In Date:</strong>{' '}
                        {submittedData.checkInDate?.format('YYYY-MM-DD')}
                    </p>
                    <p>
                        <strong>Check-Out Date:</strong>{' '}
                        {submittedData.checkOutDate?.format('YYYY-MM-DD')}
                    </p>
                    <p><strong>Room Type:</strong> {submittedData.roomType}</p>
                </Card>
            )}
        </div>
    );
};

export default AccommodationForm;
