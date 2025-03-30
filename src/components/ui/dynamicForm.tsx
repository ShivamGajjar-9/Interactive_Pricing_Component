import React from "react";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

type Props = {};

const DynamicForm = ({ form, onSubmit, formFields, id, className }: Props) => {
  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-5 min-w-xs sm:min-w-md p-4 grid sm:gap-5 lg:gap-0", className)}
      >
        {formFields.map(({ component: Component, ...item }) => {
          return <Component key={item.name} control={form.control} {...item} />;
        })}
      </form>
    </Form>
  );
};

export default DynamicForm;
