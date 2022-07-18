import Link from "next/link"

type PostsProps = {
    posts: {
        body: string
        id: number
        title: string
        userId: number
    }[]
}

const PostsList = ({ posts }: PostsProps) => {

    return (<>
        <div>
            {posts.map(post => {
                return (
                    <Link key={post.id} href={`/posts/${post.id}`} passHref prefetch={false}>
                        <h2  >{post.id} {post.title}</h2>
                    </Link>
                )
            })}
        </div>
    </>)
}

export default PostsList

export async function getStaticProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()


    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}