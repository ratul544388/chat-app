import { cn } from "../lib/utils";

const Input = ({ className, errors, ...props }) => {
  const error = errors?.[props.name]?.message;
  return (
    <div className="space-y-1">
      <label
        className={cn("text-sm block capitalize", error && "text-red-500")}
      >
        {props.name}
      </label>
      <input
        className={cn(
          "input input-bordered input-primary w-full",
          error && "border-red-500 focus:outline-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
