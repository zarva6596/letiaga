import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center font-vinnytsia-sans justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#303030]",
        ghost: "hover:bg-[#F9F9FB] bg-white hover:text-[#303030]",
        link: "text-[#459AF8] hover:text-primary underline-offset-3 hover:underline",
      },
      size: {
        s: "px-3.5 h-10",
        m: "h-[50px] px-[18px]",
        l: "h-16 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "m",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
