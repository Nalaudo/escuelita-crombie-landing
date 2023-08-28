"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Container from "@/src/components/Container/Container";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  message: yup.string().required(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    reset();
    fetch(
      "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/send-email",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  };

  return (
    <Container
      id="help"
      className="flex flex-col items-center justify-center pb-20"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <h4 className="text-3xl font-semibold text-center">
          SEND US A MESSAGE
        </h4>
        <form
          className="flex flex-col gap-5 items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row items-center justify-center">
            <div>
              <input
                className="border-2 border-gray-400 rounded-lg p-1 m-2"
                placeholder="First Name"
                {...register("firstName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              <div className="text-red-500">
                {errors.firstName && "First name is required"}
              </div>
            </div>
            <div>
              <input
                className="border-2 border-gray-400 rounded-lg p-1 m-2"
                placeholder="Last Name"
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              <div className="text-red-500">
                {errors.lastName && "Last name is required"}
              </div>
            </div>
            <div>
              <input
                className="border-2 border-gray-400 rounded-lg p-1 m-2"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <div className="text-red-500">
                {errors.email && "Email is required"}
              </div>
            </div>
            <div>
              <input
                className="border-2 border-gray-400 rounded-lg p-1 m-2"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
              />
              <div className="text-red-500">
                {errors.phone && "Phone number is required"}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <textarea
              className="border-2 border-gray-400 rounded-lg p-1 m-2"
              rows={5}
              cols={50}
              placeholder="Message"
              {...register("message", { required: true })}
            />
            <div className="text-red-500">
              {errors.message && "Message is required"}
            </div>
          </div>
          <input
            className="cursor-pointer border-2 border-gray-400 rounded-lg h-10 w-20 m-2"
            name="Send"
            type="submit"
          />
        </form>
      </div>
    </Container>
  );
};

export default Form;
