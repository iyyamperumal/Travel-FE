import React, { useState } from 'react';
import { Button, DatePicker, Form, InputNumber, Select } from 'antd';
import { addPlace, deletePlace } from '../store/todoRedux';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const { RangePicker } = DatePicker;

const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 6 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
};

const UserForm = () => {
    const [componentVariant, setComponentVariant] = useState('filled');
    const [totalDays, setTotalDays] = useState(0);  // State to capture total days
    const dispatch = useDispatch();

    const onFormVariantChange = ({ variant }) => {
        setComponentVariant(variant);
    };

    const disablePastDates = (current) => {
        return current && current < moment().endOf('day');
    };

    // Calculate total days based on the date range
    const handleDateChange = (dates) => {
        if (dates && dates.length === 2) {
            const startDate = dates[0];
            const endDate = dates[1];
            const daysDifference = endDate.diff(startDate, 'days') + 1; // Including the start date
            setTotalDays(daysDifference);
        } else {
            setTotalDays(0);
        }
    };

    const handleSubmit = (formValues) => {
        const { Date: dateRange, ...rest } = formValues;
        const formattedDateRange = dateRange ? dateRange.map((date) => date.toISOString()) : null;

        const serializedFormValues = {
            ...rest,
            Date: formattedDateRange,
            totalDays, // Include the total days in the form values
        };

        dispatch(deletePlace());
        dispatch(addPlace(serializedFormValues));
    };

    return (
        <Form
            {...formItemLayout}
            onValuesChange={onFormVariantChange}
            variant={componentVariant}
            style={{ maxWidth: 600 }}
            initialValues={{ variant: componentVariant }}
            onFinish={handleSubmit}
        >
            <div className='text-yellow-600 text-5xl flex justify-center font-bold pb-5'>
                Trip details
            </div>

            <Form.Item
                label="Journey From"
                name="Journey_From"
                rules={[{ required: true, message: 'Please select your departure location' }]}
            >
                <Select placeholder="Select your Departure Location" style={{ width: '100%' }}>
                    <Select.Option value="Chennai">Chennai</Select.Option>
                    <Select.Option value="Banglore">Banglore</Select.Option>
                    <Select.Option value="Delhi">Delhi</Select.Option>
                    <Select.Option value="Mumbai">Mumbai</Select.Option>
                    <Select.Option value="Thiruvananthapuram">Thiruvananthapuram</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Destination"
                name="destination"
                rules={[{ required: true, message: 'Please select a destination!' }]}
            >
                <Select placeholder="Select a destination" style={{ width: '100%' }}>
                    <Select.Option value="Bali">Bali</Select.Option>
                    <Select.Option value="Paris">Paris</Select.Option>
                    <Select.Option value="Ladakh">Ladakh</Select.Option>
                    <Select.Option value="Dubai">Dubai</Select.Option>
                    <Select.Option value="Barcelona">Barcelona</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="No.of.Passengers"
                name="No.of.Passengers"
                rules={[{ required: true, message: 'Please input!' }]}
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label="Date"
                name="Date"
                rules={[{ required: true, message: 'Please input!' }]}
            >
                <RangePicker disabledDate={disablePastDates} onChange={handleDateChange} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UserForm;
