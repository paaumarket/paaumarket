import { useNavigation } from "react-router-dom";

export default function MyButton({ bgColor, value, name }) {
  const navigation = useNavigation();

  function submitText(value) {
    const text =
      navigation.state === "submitting"
        ? "Saving..."
        : navigation.state === "loading"
          ? "Saved!"
          : value;

    return text;
  }

  return (
    <input
      type="submit"
      value={submitText(value)}
      name={name}
      className={`cursor-pointer rounded-md ${
        bgColor === undefined ? "bg-jade-500" : bgColor
      } p-5 text-sm font-extrabold text-white`}
    />
  );
}
