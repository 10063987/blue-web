// import { data } from 'cypress/types/jquery'
// import { useRouter } from 'next/router'


type PostProps = {
    post: {
        body: string
        id: number
        title: string
        userId: number
    }
}


const Post = ({ post }: PostProps) => {

    // const router = useRouter()

    // if (router.isFallback) {
    //     return <h1>Loading...</h1>
    // }


    return (<>
        <h2> {post.id} {post.title} </h2>
        <p>{post.body}</p>
    </>)
}

export default Post




export async function getStaticPaths() {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // const data = await response.json()

    // paths is an array of objects
    // each object contains params: { postId: '1' }
    // We have to tell NextJS What are the possible values for a statically generated dynamic pages
    // The code above will create dynamic static pages. Each page/route for each id 
    // const paths = data.map((post: { id: number }) => {
    //     return {
    //         params: { postId: `${post.id}` }
    //     }
    // })
    return {
        // HARDCODED PATHS 
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            },
        ],
        // paths,
        // With fallback set to false all the paths generated by getStaticPaths will be rendered as HTML files at build time
        // With fallback set to true all the paths not generated at build time won't result on 404 pages, INSTEAD NEXTJS will serve a fallback page. In the background NExtJS will statically generate the requested page in HTML and JSOIN 
        // With fallback set to blocking all the paths not generated at build time NExtJS will render them on the server and return the generated HTML. The browser receives the HTML for the generated path 
        fallback: 'blocking'
    }
}







export async function getStaticProps(context: { params: any }) {
    console.log(context)
    const { params } = context

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

    const post = await response.json()

    // If the user is looking for non existing id like '/posts/101' then let NextJS to know that it should render a 404 page
    if (!post.id) {
        return {
            notFound: true
        }
    }

    console.log(`Generating page for /posts/${params.postId}`)

    return {
        props: {
            post
        }
    }
}