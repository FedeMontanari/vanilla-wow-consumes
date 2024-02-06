import getTooltipData from "@/lib/getTooltipData";
import { ItemTooltip } from "wow-classic-items/types/Item";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ItemTooltip({
  data,
  ...props
}: {
  data: {
    label: string;
    id: string;
  };
}) {
  const info = getTooltipData(data);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{info[0].label}</TooltipTrigger>
        <TooltipContent>
          <Card>
            <CardHeader>
              <CardTitle>{info[0].label}</CardTitle>
              <CardDescription>{info[2].label}</CardDescription>
            </CardHeader>
            <CardContent>{info[3].label}</CardContent>
          </Card>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
