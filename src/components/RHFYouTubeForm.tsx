/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// let renderCount = 0;

type FormValues = {
  username: string;
  channel: string;
  email: string;
};

export const RHFYouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      channel: "",
      email: "",
    },
  });
  const { register, control, handleSubmit, formState } = form;
  // const { name, ref, onChange, onBlur } = register("usernaem");
  // renderCount++;

  console.log("render");

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div>
      <h1>YouTube Form</h1>
      {/* <h1>count {renderCount}</h1> */}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          {/* <input type="text" id="username" name="username" /> */}
          {/* <input
          type="text"
          id="username"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        /> */}
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "required input",
            })}
          />
          <p className="error">{errors?.username?.message}</p>
        </div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
          })}
        />
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
