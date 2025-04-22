import { Button } from "@heroui/button";
import Container from "../../UI/Container";
import Link from "next/link";
import { getRecentPosts } from "@/src/services/RecentPosts";

export default async function RecentPosts() {
   const {data: posts}= await getRecentPosts(); 
  

  return (
    <Container>
      <div className="my-8">
        <h1 className="text-center">Recent Posts</h1>
        <p className="text-center py-4">List of posted items that were recently found and reported. </p>
      </div>
      <div>
        <p className="text-center py-4">Recent Posts </p>
        {
          posts.map(post=> <p key={post._id}>{post.description}</p>)
        }
        <div className="flex justify-center mb-12" >
          <Button>
            <Link href="found-items">See All</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}
