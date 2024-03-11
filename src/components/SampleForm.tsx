import { useForm } from "react-hook-form";
import Input from "./Input";
interface UserForm {
  userId: string;
  password: string;
  name: string;
  age: number;
  gender: "MALE" | "FEMALE";
}

const SampleForm = () => {
  const { register, handleSubmit } = useForm<UserForm>();
  const onValid = ({ userId, password, name, age, gender }: UserForm) => {
    console.log({ userId, password, name, age, gender });
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Input label={"userId"} register={register("userId")} />
      <Input label={"password"} register={register("password")} />
      <Input label={"name"} register={register("name")} />
      <Input label={"age"} register={register("age")} />
      <Input label={"gender"} register={register("gender")} />
    </form>
  );
};
export default SampleForm;
