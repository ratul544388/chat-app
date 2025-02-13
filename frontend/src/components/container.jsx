import { cn } from "../lib/utils";

const Container = ({ className, ...props }) => {
  return (
    <div
      className={cn("w-full max-w-screen-xl mx-auto px-4 sm:px-8", className)}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Container;
