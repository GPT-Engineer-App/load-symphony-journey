import { useState } from "react";
import { Cat, Heart, Info, Paw } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const catBreeds = [
  { name: "Siamese", origin: "Thailand", temperament: "Vocal, Affectionate, Intelligent" },
  { name: "Persian", origin: "Iran", temperament: "Gentle, Quiet, Docile" },
  { name: "Maine Coon", origin: "United States", temperament: "Gentle, Friendly, Intelligent" },
  { name: "British Shorthair", origin: "United Kingdom", temperament: "Calm, Patient, Intelligent" },
  { name: "Scottish Fold", origin: "Scotland", temperament: "Sweet-tempered, Adaptable, Playful" },
];

const CatCard = ({ breed, origin, temperament }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{breed}</CardTitle>
      <CardDescription>Origin: {origin}</CardDescription>
    </CardHeader>
    <CardContent>
      <p><strong>Temperament:</strong> {temperament}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [likes, setLikes] = useState(0);
  const { toast } = useToast();

  const handleLike = () => {
    setLikes(likes + 1);
    toast({
      title: "Thanks for the love!",
      description: "You've made a cat purr somewhere in the world.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 flex items-center justify-center text-purple-800">
          <Cat className="mr-2 text-pink-600" /> Feline Fascination
        </h1>
        <motion.img
          whileHover={{ scale: 1.05 }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl mb-8"
        />
        <Tabs defaultValue="about" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About Cats</TabsTrigger>
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Cats</CardTitle>
                <CardDescription>Fascinating feline facts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  Cats are enigmatic creatures that have been domesticated for thousands of years. 
                  Known for their independence, agility, and affectionate nature, cats continue to 
                  captivate humans with their mysterious charm and playful antics.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Characteristics of Cats</CardTitle>
                <CardDescription>What makes cats unique</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2">
                  <li className="flex items-center"><Paw className="mr-2 text-pink-600" /> Excellent hunters with sharp claws and teeth</li>
                  <li className="flex items-center"><Paw className="mr-2 text-pink-600" /> Flexible bodies and quick reflexes</li>
                  <li className="flex items-center"><Paw className="mr-2 text-pink-600" /> Keen senses, especially their night vision</li>
                  <li className="flex items-center"><Paw className="mr-2 text-pink-600" /> Communicate through vocalizations, body language, and scent</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <div className="space-y-4">
              {catBreeds.map((breed, index) => (
                <CatCard key={index} {...breed} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="flex justify-center items-center space-x-4">
          <Button onClick={handleLike} className="bg-pink-500 hover:bg-pink-600">
            <Heart className="mr-2" /> Like ({likes})
          </Button>
          <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-100">
            <Info className="mr-2" /> Learn More
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
