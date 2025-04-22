import { Button } from "@heroui/button";
import Container from "../../UI/Container";
import Link from "next/link";

export default async function RecentPosts() {
  const res= await fetch("http://localhost:5000/api/v1/items?sortBy=-createdAt&limit=9")
  const data= await res.json(); 
  console.log(data); 

  return (
    <Container>
      <div className="my-8">
        <h1 className="text-center">Recent Posts</h1>
        <p className="text-center py-4">List of posted items that were recently found and reported. </p>
      </div>
      <div>
        <p className="text-center py-4">Recent Posts </p>
        <div className="flex justify-center mb-12" >
          <Button>
            <Link href="found-items">See All</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}
