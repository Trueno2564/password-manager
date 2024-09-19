import { useToast } from "@/hooks/use-toast"


export const copyClipboard = (value: string) => {
  const { toast } = useToast()
  navigator.clipboard.writeText(value);
  toast({
    title: "Value copied ☑️",
  });
};
