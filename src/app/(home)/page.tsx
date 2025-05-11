import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant="elevated">I am button</Button>
        </div>
        <div>
          <Input placeholder="I am input"></Input>
        </div>
        <div>
          <Progress value={60}></Progress>
        </div>
        <div>
          <Textarea placeholder="I am textarea"></Textarea>
        </div>
        <div>
          <Checkbox></Checkbox>
        </div>
      </div>
    </div>
  );
}
