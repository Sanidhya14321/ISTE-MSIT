import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-extrabold p-2 tracking-tight sm:text-4xl md:text-5xl font-headline text-center",
        "bg-clip-text text-transparent bg-gradient-to-r from-[#7A85C1] to-[#ffffff]",
        className
      )}

      {...props}
    >
      {children}
    </h2>
  );
}
