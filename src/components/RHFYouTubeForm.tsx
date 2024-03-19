/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// let renderCount = 0;

type FormValues = {
  username: string;
  channel: string;
  email: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
};

export const RHFYouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        username: data.username,
        channel: "OSN",
        email: data.email,
        social: {
          twitter: "twitter.com",
          facebook: "facebook.com",
        },
        phoneNumbers: ["0127389127912", "0329637835687", "", ""],
      };
    },
    // defaultValues: {
    //   username: "",
    //   channel: "",
    //   email: "",
    // },
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
        <div className="form-control">
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              validate: {
                tldCheck: (fieldValue) => {
                  return fieldValue.includes(".com") || "add .com TLD";
                },
                domainCheck: (fieldValue) => {
                  return fieldValue.includes("EX") || "add correct work domain";
                },
              },
            })}
          />
          <p className="error">{errors?.email?.message}</p>
        </div>
        <div className="form-control">
          <input type="text" id="facebook" {...register("social.facebook")} />
          <p className="error">{errors?.social?.facebook?.message}</p>
        </div>
        <div className="form-control">
          <input type="text" id="twitter" {...register("social.twitter")} />
          <p className="error">{errors?.social?.twitter?.message}</p>
        </div>

        <div className="form-control">
          <input
            type="text"
            id="phoneNumbers.1"
            {...register("phoneNumbers.1", { required: "required input" })}
          />
          <p className="error">{errors.phoneNumbers?.[1]?.message}</p>
        </div>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
