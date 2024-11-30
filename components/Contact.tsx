"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { handleSubmit, register } = useForm<FormInput>();
  // ...

  const handleOnSumbit: SubmitHandler<FormInput> = (data) => {
    console.log("Hemant", data);
  };

  return (
    <div>
      <div className="flex items-center">
        <p className="text-2xl">Let's Build Something Awesome Together! </p>
        <p className="text-5xl animate-bounce">🙋‍♂️</p>
      </div>
      <div className="  shadow-lg shadow-indigo-500/50   mt-2 rounded-lg py-10 px-8 gap-3 w-[20rem] flex flex-col justify-center lg:w-[50rem]">
        <div>
          <label htmlFor="">Name</label>
          <Input
            className="hover:border-red-600 placeholder:animate-bounce"
            placeholder="What's Your Name, Superstar?"
            {...register("name")}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <Input
            placeholder="How Can I Reach You ? (Email or Magic Signal)"
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <Textarea
            placeholder="P.S. I respond faster than a caffeine-fueled coder on deadline!"
            {...register("message")}
          />
        </div>
        <Button
          className="hover:bg-red-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300"
          onClick={handleSubmit(handleOnSumbit)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
