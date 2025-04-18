
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";

export default function CatPassportGenerator() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("Catizen");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Generate Your Cat Passport</h1>

      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-[300px]"
      />

      <Select
        value={title}
        onValueChange={setTitle}
        className="w-[300px]"
      >
        <SelectItem value="Catizen">Catizen</SelectItem>
        <SelectItem value="Ambassacat">Ambassacat</SelectItem>
        <SelectItem value="Royal Paw">Royal Paw</SelectItem>
        <SelectItem value="Purr Minister">Purr Minister</SelectItem>
        <SelectItem value="Knight of the Meow">Knight of the Meow</SelectItem>
      </Select>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="text-sm"
      />

      {image && (
        <Card className="w-[300px] h-[420px] bg-white shadow-lg relative overflow-hidden">
          <CardContent className="p-4 relative">
            <img
              src="/cat-passport-template.png"
              alt="Passport Template"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <img
              src={image}
              alt="User Upload"
              className="absolute top-[110px] left-[90px] w-[120px] h-[120px] rounded-full object-cover border-2 border-white"
            />
            <div className="absolute bottom-6 left-6 text-xs text-black">
              <p>Name: {name || "_________"}</p>
              <p>Title: {title}</p>
              <p>Date: {new Date().toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {image && (
        <Button onClick={() => window.print()}>Download / Print Passport</Button>
      )}

      <div className="mt-8 flex flex-col gap-3 items-center">
        <h2 className="text-lg font-semibold">Support the Cat Republic</h2>

        <form action="https://www.paypal.com/donate" method="post" target="_blank">
          <input type="hidden" name="business" value="YOUR_PAYPAL_ID" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="amount" value="0.50" />
          <Button type="submit">Donate $0.50 – Postcard</Button>
        </form>

        <form action="https://www.paypal.com/donate" method="post" target="_blank">
          <input type="hidden" name="business" value="YOUR_PAYPAL_ID" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="amount" value="1.00" />
          <Button type="submit">Donate $1.00 – Standard Passport</Button>
        </form>

        <form action="https://www.paypal.com/donate" method="post" target="_blank">
          <input type="hidden" name="business" value="YOUR_PAYPAL_ID" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="amount" value="2.00" />
          <Button type="submit">Donate $2.00 – Deluxe Passport</Button>
        </form>
      </div>
    </div>
  );
}
